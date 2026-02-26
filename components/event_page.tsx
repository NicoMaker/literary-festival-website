import React from "react";
import Image from "next/image";
import {
  Clock,
  MapPin,
  User,
  Building,
  Tag,
  BookOpen,
  Users,
  Palette,
} from "lucide-react";
import { BackToProgramma } from "@/components/back-to-programma";
import { getEventBySlug, allEvents, type EventCategory } from "@/lib/events-data";
import { notFound } from "next/navigation";

const categoryConfig: Record<
  EventCategory,
  { label: string; gradient: string; icon: React.ReactNode }
> = {
  letterari: {
    label: "Protagonisti Letterari",
    gradient:
      "linear-gradient(135deg, hsl(350 58% 35%) 0%, hsl(350 58% 22%) 100%)",
    icon: <BookOpen className="h-5 w-5" />,
  },
  tutti: {
    label: "Eventi per Tutti",
    gradient:
      "linear-gradient(135deg, hsl(25 65% 45%) 0%, hsl(25 65% 30%) 100%)",
    icon: <Users className="h-5 w-5" />,
  },
  bambini: {
    label: "Laboratori Infanzia",
    gradient:
      "linear-gradient(135deg, hsl(35 80% 55%) 0%, hsl(35 80% 38%) 100%)",
    icon: <Palette className="h-5 w-5" />,
  },
};

// Fallback image per categoria se l'evento non ha immagine propria
const categoryFallbackImage: Record<EventCategory, string> = {
  letterari: "/images/hero-courtyard.jpg",
  tutti: "/images/books-market.jpg",
  bambini: "/images/kids-workshop.jpg",
};

export function generateStaticParams() {
  return allEvents.map((e) => ({ slug: e.slug }));
}

// Compatibile sia con Next.js 14 (params oggetto) che 15 (params Promise)
export default async function EventPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const cat = categoryConfig[event.category];
  const heroImage =
    event.image ?? categoryFallbackImage[event.category];
  const dayLabel =
    event.day === "sabato"
      ? "Sabato 16 Maggio 2026"
      : "Domenica 17 Maggio 2026";

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO con immagine + overlay gradiente ── */}
      <div className="relative h-72 overflow-hidden md:h-96">
        <Image
          src={heroImage}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        {/* gradiente colorato sopra la foto */}
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: cat.gradient }}
        />
        {/* cerchi decorativi */}
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/10" />

        {/* contenuto sopra l'immagine */}
        <div className="relative flex h-full flex-col justify-between px-4 py-6 text-white lg:px-8">
          {/* back link */}
          <div>
            <BackToProgramma variant="hero" />
          </div>

          {/* info in basso */}
          <div>
            {/* badge categoria */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
              {cat.icon}
              {cat.label}
            </div>

            {/* giorno + orario */}
            <div className="mb-2 flex items-center gap-2 text-white/80">
              <Clock className="h-4 w-4" />
              <span className="font-mono text-sm font-semibold">
                {dayLabel} · ore {event.time}
              </span>
            </div>

            {/* titolo */}
            <h1 className="font-serif text-2xl font-bold leading-tight drop-shadow-md md:text-4xl lg:text-5xl">
              {event.title}
            </h1>

            {/* autore / curatore */}
            {(event.author || event.curator) && (
              <div className="mt-3 flex flex-wrap gap-4">
                {event.author && (
                  <div className="flex items-center gap-2 text-white/90">
                    <User className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      con {event.author}
                    </span>
                  </div>
                )}
                {event.curator && (
                  <div className="flex items-center gap-2 text-white/75">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">a cura di {event.curator}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── CONTENUTO ── */}
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Descrizione principale */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-xl font-bold text-foreground">
              Descrizione
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {event.description}
            </p>
          </div>

          {/* Sidebar info */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-md">
              <h3 className="font-serif text-base font-bold text-foreground">
                Informazioni
              </h3>
              <div className="mt-4 flex flex-col gap-4">

                {/* Orario */}
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ background: cat.gradient }}
                  >
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Orario
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">
                      {event.time}
                    </p>
                    <p className="text-xs text-muted-foreground">{dayLabel}</p>
                  </div>
                </div>

                {/* Luogo */}
                {event.location && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Luogo
                      </p>
                      <p className="mt-0.5 font-medium text-foreground">
                        {event.location}
                      </p>
                    </div>
                  </div>
                )}

                {/* Autore */}
                {event.author && (
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-white"
                      style={{ background: cat.gradient }}
                    >
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Con
                      </p>
                      <p className="mt-0.5 font-medium text-foreground">
                        {event.author}
                      </p>
                    </div>
                  </div>
                )}

                {/* Curatore */}
                {event.curator && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Building className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        A cura di
                      </p>
                      <p className="mt-0.5 font-medium text-foreground">
                        {event.curator}
                      </p>
                    </div>
                  </div>
                )}

                {/* Nota */}
                {event.note && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                      <Tag className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Nota
                      </p>
                      <p className="mt-0.5 font-medium text-amber-700">
                        {event.note}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pulsante ritorno */}
            <BackToProgramma variant="sidebar" />
          </div>
        </div>
      </div>

      {/* ── FOOTER STRIP ── */}
      <div className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center lg:px-8">
          <p className="text-sm text-muted-foreground">
            Cortile del Libro e della Carta · 16–17 Maggio 2026 · Montereale
            Valcellina (PN)
          </p>
        </div>
      </div>
    </div>
  );
}
