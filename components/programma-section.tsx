"use client";

import React from "react";
import { useState } from "react";
import { Clock, BookOpen, Users, Palette } from "lucide-react";
import Image from "next/image";

type EventCategory = "letterari" | "tutti" | "bambini";

interface EventItem {
  time: string;
  title: string;
  description: string;
  author?: string;
  curator?: string;
  category: EventCategory;
  note?: string;
}

const saturdayEvents: EventItem[] = [
  {
    time: "17:00",
    title: "Come un sentiero di matita",
    description:
      "Passeggiata sentimentale tra i versi di Pierluigi Cappello. Suggestioni in versi e ricordi di uno straordinario semplificatore della complessità del vivere.",
    author: "Pierluigi Cappello",
    category: "letterari",
  },
  {
    time: "20:45",
    title: "I Dandolo a Grizzo",
    description:
      "Quale legame unisce la nobile famiglia Dandolo al piccolo paese di Grizzo?",
    author: "Alessandro Fadelli e Luigi Alzetta",
    curator: 'Gruppo Ricerche "Chei del Talpa"',
    category: "tutti",
  },
];

const sundayEvents: EventItem[] = [
  {
    time: "10:00",
    title: "To(u)riolòn, cronache vagabonde",
    description:
      "L'autore racconta 18+1 itinerari in bicicletta tra Veneto e Friuli.",
    author: "Eros Viel",
    curator: "Kellermann Editore",
    category: "letterari",
  },
  {
    time: "10:00",
    title: "Petali e Piume",
    description:
      "Laboratorio per bambini dai 6 anni in su. Con scarti e pezzetti di carta colorata realizzeremo fantastiche forme.",
    author: "Ilaria Bomben",
    category: "bambini",
  },
  {
    time: "10:30",
    title: "...ma io sorrido ancora",
    description:
      "Celebriamo figure femminili indimenticabili, raccontate attraverso gli occhi di chi ne ha ammirato la forza.",
    curator: "Vita Activa Editoria Trieste",
    category: "letterari",
  },
  {
    time: "11:30",
    title: "La terza clessidra",
    description:
      "Ambientato tra Aquileia e Istanbul, una trama avvincente dove antico e moderno si intrecciano.",
    author: "Giuliano Pellizzari, Andrea Doncovio",
    curator: "Gruppo Editoriale Santelli",
    category: "letterari",
  },
  {
    time: "11:30",
    title: 'Avventura libresca con "La Giraffa con gli occhiali"',
    description:
      "Un colorato viaggio tra musica e storie, ritmi coinvolgenti. Laboratorio per bambini dai 4 agli 8 anni.",
    category: "bambini",
  },
  {
    time: "09:30 - 18:30",
    title: "Mercatino",
    description:
      "Mercatino dedicato alla carta in tutte le sue forme! Cortile di Palazzo Toffoli.",
    category: "tutti",
  },
  {
    time: "14:30",
    title: "Origami per tutte le età",
    description: "Laboratorio gratuito previa iscrizione sul sito.",
    author: "Maria Elena Fornasier",
    category: "tutti",
    note: "Iscrizione richiesta",
  },
  {
    time: "15:00",
    title: "Scrivere per il futuro",
    description:
      "Dialogo urgente tra Autori e Cittadini per una coesistenza più consapevole con il selvatico.",
    author: "Luigi Casanova, Marco Niro, Sara Segantin e Gloria Solini",
    curator: "Associazione Mountain Wilderness Italia",
    category: "tutti",
  },
  {
    time: "15:00",
    title: "Donne Frontiere Scritture",
    description:
      "Una raccolta regionale di racconti e poesie che celebra il confronto culturale tra autrici italiane, slovene e croate.",
    curator: "Vita Activa Editoria Trieste",
    category: "letterari",
  },
  {
    time: "15:00",
    title: "Un trio mai visto",
    description:
      "Lettura animata in italiano e friulano. Laboratorio per bambini dai 4 agli 8 anni.",
    author: "Stefania Del Rizzo",
    curator: "Orto della Cultura",
    category: "bambini",
  },
  {
    time: "16:00",
    title: "Le dieci grandi parole",
    description:
      "Presentazione dell'ultimo libro postumo di Pierluigi Di Piazza da parte di suo fratello Vito.",
    author: "Vito Di Piazza",
    curator: "Alba Edizioni",
    category: "letterari",
  },
  {
    time: "16:00",
    title: "La leggenda dei Can-Cantanti",
    description:
      "Lettura esperienziale per bambini che insegna il rispetto per gli animali. Dai 4 agli 8 anni.",
    author: "Susanna Fontana e Stefania Delponte",
    curator: "Gaspari Editore",
    category: "bambini",
  },
  {
    time: "17:30",
    title: "La poesia incontra la musica d'autore",
    description:
      "Un format inedito: composizioni corali originali del maestro Maurizio Baldin con poeti friulani.",
    author: "Corale Polifonica di Montereale Valcellina",
    curator: "dirige Maurizio Baldin",
    category: "tutti",
  },
  {
    time: "18:45",
    title: "Gran finale con pastasciutta",
    description:
      "Gran finale con pastasciutta degli Alpini di Montereale Valcellina.",
    category: "tutti",
  },
];

const categoryConfig: Record<
  EventCategory,
  { label: string; icon: React.ReactNode; color: string }
> = {
  letterari: {
    label: "Protagonisti Letterari",
    icon: <BookOpen className="h-4 w-4" />,
    color: "bg-primary text-primary-foreground",
  },
  tutti: {
    label: "Eventi per Tutti",
    icon: <Users className="h-4 w-4" />,
    color: "bg-accent text-accent-foreground",
  },
  bambini: {
    label: "Laboratori Infanzia",
    icon: <Palette className="h-4 w-4" />,
    color: "bg-chart-4 text-primary-foreground",
  },
};

function EventCard({ event }: { event: EventItem }) {
  const cat = categoryConfig[event.category];
  return (
    <div className="group rounded-xl border border-border bg-white p-5 shadow-md transition-all hover:shadow-lg">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="font-mono text-sm font-semibold">{event.time}</span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cat.color}`}
        >
          {cat.icon}
          <span className="hidden sm:inline">{cat.label}</span>
        </span>
      </div>
      <h4 className="font-serif text-lg font-bold text-foreground">
        {event.title}
      </h4>
      {event.author && (
        <p className="mt-1 text-sm font-medium text-accent">
          con {event.author}
        </p>
      )}
      {event.curator && (
        <p className="mt-0.5 text-xs text-muted-foreground">
          a cura di {event.curator}
        </p>
      )}
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {event.description}
      </p>
      {event.note && (
        <span className="mt-2 inline-block rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
          {event.note}
        </span>
      )}
    </div>
  );
}

export default function ProgrammaSection() {
  const [activeDay, setActiveDay] = useState<"sabato" | "domenica">(
    "domenica"
  );
  const [activeFilter, setActiveFilter] = useState<EventCategory | "all">(
    "all"
  );

  const events = activeDay === "sabato" ? saturdayEvents : sundayEvents;
  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.category === activeFilter);

  return (
    <section
      id="programma"
      className="scroll-mt-20 py-20 lg:py-28"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Programma 2026
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Due giorni di cultura e passione
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            Incontri con autori, laboratori creativi per bambini, mercatino del
            libro e della carta, musica e tanto altro.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/programma-a5-stampa-no-20abbondanze-page-0002.jpg"
              alt="Programma completo del festival - Sabato e Domenica"
              width={600}
              height={850}
              className="max-h-[600px] w-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveDay("sabato")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all ${
              activeDay === "sabato"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-white text-foreground shadow-sm hover:bg-secondary"
            }`}
          >
            Sabato
          </button>
          <button
            type="button"
            onClick={() => setActiveDay("domenica")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all ${
              activeDay === "domenica"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-white text-foreground shadow-sm hover:bg-secondary"
            }`}
          >
            Domenica
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              activeFilter === "all"
                ? "bg-foreground text-background"
                : "bg-white text-foreground shadow-sm hover:bg-secondary"
            }`}
          >
            Tutti
          </button>
          {(
            Object.entries(categoryConfig) as [
              EventCategory,
              (typeof categoryConfig)["letterari"],
            ][]
          ).map(([key, config]) => (
            <button
              type="button"
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeFilter === key
                  ? config.color
                  : "bg-white text-foreground shadow-sm hover:bg-secondary"
              }`}
            >
              {config.icon}
              {config.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard
              key={`${event.time}-${event.title}`}
              event={event}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Nessun evento per la categoria selezionata in questa giornata.
          </p>
        )}
      </div>
    </section>
  );
}