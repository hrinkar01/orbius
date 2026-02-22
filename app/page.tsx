"use client";
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
        stroke="#7C5CFC"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
      <circle
        cx="32"
        cy="32"
        r="11"
        stroke="#FC5CF7"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      <circle cx="32" cy="32" r="7" fill="url(#grad2)" />
      <circle cx="32" cy="2" r="3" fill="#7C5CFC" />
      <circle cx="52" cy="32" r="2.5" fill="#FC5CF7" />
      <circle cx="21" cy="43" r="1.8" fill="#A994FF" />
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
          <stop stopColor="#7C5CFC" />
          <stop offset="1" stopColor="#FC5CF7" />
        </linearGradient>
        <radialGradient
          id="grad2"
          cx="40%"
          cy="35%"
          r="60%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#A994FF" />
          <stop offset="50%" stopColor="#7C5CFC" />
          <stop offset="100%" stopColor="#5B3FD4" />
        </radialGradient>
      </defs>
    </svg>
  );

  const BG = "Bricolage Grotesque, sans-serif";
  const MR = "Manrope, sans-serif";

  return (
    <main className="bg-[#060608] text-white min-h-screen overflow-x-hidden">
      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-50 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #7C5CFC, transparent)" }}
      />

      {/* NAVBAR */}
      {/* NAVBAR */}

      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <div className="absolute top-1/4 left-1/3 w-125ull bg-[#7C5CFC]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FC5CF7]/5 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT — Text */}
          <div className="flex flex-col items-start text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/30 bg-[#7C5CFC]/10 text-xs text-[#A994FF] mb-6 tracking-widest uppercase"
              style={{ fontFamily: MR }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] animate-pulse" />
              Now in Beta
            </div>
            <h1
              className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-1"
              style={{ fontFamily: BG }}
            >
              <span className="text-8xl font-black tracking-tighter">
                <span className="text-[#7C5CFC]">orb</span>ius
              </span>
            </h1>
            <h1
              className="text-5xl md:text-4xl font-black tracking-tighter leading-none mb-6"
              style={{ fontFamily: BG }}
            >
              Find Your{" "}
              <span className="bg-linear-to-r from-[#7C5CFC] via-[#A994FF] to-[#FC5CF7] bg-clip-text text-transparent">
                ORBIT.
              </span>
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
                  border: "1px dashed rgba(124,92,252,0.25)",
                }}
              />
              <div
                className="absolute inset-6 rounded-full animate-spin"
                style={{
                  animationDuration: "18s",
                  animationDirection: "reverse",
                  border: "1px solid rgba(124,92,252,0.2)",
                }}
              />
              <div
                className="absolute inset-12 rounded-full animate-spin"
                style={{
                  animationDuration: "12s",
                  border: "1px solid rgba(252,92,247,0.25)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 35%, #A994FF, #7C5CFC 50%, #5B3FD4)",
                    boxShadow:
                      "0 0 40px rgba(124,92,252,0.7), 0 0 80px rgba(124,92,252,0.3), 0 0 120px rgba(124,92,252,0.1)",
                  }}
                />
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "25s" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#7C5CFC]"
                  style={{
                    boxShadow:
                      "0 0 10px #7C5CFC, 0 0 20px rgba(124,92,252,0.5)",
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
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FC5CF7]"
                  style={{
                    boxShadow: "0 0 8px #FC5CF7, 0 0 16px rgba(252,92,247,0.5)",
                  }}
                />
              </div>
              <div
                className="absolute inset-12 animate-spin"
                style={{ animationDuration: "12s" }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A994FF]"
                  style={{ boxShadow: "0 0 6px #A994FF" }}
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
            className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: MR }}
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
            className="md:col-span-2 relative rounded-2xl border border-[#7C5CFC]/30 bg-linear-to-br from-[#7C5CFC]/10 via-[#060608] to-[#FC5CF7]/5 p-8 overflow-hidden group hover:border-[#7C5CFC]/60 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C5CFC]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 text-[#A994FF] text-xs font-semibold"
                  style={{ fontFamily: MR }}
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7C5CFC] hover:bg-[#6A4AEA] font-semibold text-sm transition-all shadow-lg shadow-[#7C5CFC]/30 hover:-translate-y-0.5"
                style={{ fontFamily: MR }}
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
              className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-4"
              style={{ fontFamily: MR }}
            >
              About Orbius
            </p>
            <h2
              className="text-4xl font-black tracking-tighter mb-6"
              style={{ fontFamily: BG }}
            >
              We design technology systems that
              <span className="text-[#A994FF]"> reduce complexity</span> and
              <span className="text-[#A994FF]"> unlock progress.</span>
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
                  className="text-3xl font-black text-[#A994FF] mb-1"
                  style={{ fontFamily: BG }}
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
            <span className="text-[#7C5CFC] font-bold">orb</span>ius — 2025
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
