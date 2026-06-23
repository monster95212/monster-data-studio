"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About Monster" title="把复杂的数据分析过程，整理成客户能看懂、能复现、能交付的结果。" className="bg-white/[0.02]">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.75fr]">
        <motion.div
          className="glass rounded-2xl p-7 sm:p-9"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-lg leading-9 text-zinc-300">
            你好，我是 Monster，一名专注数据分析与建模交付的数据服务提供者。
          </p>
          <p className="mt-5 text-lg leading-9 text-zinc-300">
            我主要提供数据清洗、统计建模、机器学习预测、可视化图表和分析报告写作服务。熟悉 Python、R、Stata、SPSS、SQL、Excel 等工具，能够完成从原始数据整理、变量构建、模型分析，到 Word 报告、Jupyter Notebook 和可复现代码的完整交付。
          </p>
          <p className="mt-5 text-lg leading-9 text-zinc-300">
            我做过市场调研、经营数据分析、机器学习预测、客户分群、文本评论分析、医学统计分析等类型项目，更擅长把复杂的数据分析过程整理成客户能看懂、能复现、能交付的结果。
          </p>
          <p className="mt-8 rounded-2xl border border-ice/20 bg-ice/10 p-5 text-xl font-medium leading-8 text-white">
            不只做出结果，更重视结果是否清楚、合理、可复现。
          </p>
        </motion.div>
        <motion.aside
          className="glass rounded-2xl p-7"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div className="mb-10 h-24 w-24 rounded-3xl border border-white/12 bg-gradient-to-br from-white/14 to-ice/12" />
          <h3 className="text-3xl font-semibold text-white">Monster</h3>
          <p className="mt-3 text-zinc-300">Data Analysis / Modeling / Reporting</p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-300">
            {["Python", "R", "Stata", "SPSS", "SQL", "Excel"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-10 text-2xl font-semibold leading-tight text-white">Clean. Model. Visualize. Deliver.</p>
        </motion.aside>
      </div>
    </Section>
  );
}
