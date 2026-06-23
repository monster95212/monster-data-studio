"use client";

import { works } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Section from "./Section";

type Work = (typeof works)[number];

export default function Works() {
  const [active, setActive] = useState<Work | null>(null);

  return (
    <Section
      id="works"
      eyebrow="Selected Works"
      title="精选数据分析案例"
      subtitle="用脱敏案例展示从数据清洗、建模验证到图表报告的完整交付能力。"
      className="bg-white/[0.02]"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {works.map((work, index) => (
          <motion.article
            key={work.title}
            className="glass group overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-ice/45 sm:p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <ChartPreview type={work.chart} />
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-ice/25 bg-ice/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-ice">
                Complexity: {work.complexity}
              </span>
              {work.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{work.title}</h3>
            <p className="mt-3 leading-7 text-muted">{work.text}</p>
            <InfoBlock label="分析问题" value={work.problem} />
            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">方法链路</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {work.workflow.map((step) => (
                  <span key={step} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-300">
                    {step}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <MetricBadges metrics={work.metrics} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">交付物</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{work.deliverables.join(" / ")}</p>
              </div>
            </div>
            <button className="mt-6 text-sm font-medium text-ice" onClick={() => setActive(work)}>
              查看详情
            </button>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>
        {active && <CaseModal work={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function CaseModal({ work, onClose }: { work: Work; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        className="glass max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-2xl p-5 sm:p-7"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.22 }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-ice">Case Detail</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">{work.title}</h3>
          </div>
          <button className="rounded-full border border-white/12 px-4 py-2 text-sm text-white hover:border-ice/50" onClick={onClose}>
            关闭
          </button>
        </div>
        <div className="mt-7 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ChartPreview type={work.chart} large />
          <div className="space-y-5">
            <Detail label="项目背景" value={work.background} />
            <Detail label="数据类型" value={work.dataType} />
            <Detail label="分析目标" value={work.goal} />
            <Detail label="方法链路" value={work.workflow.join(" → ")} />
            <Detail label="核心指标" value={work.metrics.join(" / ")} />
            <Detail label="交付文件" value={work.deliverables.join(" / ")} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{value}</p>
    </div>
  );
}

function MetricBadges({ metrics }: { metrics: string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">关键指标</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {metrics.map((metric) => (
          <span key={metric} className="rounded-full border border-ice/20 bg-ice/10 px-2.5 py-1 text-xs text-ice">
            {metric}
          </span>
        ))}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-2 leading-7 text-zinc-300">{value}</p>
    </div>
  );
}

function ChartPreview({ type, large = false }: { type: Work["chart"]; large?: boolean }) {
  const height = large ? "h-80" : "h-52";
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(125,211,252,0.16),transparent_16rem),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4 ${height}`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="relative h-full">
        {type === "forecast" && <ForecastChart />}
        {type === "churn" && <ChurnChart />}
        {type === "medical" && <MedicalChart />}
        {type === "survey" && <SurveyChart />}
        {type === "text" && <TextChart />}
        {type === "gis" && <GisChart />}
      </div>
    </div>
  );
}

function ForecastChart() {
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full">
      <path d="M34 156 C88 138 108 146 148 118 C194 84 230 96 274 70 C318 44 354 64 390 40" fill="none" stroke="rgba(125,211,252,.92)" strokeWidth="4" />
      <path d="M240 92 C286 58 332 76 390 48 L390 108 C332 134 286 116 240 140 Z" fill="rgba(125,211,252,.15)" />
      <path d="M34 172 H390" stroke="rgba(255,255,255,.18)" />
      <path d="M34 68 H390" stroke="rgba(255,255,255,.08)" />
      <text x="34" y="34" fill="rgba(255,255,255,.76)" fontSize="16">Rolling Forecast</text>
      <text x="290" y="190" fill="rgba(125,211,252,.9)" fontSize="13">MAPE 8.4%</text>
    </svg>
  );
}

function ChurnChart() {
  const points = [
    [74, 138], [98, 116], [120, 152], [148, 108], [176, 132], [212, 82], [236, 116], [268, 74], [304, 104], [334, 62],
  ];
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full">
      <text x="28" y="32" fill="rgba(255,255,255,.76)" fontSize="16">Segmentation + SHAP</text>
      {points.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i % 3 === 0 ? 8 : 6} fill={i > 5 ? "rgba(125,211,252,.9)" : "rgba(255,255,255,.42)"} />
      ))}
      {[118, 92, 68, 44].map((w, i) => (
        <rect key={w} x="260" y={128 + i * 18} width={w} height="8" rx="4" fill={i === 0 ? "rgba(125,211,252,.9)" : "rgba(255,255,255,.28)"} />
      ))}
      <text x="292" y="202" fill="rgba(125,211,252,.9)" fontSize="13">AUC .87</text>
    </svg>
  );
}

function MedicalChart() {
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full">
      <text x="28" y="32" fill="rgba(255,255,255,.76)" fontSize="16">ROC + Calibration</text>
      <path d="M58 172 C82 130 104 92 146 70 C188 50 228 48 264 42" fill="none" stroke="rgba(125,211,252,.9)" strokeWidth="4" />
      <path d="M58 172 L264 42" stroke="rgba(255,255,255,.16)" strokeDasharray="6 6" />
      <path d="M302 166 C322 132 348 118 384 88" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="3" />
      <path d="M304 166 L386 84" stroke="rgba(125,211,252,.5)" strokeDasharray="5 5" />
      <text x="58" y="198" fill="rgba(125,211,252,.9)" fontSize="13">AUC .91</text>
      <text x="300" y="198" fill="rgba(255,255,255,.58)" fontSize="13">Brier .12</text>
    </svg>
  );
}

function SurveyChart() {
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full">
      <text x="28" y="32" fill="rgba(255,255,255,.76)" fontSize="16">SEM Path + Reliability</text>
      {[[84, 98, "A"], [204, 58, "M"], [324, 118, "Y"], [204, 162, "W"]].map(([x, y, t]) => (
        <g key={t as string}>
          <rect x={(x as number) - 28} y={(y as number) - 18} width="56" height="36" rx="12" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.18)" />
          <text x={x as number} y={(y as number) + 5} textAnchor="middle" fill="rgba(255,255,255,.82)" fontSize="15">{t}</text>
        </g>
      ))}
      <path d="M112 94 C146 78 158 64 176 60 M232 64 C270 78 286 94 296 108 M232 160 C272 150 288 136 296 124" stroke="rgba(125,211,252,.78)" fill="none" strokeWidth="3" />
      <text x="58" y="198" fill="rgba(125,211,252,.9)" fontSize="13">Alpha .92</text>
      <text x="162" y="198" fill="rgba(255,255,255,.58)" fontSize="13">KMO .88</text>
    </svg>
  );
}

function TextChart() {
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full">
      <text x="28" y="32" fill="rgba(255,255,255,.76)" fontSize="16">Topics + Sentiment</text>
      {[[92, 112, 34], [150, 78, 22], [204, 126, 44], [272, 82, 28], [326, 132, 20]].map(([x, y, r], i) => (
        <circle key={x} cx={x} cy={y} r={r} fill={i === 2 ? "rgba(125,211,252,.55)" : "rgba(255,255,255,.16)"} stroke="rgba(255,255,255,.16)" />
      ))}
      {[94, 76, 58, 42].map((w, i) => (
        <rect key={w} x="62" y={172 + i * 10} width={w} height="5" rx="3" fill={i === 0 ? "rgba(125,211,252,.82)" : "rgba(255,255,255,.28)"} />
      ))}
      <text x="268" y="198" fill="rgba(125,211,252,.9)" fontSize="13">Positive 64%</text>
    </svg>
  );
}

function GisChart() {
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full">
      <text x="28" y="32" fill="rgba(255,255,255,.76)" fontSize="16">Spatial Grid + Heatmap</text>
      {Array.from({ length: 24 }).map((_, i) => {
        const x = 62 + (i % 8) * 34;
        const y = 64 + Math.floor(i / 8) * 34;
        const hot = [5, 6, 13, 14, 21].includes(i);
        return <rect key={i} x={x} y={y} width="28" height="28" rx="6" fill={hot ? "rgba(125,211,252,.58)" : "rgba(255,255,255,.08)"} stroke="rgba(255,255,255,.1)" />;
      })}
      <circle cx="292" cy="108" r="34" fill="rgba(125,211,252,.18)" />
      <circle cx="292" cy="108" r="14" fill="rgba(125,211,252,.86)" />
      <text x="62" y="198" fill="rgba(125,211,252,.9)" fontSize="13">Coverage 92%</text>
    </svg>
  );
}
