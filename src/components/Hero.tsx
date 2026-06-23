"use client";

import { motion } from "framer-motion";
import { scrollToId } from "@/lib/utils";

const proofCards = [
  {
    title: "统计分析与论文结果表",
    text: "回归 / 方差分析 / 信效度 / 中介调节",
  },
  {
    title: "机器学习预测与模型解释",
    text: "XGBoost / LSTM / SHAP / 聚类预测",
  },
  {
    title: "可复现交付",
    text: "Notebook / Word 报告 / 图表 / 代码",
  },
];

const proofTags = ["稳健性检验", "ROC / 校准曲线 / DCA", "文本分析 / GIS / 可视化报告"];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-10 pb-16 lg:grid-cols-[0.96fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            数据分析 / 统计建模 / 机器学习 / 可复现报告交付
          </p>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-ice">
            Monster Data Studio
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            专业数据分析与建模交付服务
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            从原始数据清洗、统计建模、机器学习预测，到可视化图表、可复现代码和 Word 分析报告，把复杂数据整理成清楚、可信、可交付的结果。
          </p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <button
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-ice"
              onClick={() => scrollToId("works")}
            >
              查看案例
            </button>
            <button
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-ice/70 hover:bg-white/[0.06]"
              onClick={() => scrollToId("contact")}
            >
              提交需求
            </button>
          </motion.div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proofCards.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-4">
                <h3 className="text-sm font-semibold leading-6 text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {proofTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto h-[520px] w-full max-w-[540px] sm:h-[580px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <div className="absolute inset-8 rounded-full bg-ice/10 blur-3xl" />
          <FloatingCard className="left-2 top-4 w-[82%]" delay={0}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Forecast Model</p>
            <svg viewBox="0 0 360 150" className="mt-3 h-36 w-full">
              <path d="M28 112 C78 98 102 102 144 76 C188 49 220 62 258 42 C292 25 322 38 338 28 L338 88 C306 104 284 96 252 112 C208 132 184 104 144 126 C96 150 72 130 28 138 Z" fill="rgba(125,211,252,.12)" />
              <path d="M28 118 C78 100 106 103 148 78 C190 53 224 65 260 44 C294 26 322 38 338 30" fill="none" stroke="rgba(125,211,252,.95)" strokeWidth="4" />
              <path d="M28 132 H338" stroke="rgba(255,255,255,.16)" />
              <path d="M28 70 H338" stroke="rgba(255,255,255,.08)" />
              <text x="246" y="122" fill="rgba(125,211,252,.9)" fontSize="12">RMSE 12.8</text>
            </svg>
          </FloatingCard>
          <FloatingCard className="right-0 top-40 w-[62%]" delay={0.8}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Model Validation</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              {["AUC .91", "ACC .86", "MAPE 8.4%"].map((metric) => (
                <span key={metric} className="rounded-lg border border-white/10 bg-white/[0.05] px-2 py-3 text-center text-ice">
                  {metric}
                </span>
              ))}
            </div>
            <svg viewBox="0 0 220 96" className="mt-3 h-20 w-full">
              <path d="M24 78 C40 52 58 32 92 26 C126 18 152 18 190 14" fill="none" stroke="rgba(125,211,252,.88)" strokeWidth="4" />
              <path d="M24 78 L190 14" stroke="rgba(255,255,255,.18)" strokeDasharray="6 6" />
            </svg>
          </FloatingCard>
          <FloatingCard className="bottom-32 left-0 w-[66%]" delay={1.4}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">SHAP Importance</p>
            {[
              ["feature_01", 92],
              ["feature_07", 74],
              ["feature_03", 58],
              ["feature_12", 42],
            ].map(([name, width]) => (
              <div key={name} className="mt-3 grid grid-cols-[4.8rem_1fr] items-center gap-3 text-xs text-zinc-300">
                <span>{name}</span>
                <span className="h-2 rounded-full bg-white/[0.08]">
                  <span className="block h-2 rounded-full bg-ice/80" style={{ width: `${width}%` }} />
                </span>
              </div>
            ))}
          </FloatingCard>
          <FloatingCard className="bottom-6 right-5 w-[74%]" delay={2}>
            <p className="text-sm font-medium text-white">完整交付包</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-300">
              <span className="rounded-lg bg-white/[0.06] p-3">Word 分析报告</span>
              <span className="rounded-lg bg-white/[0.06] p-3">Jupyter Notebook</span>
              <span className="rounded-lg bg-white/[0.06] p-3">模型指标表</span>
              <span className="rounded-lg bg-white/[0.06] p-3">可视化图表包</span>
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) {
  return (
    <motion.div
      className={`glass absolute rounded-2xl p-5 shadow-glow ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
