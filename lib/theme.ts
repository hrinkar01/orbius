// ============================================
// ORBIUS DESIGN SYSTEM
// Change colors here → updates every page
// ============================================

export const theme = {

    // ── BRAND COLORS ──────────────────────────
    // Change these 6 values to retheme the entire site
    colors: {
      primary:    "#0EA5E9",   // main brand color (buttons, links, accents)
      primaryHov: "#0284C7",   // hover state of primary
      secondary:  "#38BDF8",   // gradient mid color
      accent:     "#67E8F9",   // gradient end / pink equivalent
      muted:      "#7DD3FC",   // soft text, subtle elements
      deep:       "#0369A1",   // dark shade of primary
    },
  
    // ── BACKGROUNDS ───────────────────────────
    bg: {
      page:     "#060608",     // main page background
      card:     "rgba(255,255,255,0.02)",
      cardHov:  "rgba(255,255,255,0.04)",
      overlay:  "rgba(6,6,8,0.70)",
    },
  
    // ── FONTS ─────────────────────────────────
    fonts: {
      heading: "Bricolage Grotesque, sans-serif",
      body:    "Manrope, sans-serif",
    },
  
    // ── GRADIENTS ─────────────────────────────
    // Used as style={{ background: theme.gradients.text }} with bg-clip-text
    gradients: {
      text:    "linear-gradient(90deg, #0EA5E9, #38BDF8, #67E8F9)",
      button:  "linear-gradient(90deg, #0284C7, #0EA5E9)",
      glow:    "radial-gradient(circle, #0EA5E9, transparent)",
      orb:     "radial-gradient(circle at 35% 35%, #7DD3FC, #0EA5E9 50%, #0369A1)",
      page:    "radial-gradient(circle, #0EA5E940, transparent)",
    },
  
    // ── SHADOWS ───────────────────────────────
    shadows: {
      button: "0 8px 32px rgba(14,165,233,0.35)",
      glow:   "0 0 40px rgba(14,165,233,0.7), 0 0 80px rgba(14,165,233,0.3), 0 0 120px rgba(14,165,233,0.1)",
      dot:    "0 0 10px #0EA5E9, 0 0 20px rgba(14,165,233,0.5)",
      dotAcc: "0 0 8px #67E8F9",
      dotMut: "0 0 6px #7DD3FC",
    },
  
    // ── BORDERS ───────────────────────────────
    borders: {
      subtle:  "1px solid rgba(255,255,255,0.05)",
      card:    "1px solid rgba(255,255,255,0.08)",
      brand:   "1px solid rgba(14,165,233,0.3)",
      brandMd: "1px solid rgba(14,165,233,0.4)",
      brandLg: "1px solid rgba(14,165,233,0.6)",
    },
  
    // ── OPACITY VARIANTS ──────────────────────
    // Tailwind-ready strings for className use
    tw: {
      primary:       "text-[#0EA5E9]",
      primaryBg:     "bg-[#0EA5E9]",
      primaryBgLow:  "bg-[#0EA5E9]/10",
      primaryBgMid:  "bg-[#0EA5E9]/20",
      primaryBorder: "border-[#0EA5E9]/30",
      primaryBorderMd: "border-[#0EA5E9]/40",
      primaryBorderLg: "border-[#0EA5E9]/60",
      muted:         "text-[#7DD3FC]",
      accent:        "text-[#67E8F9]",
      gradient:      "from-[#0EA5E9] via-[#38BDF8] to-[#67E8F9]",
      gradientBtn:   "from-[#0284C7] to-[#0EA5E9]",
    },
  } as const;
  
  // ── HELPER: inline style for gradient text ──
  // Usage: <span style={gradientText}>hello</span>
  export const gradientText: React.CSSProperties = {
    background: theme.gradients.text,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };
  
  // ── LOGO SVG COLORS ────────────────────────
  export const logoColors = {
    ring1Stop1:  theme.colors.primary,
    ring1Stop2:  theme.colors.accent,
    ring2Stroke: theme.colors.primary,
    ring3Stroke: theme.colors.accent,
    orbStop1:    theme.colors.muted,
    orbStop2:    theme.colors.primary,
    orbStop3:    theme.colors.deep,
    dot1:        theme.colors.primary,
    dot2:        theme.colors.accent,
    dot3:        theme.colors.muted,
  };