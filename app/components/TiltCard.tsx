"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  intensity?: number;
  /** Show the moving glare highlight. */
  glare?: boolean;
  style?: MotionStyle;
}

/**
 * A card that tilts in 3D toward the cursor with a soft spring, plus an
 * optional glare highlight that tracks the pointer. Falls back to a static
 * card when the pointer leaves.
 */
const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  intensity = 10,
  glare = true,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 18,
  });

  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      className={`relative [perspective:1000px] ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          style={{
            background: useTransform(
              [glareX, glareY] as const,
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.28), transparent 55%)`
            ),
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
