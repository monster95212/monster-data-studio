"use client";

import { analysisStack } from "@/lib/content";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Tools() {
  return (
    <Section id="tools" eyebrow="Analysis Stack" title="一套从数据清洗到可复现交付的方法体系。">
      <div className="grid gap-5">
        {analysisStack.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass grid gap-6 rounded-2xl p-5 sm:p-6 lg:grid-cols-[0.7fr_1fr_0.8fr]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div>
              <span className="text-sm text-ice">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-lg text-zinc-300">{item.cn}</p>
              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-zinc-500">适用问题</p>
              <p className="mt-2 leading-7 text-muted">{item.problem}</p>
            </div>
            <StackColumn title="常用方法" items={item.methods} />
            <StackColumn title="输出结果" items={item.outputs} highlight />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function StackColumn({ title, items, highlight = false }: { title: string; items: string[]; highlight?: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-full border px-3 py-2 text-sm ${
              highlight
                ? "border-ice/20 bg-ice/10 text-ice"
                : "border-white/10 bg-white/[0.04] text-zinc-300"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
