"use client";

import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#vuoi-visitare", label: "Vuoi Visitare?" },
  { href: "#vuoi-esporre", label: "Vuoi Esporre?" },
  { href: "#food", label: "Food" },
  { href: "#programma", label: "Programma" },
  { href: "#edizioni", label: "Edizioni" },
  { href: "#contatti", label: "Contatti" },
  { href: "#info-visita", label: "Info Visita" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
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

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-primary-foreground lg:hidden"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary/95 backdrop-blur-md lg:hidden">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
