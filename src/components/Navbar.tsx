"use client";

import { navItems } from "@/lib/content";
import { scrollToId } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition ${
          scrolled || open
            ? "border-white/10 bg-black/62 shadow-glow backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <button className="text-sm font-semibold text-white" onClick={() => go("hero")} aria-label="返回首页">
          Monster
        </button>
        <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <button key={item.href} className="transition hover:text-white" onClick={() => go(item.href)}>
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="hidden rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-ice md:block"
          onClick={() => go("contact")}
        >
          提交需求
        </button>
        <button
          className="rounded-full border border-white/15 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="打开导航菜单"
        >
          {open ? "关闭" : "菜单"}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-black/86 p-3 backdrop-blur-2xl md:hidden">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="block w-full rounded-xl px-3 py-3 text-left text-sm text-zinc-200 hover:bg-white/[0.08]"
              onClick={() => go(item.href)}
            >
              {item.label}
            </button>
          ))}
          <button className="mt-2 w-full rounded-full bg-white px-4 py-3 text-sm font-medium text-black" onClick={() => go("contact")}>
            提交需求
          </button>
        </div>
      )}
    </header>
  );
}
