"use client";
import { theme, gradientText } from "@/lib/theme";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX - 192 + "px";
        glowRef.current.style.top = e.clientY - 192 + "px";
      }
    };
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) setVisible(true);
      else if (currentY > lastScrollY.current) setVisible(false);
      else setVisible(true);
      lastScrollY.current = currentY;
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const OrbLogo = ({ size = 32 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="url(#grad1)"
        strokeWidth="1"
        strokeDasharray="5 3"
        strokeLinecap="round"
      />
      <circle
        cx="32"
        cy="32"
        r="20"
        stroke={theme.colors.primary}
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
      <circle
        cx="32"
        cy="32"
        r="11"
        stroke={theme.colors.accent}
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      <circle cx="32" cy="32" r="7" fill="url(#grad2)" />
      <circle cx="32" cy="2" r="3" fill={theme.colors.primary} />
      <circle cx="52" cy="32" r="2.5" fill={theme.colors.accent} />
      <circle cx="21" cy="43" r="1.8" fill={theme.colors.muted} />
      <circle cx="29" cy="29" r="2" fill="white" fillOpacity="0.3" />
      <defs>
        <linearGradient
          id="grad1"
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.colors.primary} />
          <stop offset="1" stopColor={theme.colors.accent} />
        </linearGradient>
        <radialGradient
          id="grad2"
          cx="40%"
          cy="35%"
          r="60%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor={theme.colors.muted} />
          <stop offset="50%" stopColor={theme.colors.primary} />
          <stop offset="100%" stopColor={theme.colors.deep} />
        </radialGradient>
      </defs>
    </svg>
  );

  const BG = theme.fonts.heading;
  const MR = theme.fonts.body;

  return (
    <main className="bg-[#060608] text-white min-h-screen overflow-x-hidden">
      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-50 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: theme.gradients.glow }}
      />

      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <div
          className="absolute top-1/4 left-1/3 w-125ull blur-[120px] pointer-events-none"
          style={{ background: `${theme.colors.primary}1a` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
          style={{ background: `${theme.colors.accent}0d` }}
        />

        <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT — Text */}
          <div className="flex flex-col items-start text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-6 tracking-widest uppercase"
              style={{
                fontFamily: MR,
                borderColor: `${theme.colors.primary}4d`,
                background: `${theme.colors.primary}1a`,
                color: theme.colors.muted,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: theme.colors.primary }}
              />
              Now in Beta
            </div>
            <h1
              className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-1"
              style={{ fontFamily: BG }}
            >
              <span className="text-8xl font-black tracking-tighter">
                <span style={{ color: theme.colors.primary }}>orb</span>ius
              </span>
            </h1>
            <h1
              className="text-5xl md:text-4xl font-black tracking-tighter leading-none mb-6"
              style={{ fontFamily: BG }}
            >
              Find Your{" "}
              <span style={gradientText}>ORBIT.</span>
            </h1>
            <p
              className="text-lg text-white/40 max-w-md leading-relaxed"
              style={{ fontFamily: MR }}
            >
              We build high-leverage products that simplify complexity and
              enable meaningful progress
            </p>
          </div>

          {/* RIGHT — Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div
                className="absolute inset-0 rounded-full animate-spin"
                style={{
                  animationDuration: "25s",
                  border: `1px dashed ${theme.colors.primary}40`,
                }}
              />
              <div
                className="absolute inset-6 rounded-full animate-spin"
                style={{
                  animationDuration: "18s",
                  animationDirection: "reverse",
                  border: `1px solid ${theme.colors.primary}33`,
                }}
              />
              <div
                className="absolute inset-12 rounded-full animate-spin"
                style={{
                  animationDuration: "12s",
                  border: `1px solid ${theme.colors.accent}40`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full"
                  style={{
                    background: theme.gradients.orb,
                    boxShadow: theme.shadows.glow,
                  }}
                />
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "25s" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: theme.colors.primary,
                    boxShadow: theme.shadows.dot,
                  }}
                />
              </div>
              <div
                className="absolute inset-6 animate-spin"
                style={{
                  animationDuration: "18s",
                  animationDirection: "reverse",
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: theme.colors.accent,
                    boxShadow: theme.shadows.dotAcc,
                  }}
                />
              </div>
              <div
                className="absolute inset-12 animate-spin"
                style={{ animationDuration: "12s" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: theme.colors.muted,
                    boxShadow: theme.shadows.dotMut,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: MR, color: theme.colors.primary }}
          >
            Our Products
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter"
            style={{ fontFamily: BG }}
          >
            Built for builders.
          </h2>
          <p
            className="text-white/40 mt-4 max-w-md mx-auto"
            style={{ fontFamily: MR }}
          >
            A growing suite of tools designed to accelerate every stage of your
            startup journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            id="ideareviewer"
            className="md:col-span-2 relative rounded-2xl p-8 overflow-hidden group transition-all"
            style={{
              border: `1px solid ${theme.colors.primary}4d`,
              background: `linear-gradient(135deg, ${theme.colors.primary}1a, #060608, ${theme.colors.accent}0d)`,
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: `${theme.colors.primary}1a` }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    fontFamily: MR,
                    background: `${theme.colors.primary}33`,
                    border: `1px solid ${theme.colors.primary}66`,
                    color: theme.colors.muted,
                  }}
                >
                  ✦ Featured Product
                </span>
                <span
                  className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold"
                  style={{ fontFamily: MR }}
                >
                  Coming Soon
                </span>
              </div>
              <h3
                className="text-3xl md:text-4xl font-black tracking-tighter mb-3"
                style={{ fontFamily: BG }}
              >
                IdeaReviewer
              </h3>
              <p
                className="text-white/50 text-lg max-w-2xl mb-8 leading-relaxed"
                style={{ fontFamily: MR }}
              >
                Get independent demand signals from real target users and a
                clear proceed, pivot, or kill decision — before you invest
                months building.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    icon: "📋",
                    label: "Structured Independent Reviews",
                    desc: "Clear, question-based feedback from relevant users.",
                  },
                  {
                    icon: "📈",
                    label: "Demand Signal Analysis",
                    desc: "Patterns across multiple reactions — not random opinions.",
                  },
                  {
                    icon: "⏱️",
                    label: "24-Hour Decision Checkpoint",
                    desc: "24-Hour Decision Checkpoint",
                  },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div className="text-2xl mb-2">{f.icon}</div>
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ fontFamily: BG }}
                    >
                      {f.label}
                    </div>
                    <div
                      className="text-white/40 text-xs leading-relaxed"
                      style={{ fontFamily: MR }}
                    >
                      {f.desc}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/ideareviewer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 text-white"
                style={{
                  fontFamily: MR,
                  background: theme.colors.primary,
                  boxShadow: theme.shadows.button,
                }}
              >
                Learn More & Join Waitlist
              </a>
            </div>
          </div>

          {["Product 02", "Product 03"].map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-white/5 bg-white/2 p-8 flex flex-col items-start justify-between min-h-48 hover:border-white/10 transition-all"
            >
              <div>
                <div
                  className="text-xs text-white/20 uppercase tracking-widest mb-3"
                  style={{ fontFamily: MR }}
                >
                  {p}
                </div>
                <h3
                  className="text-2xl font-bold text-white/20"
                  style={{ fontFamily: BG }}
                >
                  Coming Soon
                </h3>
                <p
                  className="text-white/20 text-sm mt-2"
                  style={{ fontFamily: MR }}
                >
                  We&apos;re cooking something new.
                </p>
              </div>
              <div
                className="mt-6 px-4 py-2 rounded-full border border-white/10 text-white/20 text-xs"
                style={{ fontFamily: MR }}
              >
                Stay tuned
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ fontFamily: MR, color: theme.colors.primary }}
            >
              About Orbius
            </p>
            <h2
              className="text-4xl font-black tracking-tighter mb-6"
              style={{ fontFamily: BG }}
            >
              We design technology systems that
              <span style={{ color: theme.colors.muted }}> reduce complexity</span> and
              <span style={{ color: theme.colors.muted }}> unlock progress.</span>
            </h2>
            <p
              className="text-white/40 leading-relaxed mb-4"
              style={{ fontFamily: MR }}
            >
              Orbius is a technology company focused on building high-leverage
              products that solve meaningful problems.
            </p>
            <p
              className="text-white/40 leading-relaxed"
              style={{ fontFamily: MR }}
            >
              Every product we build is grounded in clarity, utility, and
              long-term impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "🔧", label: "Utility Over Hype" },
              { num: "🧠", label: "System Thinking" },
              { num: "🧠", label: "Long-Term Orientation" },
              { num: "⏳", label: "Execution Focus" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl bg-white/3 border border-white/5 text-center"
              >
                <div
                  className="text-3xl font-black mb-1"
                  style={{ fontFamily: BG, color: theme.colors.muted }}
                >
                  {s.num}
                </div>
                <div
                  className="text-white/30 text-xs uppercase tracking-widest"
                  style={{ fontFamily: MR }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[#7C5CFC]/5 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative p-12 rounded-3xl border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter mb-4"
              style={{ fontFamily: BG }}
            >
              Ready to launch?
            </h2>
            <p className="text-white/40 mb-8" style={{ fontFamily: MR }}>
              Join the IdeaReviewer waitlist and be first to validate your
              startup idea with real structured feedback.
            </p>
            <a
              href="/ideareviewer#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-[#7C5CFC] to-[#A070FC] hover:opacity-90 font-bold transition-all shadow-xl shadow-[#7C5CFC]/30 hover:-translate-y-0.5 text-sm"
              style={{ fontFamily: MR }}
            >
              Join the Waitlist Free
            </a>
          </div>
        </div>
      </section>
      */}

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-8 py-8 flex flex-col md:flex-row items-center justify-between text-white/20 text-sm">
        <div className="flex items-center gap-2.5">
          <OrbLogo size={22} />
          <span style={{ fontFamily: BG }}>
            <span style={{ color: theme.colors.primary }} className="font-bold">orb</span>ius — 2025
          </span>
        </div>
        <span style={{ fontFamily: MR }}>Built with love for founders.</span>
        <div className="flex gap-6 mt-4 md:mt-0" style={{ fontFamily: MR }}>
          <a href="#" className="hover:text-white/50 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white/50 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white/50 transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}