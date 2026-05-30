"use client";
import React, { useEffect, useState } from "react";

/** Live local time in IST — renders only after mount to avoid hydration drift. */
const LocalTime: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const t = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return <span className={className}>{time ?? "--:--"} IST</span>;
};

export default LocalTime;
