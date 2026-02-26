"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackToProgrammaProps {
  variant?: "hero" | "sidebar";
}

export function BackToProgramma({ variant = "hero" }: BackToProgrammaProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#programma");
    // Dopo la navigazione, assicuriamoci che scrolli alla sezione
    setTimeout(() => {
      const element = document.getElementById("programma");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (variant === "hero") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <ArrowLeft className="h-4 w-4" />
        Torna al programma
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
    >
      <ArrowLeft className="h-4 w-4" />
      Tutti gli eventi
    </button>
  );
}
