"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="section-shell">
        {(eyebrow || title || subtitle) && (
          <motion.div
            className="mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-ice">{eyebrow}</p>}
            {title && <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>}
            {subtitle && <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
