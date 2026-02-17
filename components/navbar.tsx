"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", color: "hsl(350 58% 35%)" },
  { href: "#vuoi-visitare", label: "Vuoi Visitare?", color: "hsl(350 58% 35%))" },
  { href: "#vuoi-esporre", label: "Vuoi Esporre?", color: "hsl(350 58% 35%)" },
  { href: "#food", label: "Food", color: "hsl(350 58% 35%)" },
  { href: "#programma", label: "Programma", color: "hsl(350 45% 40%)" },
  { href: "#edizioni", label: "Edizioni", color: "hsl(350 58% 35%)" },
  { href: "#contatti", label: "Contatti", color: "hsl(350 58% 35%)" },
  { href: "#info-visita", label: "Info Visita", color: "hsl(350 58% 35%)" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = navLinks.map((link) => link.href.replace("#", ""));
    let current = "home";

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = sectionId;
        }
      }
    }
    setActiveSection(`#${current}`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const activeLink = navLinks.find((l) => l.href === activeSection);
  const navBgColor = scrolled && activeLink ? activeLink.color : undefined;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? navBgColor || "hsl(350 58% 35% / 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : undefined,
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.15)" : undefined,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a
            href="#home"
            className="flex items-center gap-2 text-primary-foreground"
          >
            <BookOpen className="h-6 w-6" />
            <span className="font-serif text-sm font-bold leading-tight lg:text-base">
              Cortile del Libro
              <br />
              <span className="text-xs font-normal opacity-80 lg:text-sm">
                e della Carta
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-md px-3 py-2 text-sm transition-all duration-300"
                  style={{
                    color: isActive
                      ? "white"
                      : "rgba(255,255,255,0.75)",
                    fontWeight: isActive ? 700 : 400,
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-md"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                      }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 h-0.5 w-4/5 -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-primary-foreground lg:hidden"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="border-t border-white/10 backdrop-blur-md lg:hidden"
          style={{
            backgroundColor: navBgColor
              ? navBgColor.replace(")", " / 0.97)")
              : "hsl(350 58% 35% / 0.97)",
          }}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2.5 transition-all duration-200"
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.15)"
                      : "transparent",
                    fontWeight: isActive ? 700 : 400,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: link.color,
                      boxShadow: isActive
                        ? `0 0 8px ${link.color}`
                        : "none",
                    }}
                  />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
