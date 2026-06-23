"use client";

import { faqPromises, faqs } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Section from "./Section";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="常见问题"
      subtitle="在开始分析前，先把数据、方法、交付和边界说清楚。"
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {faqPromises.map(([title, text], index) => (
            <motion.div
              key={title}
              className="glass rounded-2xl p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <span className="text-sm text-ice">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-white sm:px-6"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
              >
                <span>{question}</span>
                <span className="shrink-0 text-ice">{open === index ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 leading-7 text-muted sm:px-6">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
