"use client";

import { formOptions } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import Section from "./Section";

type FormState = {
  projectType: string;
  dataFormat: string;
  tool: string;
  deadline: string;
  deliverable: string;
  contact: string;
  description: string;
};

const initialForm: FormState = {
  projectType: formOptions.projectType[0],
  dataFormat: formOptions.dataFormat[0],
  tool: formOptions.tool[0],
  deadline: "",
  deliverable: formOptions.deliverable[0],
  contact: "",
  description: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState({ type: "", message: "" });

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.projectType || !form.contact.trim() || !form.description.trim()) {
      setNotice({ type: "error", message: "请填写项目类型、联系方式和项目说明。" });
      return;
    }

    setLoading(true);
    setNotice({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setNotice({ type: "error", message: result.message || "提交失败，请稍后重试。" });
        return;
      }

      setNotice({ type: "success", message: result.message || "需求已提交，我会尽快联系你。" });
      setForm(initialForm);
    } catch {
      setNotice({ type: "error", message: "提交失败，请稍后重试。" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Ready to turn your data into answers?"
      subtitle="把你的数据、需求和截止时间发给我，我会根据任务难度给出分析方案。"
      className="pb-16"
    >
      <form className="glass grid gap-5 rounded-2xl p-5 sm:p-7 lg:grid-cols-2" onSubmit={submit}>
        <Select label="项目类型" value={form.projectType} options={formOptions.projectType} onChange={(value) => update("projectType", value)} />
        <Select label="数据格式" value={form.dataFormat} options={formOptions.dataFormat} onChange={(value) => update("dataFormat", value)} />
        <Select label="期望工具" value={form.tool} options={formOptions.tool} onChange={(value) => update("tool", value)} />
        <label className="block">
          <span className="mb-2 block text-sm text-zinc-300">截止时间</span>
          <input className="field" type="date" value={form.deadline} onChange={(event) => update("deadline", event.target.value)} />
        </label>
        <Select label="需要交付什么" value={form.deliverable} options={formOptions.deliverable} onChange={(value) => update("deliverable", value)} />
        <label className="block">
          <span className="mb-2 block text-sm text-zinc-300">联系方式</span>
          <input
            className="field"
            placeholder="邮箱 / 微信 / 电话"
            value={form.contact}
            onChange={(event) => update("contact", event.target.value)}
          />
        </label>
        <label className="block lg:col-span-2">
          <span className="mb-2 block text-sm text-zinc-300">项目说明</span>
          <textarea
            className="field min-h-36 resize-y"
            placeholder="请简单说明数据类型、分析目标、已有文件和期望结果。"
            value={form.description}
            onChange={(event) => update("description", event.target.value)}
          />
        </label>
        <div className="flex flex-col gap-4 lg:col-span-2 sm:flex-row sm:items-center">
          <button
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-ice disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading ? "提交中..." : "提交需求"}
          </button>
          <AnimatePresence>
            {notice.message && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className={`text-sm ${notice.type === "success" ? "text-ice" : "text-red-300"}`}
              >
                {notice.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </Section>
  );
}

function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-zinc-300">{label}</span>
      <select className="field" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
