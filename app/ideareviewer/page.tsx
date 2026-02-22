"use client";
import { useEffect, useRef, useState } from "react";

export default function IdeaReviewer() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const BG = "Bricolage Grotesque, sans-serif";
  const MR = "Manrope, sans-serif";

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

  const faqs = [
    {
      q: "What is IdeaReviewer?",
      a: "IdeaReviewer is a marketplace where early-stage founders submit their startup ideas and receive structured, scored feedback from a community of entrepreneurs, investors, and builders — helping them decide to proceed, pivot, or kill an idea before wasting months building the wrong thing.",
    },
    {
      q: "Who reviews my idea?",
      a: "Your idea is reviewed by a vetted community of startup founders, product managers, investors, and domain experts. Every reviewer is scored on quality over time, so you only get feedback that actually matters.",
    },
    {
      q: "Is my idea kept private?",
      a: "You choose. You can submit your idea publicly to get maximum feedback from the community, or privately for a more controlled review. Private submissions are only visible to selected reviewers.",
    },
    {
      q: "How long does it take to get reviews?",
      a: "Most ideas receive their first reviews within a few hours of submission. A full batch of 10+ structured reviews typically comes in within 24–48 hours.",
    },
    {
      q: "When is IdeaReviewer launching?",
      a: "IdeaReviewer is currently in development and coming soon. Join the waitlist to get early access, founding member pricing, and be the first to know when we go live.",
    },
    {
      q: "Is it free to use?",
      a: "We plan to offer a free tier for basic submissions. Premium plans will unlock private submissions, priority reviews, expert reviewer matching, and detailed analytics. Waitlist members get special founding pricing.",
    },
  ];

  const steps = [
    {
      num: "01",
      icon: "✍️",
      title: "Submit Your Idea",
      desc: "Fill out a structured template covering your problem, solution, target market, and early traction. Takes less than 10 minutes.",
    },
    {
      num: "02",
      icon: "🔍",
      title: "Get Matched to Reviewers",
      desc: "Our system matches your idea to the most relevant reviewers — founders who've solved similar problems, investors in your space, and potential users.",
    },
    {
      num: "03",
      icon: "📊",
      title: "Receive Scored Feedback",
      desc: "Each reviewer scores your idea across 5 dimensions: Problem Clarity, Market Size, Differentiation, Execution Feasibility, and Overall Excitement.",
    },
    {
      num: "04",
      icon: "🎯",
      title: "Make Your Decision",
      desc: "Your dashboard aggregates all scores and feedback into a clear Proceed, Pivot, or Kill recommendation — so you can move forward with confidence.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      desc: "Perfect for testing the waters",
      features: [
        "1 public idea submission/month",
        "Up to 5 community reviews",
        "Basic score dashboard",
        "Community access",
      ],
      cta: "Join Waitlist",
      highlighted: false,
    },
    {
      name: "Founder",
      price: "$19",
      period: "/month",
      desc: "For serious early-stage founders",
      features: [
        "5 idea submissions/month",
        "10+ guaranteed reviews per idea",
        "Private submission option",
        "Expert reviewer matching",
        "Detailed analytics dashboard",
        "Priority support",
      ],
      cta: "Join Waitlist",
      highlighted: true,
    },
    {
      name: "Studio",
      price: "$49",
      period: "/month",
      desc: "For teams and startup studios",
      features: [
        "Unlimited submissions",
        "20+ reviews per idea",
        "Team collaboration tools",
        "Custom reviewer pools",
        "API access",
        "Dedicated account manager",
      ],
      cta: "Join Waitlist",
      highlighted: false,
    },
  ];

  return (
    <main
      className="bg-[#060608] text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: MR }}
    >
      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-50 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #7C5CFC, transparent)" }}
      />

      {/* NAVBAR */}
      {/* NAVBAR */}

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175400px] rounded-full bg-[#7C5CFC]/10 blur-[120px] pointer-events-none" />

        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs text-amber-400 mb-6 tracking-widest uppercase"
          style={{ fontFamily: MR }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Coming Soon — Join the Waitlist
        </div>

        <h1
          className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 max-w-4xl"
          style={{ fontFamily: BG }}
        >
          Stop guessing.
          <br />
          <span className="bg-linear-to-r from-[#7C5CFC] via-[#A994FF] to-[#FC5CF7] bg-clip-text text-transparent">
            Start knowing.
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/40 max-w-2xl mb-10 leading-relaxed"
          style={{ fontFamily: MR }}
        >
          IdeaReviewer is a decision-first marketplace where founders submit
          startup ideas and get real, structured feedback from entrepreneurs,
          investors, and builders — in under 24 hours.
        </p>

        <a
          href="#waitlist"
          className="px-10 py-4 rounded-full bg-linear-to-rm-[#7C5CFC] to-[#A070FC] hover:opacity-90 font-bold text-base transition-all shadow-xl shadow-[#7C5CFC]/30 hover:-translate-y-0.5"
          style={{ fontFamily: MR }}
        >
          Join the Waitlist — It&apos;s Free
        </a>

        <div className="flex flex-col sm:flex-row gap-8 mt-16 text-center">
          {[
            { num: "24hrs", label: "Average review time" },
            { num: "10+", label: "Reviews per idea" },
            { num: "3", label: "Clear outcomes: Proceed, Pivot, Kill" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span
                className="text-3xl font-black text-[#A994FF]"
                style={{ fontFamily: BG }}
              >
                {s.num}
              </span>
              <span
                className="text-white/30 text-sm mt-1"
                style={{ fontFamily: MR }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: MR }}
          >
            The Process
          </p>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter"
            style={{ fontFamily: BG }}
          >
            How it works
          </h2>
          <p
            className="text-white/40 mt-4 max-w-md mx-auto"
            style={{ fontFamily: MR }}
          >
            From idea to decision in 4 simple steps.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative p-6 rounded-2xl border border-white/5 bg-white/2r:border-[#7C5CFC]/30 transition-all group"
            >
              <div
                className="absolute top-4 right-4 text-5xl font-black text-white/5 group-hover:text-white/10 transition-all"
                style={{ fontFamily: BG }}
              >
                {s.num}
              </div>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: BG }}>
                {s.title}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: MR }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: MR }}
            >
              Early Feedback
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter"
              style={{ fontFamily: BG }}
            >
              What founders are saying
            </h2>
            <p className="text-white/40 mt-4" style={{ fontFamily: MR }}>
              From founders who tried our early prototype.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I wasted 6 months building something nobody wanted. IdeaReviewer would have saved me all of that. The structured feedback format is exactly what founders need.",
                name: "Arjun M.",
                role: "SaaS Founder, Bangalore",
              },
              {
                quote:
                  "The proceed/pivot/kill framework is genius. It cuts through all the noise and gives you a clear direction. This is what the startup world has been missing.",
                name: "Priya S.",
                role: "Product Manager turned Founder",
              },
              {
                quote:
                  "Getting feedback from people who've actually built startups — not just friends and family — is a completely different experience. This changes everything.",
                name: "Rahul K.",
                role: "2x Founder, Delhi",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl border border-white/5 bg-white/2der-[#7C5CFC]/20 transition-all flex flex-col justify-between"
              >
                <p
                  className="text-white/50 text-sm leading-relaxed mb-6 italic"
                  style={{ fontFamily: MR }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ fontFamily: BG }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-white/30 text-xs mt-0.5"
                    style={{ fontFamily: MR }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: MR }}
            >
              Pricing
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter"
              style={{ fontFamily: BG }}
            >
              Simple, founder-friendly pricing
            </h2>
            <p className="text-white/40 mt-4" style={{ fontFamily: MR }}>
              Waitlist members get founding member rates — locked in forever.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border flex flex-col transition-all ${
                  plan.highlighted
                    ? "border-[#7C5CFC]/60 bg-linear-to-b]/10 to-transparent"
                    : "border-white/5 bg-white/2der-white/10"
                }`}
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7C5CFC] text-xs font-bold whitespace-nowrap"
                    style={{ fontFamily: MR }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className="text-lg font-black mb-1"
                    style={{ fontFamily: BG }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-white/30 text-sm mb-4"
                    style={{ fontFamily: MR }}
                  >
                    {plan.desc}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className="text-4xl font-black"
                      style={{ fontFamily: BG }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-white/30 text-sm mb-1"
                      style={{ fontFamily: MR }}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/50"
                      style={{ fontFamily: MR }}
                    >
                      <span className="text-[#7C5CFC] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`text-center py-3 rounded-full font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? "bg-[#7C5CFC] hover:bg-[#6A4AEA] shadow-lg shadow-[#7C5CFC]/30"
                      : "border border-white/10 hover:border-white/20 text-white/60 hover:text-white"
                  }`}
                  style={{ fontFamily: MR }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[#7C5CFC]/5 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative p-12 rounded-3xl border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <div className="text-4xl mb-4">🚀</div>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tighter mb-3"
              style={{ fontFamily: BG }}
            >
              Be first in line
            </h2>
            <p
              className="text-white/40 mb-8 text-sm leading-relaxed"
              style={{ fontFamily: MR }}
            >
              Join the waitlist for early access, founding member pricing, and
              updates on our launch.
            </p>
            {submitted ? (
              <div
                className="py-4 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold"
                style={{ fontFamily: MR }}
              >
                You&apos;re on the list! We&apos;ll be in touch soon. 🎉
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#7C5CFC]/50"
                  style={{ fontFamily: MR }}
                />
                <button
                  onClick={() => {
                    if (email) setSubmitted(true);
                  }}
                  className="px-6 py-3 rounded-full bg-[#7C5CFC] hover:bg-[#6A4AEA] font-semibold text-sm transition-all shadow-lg shadow-[#7C5CFC]/30 whitespace-nowrap"
                  style={{ fontFamily: MR }}
                >
                  Join Waitlist
                </button>
              </div>
            )}
            <p
              className="text-white/20 text-xs mt-4"
              style={{ fontFamily: MR }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: MR }}
            >
              FAQ
            </p>
            <h2
              className="text-4xl font-black tracking-tighter"
              style={{ fontFamily: BG }}
            >
              Common questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-white/2 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/2sition-all"
                >
                  <span
                    className="font-semibold text-sm"
                    style={{ fontFamily: BG }}
                  >
                    {faq.q}
                  </span>
                  <span className="text-[#7C5CFC] text-lg ml-4">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-4 text-white/40 text-sm leading-relaxed border-t border-white/5 pt-4"
                    style={{ fontFamily: MR }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section id="policies" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[#7C5CFC] text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: MR }}
            >
              Legal
            </p>
            <h2
              className="text-4xl font-black tracking-tighter"
              style={{ fontFamily: BG }}
            >
              Policies & Agreements
            </h2>
            <p
              className="text-white/40 mt-4 text-sm"
              style={{ fontFamily: MR }}
            >
              We believe in full transparency. Here&apos;s everything you need
              to know.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "🔒",
                title: "Privacy Policy",
                desc: "We collect only what we need. Your idea data is never sold or shared with third parties without your explicit consent. You own your ideas.",
              },
              {
                icon: "📋",
                title: "Terms of Service",
                desc: "By using IdeaReviewer you agree to our terms. We reserve the right to moderate content that violates community guidelines.",
              },
              {
                icon: "💡",
                title: "Idea Ownership",
                desc: "You retain 100% ownership of any idea you submit. IdeaReviewer claims no intellectual property rights over submitted ideas.",
              },
              {
                icon: "🤝",
                title: "Reviewer Agreement",
                desc: "All reviewers agree to a non-disclosure framework. Copying or stealing submitted ideas is strictly prohibited and legally actionable.",
              },
              {
                icon: "🍪",
                title: "Cookie Policy",
                desc: "We use essential cookies for authentication and analytics cookies (with your consent) to improve our product. No advertising cookies.",
              },
              {
                icon: "💳",
                title: "Refund Policy",
                desc: "Not happy? We offer a full refund within 7 days of any paid subscription, no questions asked.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-white/10 transition-all"
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: BG }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-white/30 text-xs leading-relaxed"
                  style={{ fontFamily: MR }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-center text-white/20 text-xs mt-8"
            style={{ fontFamily: MR }}
          >
            Full legal documents will be published at launch. Questions? Contact
            us at <span className="text-[#7C5CFC]">legal@orbius.io</span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-8 py-8 flex flex-col md:flex-row items-center justify-between text-white/20 text-sm">
        <a
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-all"
        >
          <OrbLogo size={20} />
          <span style={{ fontFamily: BG }}>
            <span className="text-[#7C5CFC] font-bold">orb</span>ius —
            IdeaReviewer
          </span>
        </a>
        <span style={{ fontFamily: MR }}>
          © 2025 Orbius. All rights reserved.
        </span>
        <div className="flex gap-6 mt-4 md:mt-0" style={{ fontFamily: MR }}>
          <a href="#" className="hover:text-white/50 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white/50 transition-colors">
            LinkedIn
          </a>
          <a
            href="mailto:hello@orbius.io"
            className="hover:text-white/50 transition-colors"
          >
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
