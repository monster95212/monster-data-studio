"use client";

import { processSteps } from "@/lib/content";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process" eyebrow="Process" title="清晰的交付流程，让每一步都有结果。">
      <div className="relative grid gap-4 lg:grid-cols-5">
        <div className="absolute left-0 top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
        {processSteps.map(([title, text], index) => (
          <motion.article
            key={title}
            className="glass relative rounded-2xl p-6 transition hover:border-ice/40 lg:min-h-64"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ice/35 bg-ice/10 text-sm text-ice">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
