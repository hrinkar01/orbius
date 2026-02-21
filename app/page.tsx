"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX - 192 + "px";
        glowRef.current.style.top = e.clientY - 192 + "px";
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main className="bg-[#060608] text-white min-h-screen overflow-x-hidden">

      {/* Cursor Glow */}
      <div ref={glowRef} className="pointer-events-none fixed z-50 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #7C5CFC, transparent)" }} />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 border-b border-white/5 backdrop-blur-md bg-[#060608]/70">
        <span className="text-xl font-bold tracking-tight"><span className="text-[#7C5CFC]">orb</span>ius</span>
        <div className="hidden md:flex gap-8 text-sm text-white/50">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#ideareviewer" className="hover:text-white transition-colors">IdeaReviewer</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <a href="#ideareviewer" className="text-sm px-4 py-2 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 hover:bg-[#7C5CFC]/30 transition-all">Get Early Access</a>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-[#7C5CFC]/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#FC5CF7]/5 blur-[80px] pointer-events-none" />

        {/* Orbit Animation */}
        <div className="relative w-32 h-32 mb-10">
          <div className="absolute inset-0 rounded-full border border-[#7C5CFC]/30 animate-spin" style={{ animationDuration: "12s" }} />
          <div className="absolute inset-4 rounded-full border border-[#7C5CFC]/20 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#7C5CFC] to-[#FC5CF7] shadow-lg shadow-[#7C5CFC]/40" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/30 bg-[#7C5CFC]/10 text-xs text-[#A994FF] mb-6 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] animate-pulse" />
          Now in Beta — IdeaReviewer is Live
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 max-w-4xl" style={{ fontFamily: "Syne, sans-serif" }}>
          Where <span className="bg-linear-to-r from-[#7C5CFC] via-[#A994FF] to-[#FC5CF7] bg-clip-text text-transparent">ideas</span> find their orbit.
        </h1>

        <p className="text-lg md:text-xl text-white/40 max-w-xl mb-10 leading-relaxed">
        IdeaReviewr is a decision-first startup validation platform that helps early-stage founders avoid wasting months on weak ideas by aggregating real target-user demand signals into clear proceed, pivot, or kill decisions within 24 hours.
          </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#ideareviewer" className="px-8 py-3.5 rounded-full bg-linear-to-r from-[#7C5CFC] to-[#A070FC] hover:opacity-90 font-semibold text-sm transition-all shadow-lg shadow-[#7C5CFC]/30 hover:-translate-y-0.5">Try IdeaReviewer Free</a>
          <a href="#about" className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 font-semibold text-sm text-white/60 hover:text-white transition-all">Learn More</a>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-white/20 text-xs">
          <span>scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-3">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ fontFamily: "Syne, sans-serif" }}>Built for builders.</h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto">A growing suite of tools designed to accelerate every stage of your startup journey.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* IdeaReviewer */}
          <div id="ideareviewer" className="md:col-span-2 relative rounded-2xl border border-[#7C5CFC]/30 bg-linear-to-br from-[#7C5CFC]/10 via-[#060608] to-[#FC5CF7]/5 p-8 overflow-hidden group hover:border-[#7C5CFC]/60 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C5CFC]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 text-[#A994FF] text-xs font-semibold">✦ Featured Product</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">Beta</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-3" style={{ fontFamily: "Syne, sans-serif" }}>IdeaReviewer</h3>
              <p className="text-white/50 text-lg max-w-2xl mb-8 leading-relaxed">A marketplace where founders submit their startup ideas and get real, structured feedback from a community of entrepreneurs, investors, and builders. Stop guessing — know if your idea has legs before you build.</p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "🎯", label: "Structured Feedback", desc: "Scored reviews across traction, market, and execution" },
                  { icon: "🌐", label: "Public Marketplace", desc: "Browse ideas, discover trends, find co-founders" },
                  { icon: "⚡", label: "Fast Validation", desc: "Get 10+ reviews in 48 hours" },
                ].map((f) => (
                  <div key={f.label} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                    <div className="text-2xl mb-2">{f.icon}</div>
                    <div className="font-semibold text-sm mb-1">{f.label}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7C5CFC] hover:bg-[#6A4AEA] font-semibold text-sm transition-all shadow-lg shadow-[#7C5CFC]/30 hover:-translate-y-0.5">Get Early Access</a>
            </div>
          </div>

          {/* Coming Soon */}
          {["Product 02", "Product 03"].map((p) => (
            <div key={p} className="rounded-2xl border border-white/5 bg-white/2 p-8 flex flex-col items-start justify-between min-h-48 hover:border-white/10 transition-all">
              <div>
                <div className="text-xs text-white/20 uppercase tracking-widest mb-3">{p}</div>
                <h3 className="text-2xl font-bold text-white/20" style={{ fontFamily: "Syne, sans-serif" }}>Coming Soon</h3>
                <p className="text-white/20 text-sm mt-2">We&apos;re cooking something new.</p>
              </div>
              <div className="mt-6 px-4 py-2 rounded-full border border-white/10 text-white/20 text-xs">Stay tuned</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-4">About Orbius</p>
            <h2 className="text-4xl font-black tracking-tighter mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
              We build tools that <span className="text-[#A994FF]">unlock potential.</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-4">Orbius is a startup studio on a mission to empower early-stage founders with the tools they need to go from idea to launch confidently.</p>
            <p className="text-white/40 leading-relaxed">We believe great ideas deserve great feedback — and that the best way to build is in public, with community at the center.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "1", label: "Products Live" },
              { num: "∞", label: "Ideas Welcome" },
              { num: "0", label: "Gatekeeping" },
              { num: "100%", label: "Founder-First" },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-white/3 border border-white/5 text-center">
                <div className="text-3xl font-black text-[#A994FF] mb-1" style={{ fontFamily: "Syne, sans-serif" }}>{s.num}</div>
                <div className="text-white/30 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[#7C5CFC]/5 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative p-12 rounded-3xl border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4" style={{ fontFamily: "Syne, sans-serif" }}>Ready to launch?</h2>
            <p className="text-white/40 mb-8">Submit your idea to IdeaReviewer and get the honest feedback you need to build with confidence.</p>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-[#7C5CFC] to-[#A070FC] hover:opacity-90 font-bold transition-all shadow-xl shadow-[#7C5CFC]/30 hover:-translate-y-0.5 text-sm">Submit Your Idea Free</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-8 py-8 flex flex-col md:flex-row items-center justify-between text-white/20 text-sm">
        <span><span className="text-[#7C5CFC] font-bold">orb</span>ius — 2025</span>
        <span>Built with love for founders.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white/50 transition-colors">Twitter</a>
          <a href="#" className="hover:text-white/50 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white/50 transition-colors">Contact</a>
        </div>
      </footer>

    </main>
  );
}