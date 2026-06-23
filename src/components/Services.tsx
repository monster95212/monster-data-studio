"use client";

import { services } from "@/lib/content";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="从原始数据到最终报告，完成一整套可交付分析。"
      subtitle="不只是跑出结果，更重视数据是否干净、方法是否合理、图表是否清楚、结论是否能被复现。"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-ice/40"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          >
            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-sm text-ice">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-muted">{service.text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
