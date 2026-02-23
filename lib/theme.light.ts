// ============================================
// ORBIUS LIGHT THEME (Day Mode)
// ============================================

export const lightTheme = {

    colors: {
      primary:    "#0EA5E9",
      primaryHov: "#0369A1",
      secondary:  "#38BDF8",
      accent:     "#06B6D4",
      muted:      "#64748B",
      deep:       "#075985",
    },
  
    bg: {
      page:     "#F8FAFC",
      card:     "rgba(255,255,255,0.8)",
      cardHov:  "rgba(255,255,255,0.95)",
      overlay:  "rgba(255,255,255,0.6)",
    },
  
    fonts: {
      heading: "Bricolage Grotesque, sans-serif",
      body:    "Manrope, sans-serif",
    },
  
    gradients: {
      text:   "linear-gradient(90deg, #0EA5E9, #06B6D4)",
      button: "linear-gradient(90deg, #0EA5E9, #0284C7)",
      glow:   "radial-gradient(circle, rgba(14,165,233,0.25), transparent)",
      orb:    "radial-gradient(circle at 35% 35%, #BAE6FD, #38BDF8 50%, #0EA5E9)",
      page:   "radial-gradient(circle, rgba(14,165,233,0.15), transparent)",
    },
  
    shadows: {
      button: "0 8px 24px rgba(14,165,233,0.25)",
      glow:   "0 0 40px rgba(14,165,233,0.3)",
      dot:    "0 0 8px rgba(14,165,233,0.6)",
      dotAcc: "0 0 6px rgba(6,182,212,0.5)",
      dotMut: "0 0 4px rgba(100,116,139,0.4)",
    },
  
    borders: {
      subtle:  "1px solid rgba(0,0,0,0.05)",
      card:    "1px solid rgba(0,0,0,0.08)",
      brand:   "1px solid rgba(14,165,233,0.3)",
      brandMd: "1px solid rgba(14,165,233,0.4)",
      brandLg: "1px solid rgba(14,165,233,0.6)",
    },
  
    tw: {
      primary:       "text-[#0EA5E9]",
      primaryBg:     "bg-[#0EA5E9]",
      primaryBgLow:  "bg-[#0EA5E9]/10",
      primaryBgMid:  "bg-[#0EA5E9]/20",
      primaryBorder: "border-[#0EA5E9]/30",
      primaryBorderMd: "border-[#0EA5E9]/40",
      primaryBorderLg: "border-[#0EA5E9]/60",
      muted:         "text-slate-500",
      accent:        "text-[#06B6D4]",
      gradient:      "from-[#0EA5E9] to-[#06B6D4]",
      gradientBtn:   "from-[#0EA5E9] to-[#0284C7]",
    },
  } as const;