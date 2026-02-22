"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {/* <div className="w-7 h-7 rounded-full bg-linear-to-br from-[#7C5CFC] to-[#A994FF]" /> */}
        <span className="text-lg font-black tracking-tight">
          <span className="text-[#7C5CFC]">orb</span>ius
        </span>
      </a>

      {/* CENTER — Navigation */}
      <div className="hidden md:flex items-center gap-10 text-sm text-white/70">
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

          {/* Dropdown */}
          <div
            className={`absolute left-0 top-full mt-3 w-60 rounded-xl bg-[#0D0D12] border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
              isOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <a
              href="/ideareviewer"
              className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
            >
              <div className="font-semibold">IdeaReviewr</div>
              <div className="text-xs text-white/40 mt-1">
                Decision-first validation system
              </div>
            </a>

            <div className="px-4 py-3 text-xs text-white/30 border-t border-white/5">
              More products coming soon
            </div>
          </div>
        </div>

        <a href="/#about" className="hover:text-white transition-colors">
          About
        </a>

        <a href="/#vision" className="hover:text-white transition-colors">
          Vision
        </a>
      </div>

      {/* RIGHT — CTA */}
      <a
        href="/#products"
        className="text-sm px-5 py-2.5 rounded-full bg-[#7C5CFC] text-white hover:bg-[#6B4DF5] transition-all shadow-lg shadow-[#7C5CFC]/20"
      >
        Explore Products
      </a>
    </nav>
  );
}