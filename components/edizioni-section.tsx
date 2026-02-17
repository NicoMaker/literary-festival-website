"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Camera,
} from "lucide-react";
import Image from "next/image";

interface Edition {
  year: number;
  edition: string;
  description: string;
  highlights: string[];
  image: string;
  photoPageLink: string;
}

const editions: Edition[] = [
  {
    year: 2023,
    edition: "1a Edizione",
    description:
      "La prima edizione del Cortile del Libro e della Carta ha dato il via a un nuovo appuntamento culturale per Montereale Valcellina. Un piccolo cortile, grandi storie.",
    highlights: [
      "Inaugurazione del festival",
      "Primi incontri con autori locali",
      "Laboratori di carta per bambini",
      "Mercatino del libro usato",
    ],
    image: "/images/edizione-2023.jpg",
    photoPageLink: "/foto/2023",
  },
  {
    year: 2024,
    edition: "2a Edizione",
    description:
      "La seconda edizione ha visto crescere il festival con nuovi ospiti, pi\u00f9 laboratori e una partecipazione entusiasmante della comunit\u00e0.",
    highlights: [
      "Raddoppiati gli espositori",
      "Laboratori di origami",
      "Incontri con autori nazionali",
      "Collaborazione con scuole locali",
    ],
    image: "/images/edizione-2024.jpg",
    photoPageLink: "/foto/2024",
  },
  {
    year: 2025,
    edition: "3a Edizione",
    description:
      "L'edizione 2025 porta il festival a un nuovo livello: due giorni ricchi di eventi, una passeggiata poetica, la Corale Polifonica e la zona food degli Alpini.",
    highlights: [
      "Due giorni di eventi (24-25 Maggio)",
      "Passeggiata poetica dedicata a Pierluigi Cappello",
      "Corale Polifonica con poeti friulani",
      "Laboratori per bambini ampliati",
      "Gran finale con pastasciutta degli Alpini",
    ],
    image: "/images/edizione-2025.jpg",
    photoPageLink: "/foto/2025",
  },
];

export default function EdizioniSection() {
  const [activeEdition, setActiveEdition] = useState(editions.length - 1);

  const goNext = () =>
    setActiveEdition((prev) => Math.min(prev + 1, editions.length - 1));
  const goPrev = () => setActiveEdition((prev) => Math.max(prev - 1, 0));

  const current = editions[activeEdition];

  return (
    <section
      id="edizioni"
      className="scroll-mt-20 py-20 lg:py-28"
      style={{ background: "hsl(270 20% 93%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Archivio
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Edizioni Passate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {"Un viaggio attraverso le edizioni passate. Ogni anno, nuove storie, nuove emozioni."}
          </p>
        </div>

        {/* Edition tabs */}
        <div className="mt-12 flex justify-center gap-4">
          {editions.map((ed, i) => (
            <button
              key={ed.year}
              type="button"
              onClick={() => setActiveEdition(i)}
              className={`rounded-lg px-6 py-3 text-center transition-all ${
                activeEdition === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-foreground hover:bg-secondary"
              }`}
            >
              <span className="block text-sm font-medium">{ed.edition}</span>
              <span className="block text-lg font-bold">{ed.year}</span>
            </button>
          ))}
        </div>

        {/* Edition content */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            {/* Edition image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={current.image}
                alt={`Foto dell'edizione ${current.year} del festival`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="text-primary-foreground">
                  <p className="text-sm font-medium opacity-80">
                    {current.edition}
                  </p>
                  <p className="font-serif text-3xl font-bold">
                    {current.year}
                  </p>
                </div>
                <a
                  href={current.photoPageLink}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/90 px-4 py-2 text-sm font-semibold text-primary transition-transform hover:scale-105"
                >
                  <Camera className="h-4 w-4" />
                  Galleria Foto
                </a>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={activeEdition === 0}
                  className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary disabled:opacity-30"
                  aria-label="Edizione precedente"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <Calendar className="h-5 w-5" />
                    <span className="font-mono text-sm font-semibold">
                      Anno {current.year}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-foreground">
                    {current.edition}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={activeEdition === editions.length - 1}
                  className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary disabled:opacity-30"
                  aria-label="Edizione successiva"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <p className="mt-6 text-center leading-relaxed text-muted-foreground">
                {current.description}
              </p>

              <div className="mt-8">
                <h4 className="text-center font-serif text-lg font-bold text-foreground">
                  Momenti salienti
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {current.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 rounded-lg bg-card p-3 text-sm text-foreground"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
