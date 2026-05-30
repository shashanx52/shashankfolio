"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, Workflow, BarChart3 } from "lucide-react";
import TiltCard from "../components/TiltCard";

const services = [
  {
    icon: Database,
    title: "Data Analytics & SQL",
    desc: "Modeling marketing and revenue data in BigQuery, writing performant SQL, and building attribution that actually holds up to scrutiny.",
    accent: "from-green-400 to-emerald-500",
  },
  {
    icon: Workflow,
    title: "Automation & Pipelines",
    desc: "End-to-end BigQuery × Meta Ads integration and Python / n8n automations that eliminate manual exports and run themselves daily.",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Insights",
    desc: "Looker and MIS dashboards spanning 50+ creatives — tracking spend, ROAS and creative efficiency so decisions are data-led.",
    accent: "from-violet-400 to-purple-500",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          What I Do
        </p>
        <h2 className="section-title">Turning raw data into decisions</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <TiltCard intensity={10} className="h-full">
                <div className="group glass relative h-full overflow-hidden rounded-2xl p-7">
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
                  <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg [transform:translateZ(40px)]`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
