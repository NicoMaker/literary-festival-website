"use client";

import { useState, useEffect, useCallback } from "react";

const sections = [
  { id: "home", label: "Home", color: "hsl(350 58% 35%)" },
  { id: "vuoi-visitare", label: "Visitare", color: "hsl(350 58% 35%)" },
  { id: "vuoi-esporre", label: "Esporre", color: "hsl(350 58% 35%)" },
  { id: "food", label: "Food", color: "hsl(350 58% 35%)" },
  { id: "programma", label: "Programma", color: "hsl(350 58% 35%)" },
  { id: "edizioni", label: "Edizioni", color: "hsl(350 58% 35%)" },
  { id: "info-visita", label: "Info", color: "hsl(350 58% 35%)" },
  { id: "contatti", label: "Contatti", color: "hsl(350 58% 35%)" },
];

export default function SectionIndicator() {
  const [active, setActive] = useState("home");

  const handleScroll = useCallback(() => {
    let current = "home";
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = s.id;
        }
      }
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const activeSection = sections.find((s) => s.id === active);

  return (
    <>
      {/* Top color bar - below navbar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 h-1 transition-colors duration-500"
        style={{ backgroundColor: activeSection?.color || sections[0].color }}
      />

      {/* Side dot navigator - desktop only */}
      <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center justify-end"
              aria-label={`Vai a ${s.label}`}
            >
              {/* Label tooltip */}
              <span
                className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md px-2 py-1 text-xs font-semibold opacity-0 transition-all duration-200 group-hover:opacity-100"
                style={{
                  backgroundColor: s.color,
                  color: "white",
                }}
              >
                {s.label}
              </span>
              {/* Dot */}
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 12 : 8,
                  height: isActive ? 12 : 8,
                  backgroundColor: isActive ? s.color : "hsl(30 20% 75%)",
                  boxShadow: isActive ? `0 0 8px ${s.color}` : "none",
                }}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}