"use client";

import { useEffect, useRef, useState } from "react";
import { theme } from "@/lib/theme";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const lastScrollY = useRef(0);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) setVisible(true);
      else if (currentY > lastScrollY.current) setVisible(false);
      else setVisible(true);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Apply light/dark mode to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  const BG = theme.fonts.heading;
  const MR = theme.fonts.body;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-lg bg-[#060608]/80"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* LEFT — Logo */}
      <a href="/" className="flex items-center gap-2.5 cursor-pointer">
        <span className="text-lg font-black tracking-tight" style={{ fontFamily: BG }}>
          <span style={{ color: theme.colors.primary }}>orb</span>ius
        </span>
      </a>

      {/* CENTER — Navigation */}
      <div className="hidden md:flex items-center gap-10 text-sm text-white/70" style={{ fontFamily: MR }}>

        {/* PRODUCTS DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="hover:text-white transition-colors flex items-center gap-1">
            Products
            <span className="text-xs">▾</span>
          </button>
          <div
            className={`absolute left-0 top-full mt-3 w-60 rounded-xl bg-[#0D0D12] border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
              isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <a
              href="/ideareviewer"
              className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition rounded-t-xl"
            >
              <div className="font-semibold">IdeaReviewer</div>
              <div className="text-xs text-white/40 mt-1">Decision-first validation system</div>
            </a>
            <div className="px-4 py-3 text-xs text-white/30 border-t border-white/5">
              More products coming soon
            </div>
          </div>
        </div>

        <a href="/#about" className="hover:text-white transition-colors">About</a>
        <a href="/#vision" className="hover:text-white transition-colors">Vision</a>
      </div>

      {/* RIGHT — CTA + Settings */}
      <div className="flex items-center gap-3">
        <a
          href="/#products"
          className="text-sm px-5 py-2.5 rounded-full text-white hover:opacity-90 transition-all"
          style={{
            background: theme.colors.primary,
            boxShadow: theme.shadows.button,
            fontFamily: MR,
          }}
        >
          Explore Products
        </a>

        {/* SETTINGS / PROFILE BUTTON */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center text-white/60 hover:text-white"
            title="Settings"
          >
            {/* Avatar / person icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </button>

          {/* SETTINGS DROPDOWN */}
          <div
            className={`absolute right-0 top-full mt-3 w-64 rounded-2xl bg-[#0D0D12] border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-200 overflow-hidden ${
              settingsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}
          >
            {/* Profile Header */}
            <div className="px-4 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: theme.gradients.button }}
                >
                  O
                </div>
                <div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: BG }}>Orbius User</div>
                  <div className="text-xs text-white/40" style={{ fontFamily: MR }}>hello@orbius.io</div>
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            {/* <div className="px-4 py-3 border-b border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base">{isDark ? "🌙" : "☀️"}</span>
                  <span className="text-sm text-white/70" style={{ fontFamily: MR }}>
                    {isDark ? "Dark Mode" : "Light Mode"}
                  </span>
                </div>
                {/* Toggle Switch */}
                {/* <button
                  onClick={() => setIsDark(!isDark)}
                  className="relative w-11 h-6 rounded-full transition-all duration-300 focus:outline-none"
                  style={{ background: isDark ? theme.colors.primary : "rgba(255,255,255,0.15)" }}
                >
                  <div
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300"
                    style={{ left: isDark ? "calc(100% - 22px)" : "2px" }}
                  />
                </button>
              </div>
            </div> */}

            {/* Menu Items */}
            <div className="py-2">
              {[
                { icon: "👤", label: "Profile", sub: "Manage your account" },
                { icon: "🔒", label: "Privacy", sub: "Data & permissions" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-all text-left"
                >
                  <span className="text-base w-6 text-center">{item.icon}</span>
                  <div>
                    <div className="text-sm text-white/80" style={{ fontFamily: MR }}>{item.label}</div>
                    <div className="text-xs text-white/30" style={{ fontFamily: MR }}>{item.sub}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/5 py-2">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-all text-left">
                <span className="text-base w-6 text-center">🚪</span>
                <div className="text-sm text-red-400/80 hover:text-red-400" style={{ fontFamily: MR }}>Sign Out</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}