"use client";

import React, { useState } from "react";
import {
  Clock, BookOpen, Users, Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type EventCategory = "letterari" | "tutti" | "bambini";
interface EventItem {
  slug: string; time: string; day: "sabato" | "domenica";
  title: string; description: string; author?: string;
  curator?: string; category: EventCategory; note?: string;
  location?: string; image?: string;
}

const saturdayEvents: EventItem[] = [
  { slug: "come-un-sentiero-di-matita", time: "17:00", day: "sabato", title: "Come un sentiero di matita", description: "Passeggiata sentimentale tra i versi di Pierluigi Cappello. Suggestioni in versi e ricordi di uno straordinario semplificatore della complessità del vivere. Un percorso poetico che attraversa i luoghi e le parole di uno dei più grandi poeti friulani del Novecento, guidando i partecipanti in un viaggio interiore tra natura, memoria e linguaggio.", author: "Pierluigi Cappello", category: "letterari", location: "Cortile di Palazzo Toffoli", image: "/images/hero-courtyard.jpg" },
  { slug: "i-dandolo-a-grizzo", time: "20:45", day: "sabato", title: "I Dandolo a Grizzo", description: "Quale legame unisce la nobile famiglia Dandolo al piccolo paese di Grizzo? Una serata tra storia locale e scoperte sorprendenti. Un'indagine storica che svela connessioni inaspettate tra la grande storia veneziana e le radici del Friuli più autentico.", author: "Alessandro Fadelli e Luigi Alzetta", curator: 'Gruppo Ricerche "Chei del Talpa"', category: "tutti", location: "Cortile di Palazzo Toffoli", image: "/images/montereale-panorama.jpg" },
];

const sundayEvents: EventItem[] = [
  { slug: "mercatino", time: "09:30 - 18:30", day: "domenica", title: "Mercatino", description: "Mercatino dedicato alla carta in tutte le sue forme! Libri, artigianato, origami, stampe d'arte, quaderni, carte pregiate e molto altro. Un'intera giornata per scoprire la bellezza della carta e del libro nel suggestivo Cortile di Palazzo Toffoli.", category: "tutti", location: "Cortile di Palazzo Toffoli", image: "/images/books-market.jpg" },
  { slug: "touriolon-cronache-vagabonde", time: "10:00", day: "domenica", title: "To(u)riolòn, cronache vagabonde", description: "L'autore racconta 18+1 itinerari in bicicletta tra Veneto e Friuli. Un libro di viaggio che è anche un libro di incontri, di paesaggi e di storie di chi abita questi territori. Ogni itinerario è una scoperta: borghi dimenticati, osterie nascoste, panorami mozzafiato.", author: "Eros Viel", curator: "Kellermann Editore", category: "letterari", location: "Sala interna", image: "/images/montereale-panorama.jpg" },
  { slug: "petali-e-piume", time: "10:00", day: "domenica", title: "Petali e Piume", description: "Laboratorio per bambini dai 6 anni in su. Con scarti e pezzetti di carta colorata realizzeremo fantastiche forme, delicate e leggere come petali e piume. Un viaggio creativo nel mondo della carta che stimola la manualità e la fantasia dei piccoli artisti.", author: "Ilaria Bomben", category: "bambini", note: "Iscrizione richiesta", location: "Spazio laboratori", image: "/images/kids-workshop.jpg" },
  { slug: "ma-io-sorrido-ancora", time: "10:30", day: "domenica", title: "...ma io sorrido ancora", description: "Celebriamo figure femminili indimenticabili, raccontate attraverso gli occhi di chi ne ha ammirato la forza. Un incontro dedicato alle donne che hanno cambiato la storia con la loro determinazione e coraggio.", curator: "Vita Activa Editoria Trieste", category: "letterari", location: "Sala interna", image: "/images/hero-courtyard.jpg" },
  { slug: "la-terza-clessidra", time: "11:30", day: "domenica", title: "La terza clessidra", description: "Ambientato tra Aquileia e Istanbul, una trama avvincente dove antico e moderno si intrecciano. Un romanzo che attraversa i secoli e i continenti, intrecciando archeologia, mistero e avventura.", author: "Giuliano Pellizzari, Andrea Doncovio", curator: "Gruppo Editoriale Santelli", category: "letterari", location: "Sala interna", image: "/images/hero-courtyard.jpg" },
  { slug: "avventura-libresca-giraffa", time: "11:30", day: "domenica", title: 'Avventura libresca con "La Giraffa con gli occhiali"', description: "Un colorato viaggio tra musica e storie, ritmi coinvolgenti e facili cori da cantare insieme. Laboratorio per bambini dai 4 agli 8 anni che unisce la lettura all'animazione musicale.", category: "bambini", note: "Iscrizione richiesta", location: "Spazio laboratori", image: "/images/kids-workshop.jpg" },
  { slug: "origami-per-tutte-le-eta", time: "14:30", day: "domenica", title: "Origami per tutte le età", description: "Laboratorio gratuito di origami aperto a tutte le età. Impareremo le tecniche base e avanzate dell'arte della piegatura della carta, un'antica tradizione giapponese ricca di creatività.", author: "Maria Elena Fornasier", category: "tutti", note: "Iscrizione richiesta", location: "Spazio laboratori", image: "/images/kids-workshop.jpg" },
  { slug: "scrivere-per-il-futuro", time: "15:00", day: "domenica", title: "Scrivere per il futuro", description: "Dialogo urgente tra Autori e Cittadini per una coesistenza più consapevole con il selvatico. Un incontro che esplora il ruolo della scrittura nella sensibilizzazione ambientale.", author: "Luigi Casanova, Marco Niro, Sara Segantin e Gloria Solini", curator: "Associazione Mountain Wilderness Italia", category: "tutti", location: "Sala interna", image: "/images/montereale-panorama.jpg" },
  { slug: "donne-frontiere-scritture", time: "15:00", day: "domenica", title: "Donne Frontiere Scritture", description: "Una raccolta regionale di racconti e poesie che celebra il confronto culturale tra autrici italiane, slovene e croate. La frontiera come luogo di incontro, scambio e arricchimento reciproco.", curator: "Vita Activa Editoria Trieste", category: "letterari", location: "Sala interna", image: "/images/hero-courtyard.jpg" },
  { slug: "un-trio-mai-visto", time: "15:00", day: "domenica", title: "Un trio mai visto", description: "Lettura animata in italiano e friulano e un'attività creativa che stimola fantasia e manualità. Laboratorio per bambini dai 4 agli 8 anni che celebra la ricchezza linguistica del Friuli.", author: "Stefania Del Rizzo", curator: "Orto della Cultura", category: "bambini", note: "Iscrizione richiesta", location: "Spazio laboratori", image: "/images/kids-workshop.jpg" },
  { slug: "le-dieci-grandi-parole", time: "16:00", day: "domenica", title: "Le dieci grandi parole", description: "Presentazione dell'ultimo libro postumo di Pierluigi Di Piazza da parte di suo fratello Vito. Un incontro commovente dedicato alle parole che hanno guidato una vita spesa al servizio degli ultimi.", author: "Vito Di Piazza", curator: "Alba Edizioni", category: "letterari", location: "Sala interna", image: "/images/espositore.jpg" },
  { slug: "la-leggenda-dei-can-cantanti", time: "16:00", day: "domenica", title: "La leggenda dei Can-Cantanti", description: "Lettura esperienziale per bambini che insegna il rispetto per gli animali. Attraverso il disegno e la narrazione, i bambini scopriranno il valore dell'amicizia tra uomini e animali.", author: "Susanna Fontana e Stefania Delponte", curator: "Gaspari Editore", category: "bambini", note: "Iscrizione richiesta", location: "Spazio laboratori", image: "/images/kids-workshop.jpg" },
  { slug: "la-poesia-incontra-la-musica", time: "17:30", day: "domenica", title: "La poesia incontra la musica d'autore", description: "Un format inedito: composizioni corali originali del maestro Maurizio Baldin con poeti friulani. La Corale Polifonica di Montereale porta in scena un connubio straordinario tra parola e musica.", author: "Corale Polifonica di Montereale Valcellina", curator: "dirige Maurizio Baldin", category: "tutti", location: "Cortile di Palazzo Toffoli", image: "/images/hero-courtyard.jpg" },
  { slug: "gran-finale-pastasciutta", time: "18:45", day: "domenica", title: "Gran finale con pastasciutta", description: "Gran finale con pastasciutta degli Alpini di Montereale Valcellina. Una tradizione che chiude la giornata in grande stile, attorno alla tavola, in compagnia.", category: "tutti", location: "Cortile di Palazzo Toffoli", image: "/images/food-zone.jpg" },
];

const categoryConfig: Record<EventCategory, { label: string; icon: React.ReactNode; color: string; gradient: string }> = {
  letterari: { label: "Protagonisti Letterari", icon: <BookOpen className="h-4 w-4" />, color: "bg-primary text-primary-foreground", gradient: "linear-gradient(135deg, hsl(350 58% 35%) 0%, hsl(350 58% 22%) 100%)" },
  tutti: { label: "Eventi per Tutti", icon: <Users className="h-4 w-4" />, color: "bg-accent text-accent-foreground", gradient: "linear-gradient(135deg, hsl(25 65% 45%) 0%, hsl(25 65% 30%) 100%)" },
  bambini: { label: "Laboratori Infanzia", icon: <Palette className="h-4 w-4" />, color: "bg-chart-4 text-primary-foreground", gradient: "linear-gradient(135deg, hsl(35 80% 55%) 0%, hsl(35 80% 38%) 100%)" },
};

function MercatinoCard({ event }: { event: EventItem }) {
  return (
    <Link href={`/evento/${event.slug}`} className="group relative block w-full overflow-hidden rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-accent/10 via-white to-primary/5 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/10" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10" />
      <div className="relative flex flex-col items-center gap-6 p-8 md:flex-row md:p-10">
        <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-xl shadow-lg md:h-48 md:w-48">
          <Image src={event.image || "/images/books-market.jpg"} alt={event.title} fill className="object-cover transition-transform group-hover:scale-105" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <Users className="h-4 w-4" />
            Evento Principale
          </div>
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{event.title}</h3>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground md:text-xl">{event.description}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <div className="flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 shadow-sm">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-mono text-base font-semibold text-foreground">{event.time}</span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-sm">{event.location}</span>
              </div>
            )}
          </div>
          <p className="mt-4 text-sm font-semibold text-primary transition-opacity group-hover:opacity-100">Scopri di piu →</p>
        </div>
      </div>
    </Link>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const cat = categoryConfig[event.category];
  return (
    <Link href={`/evento/${event.slug}`} className="group block w-full rounded-xl border border-border bg-white p-5 text-left shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /><span className="font-mono text-sm font-semibold">{event.time}</span></div>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cat.color}`}>{cat.icon}<span className="hidden sm:inline">{cat.label}</span></span>
      </div>
      <h4 className="font-serif text-lg font-bold text-foreground transition-colors group-hover:text-primary">{event.title}</h4>
      {event.author && <p className="mt-1 text-sm font-medium text-accent">con {event.author}</p>}
      {event.curator && <p className="mt-0.5 text-xs text-muted-foreground">a cura di {event.curator}</p>}
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
      {event.note && <span className="mt-2 inline-block rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">{event.note}</span>}
      <p className="mt-3 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">Scopri di piu →</p>
    </Link>
  );
}

export default function ProgrammaSection() {
  const [activeDay, setActiveDay] = useState<"sabato" | "domenica">("domenica");
  const [activeFilter, setActiveFilter] = useState<EventCategory | "all">("all");

  const allDayEvents = activeDay === "sabato" ? saturdayEvents : sundayEvents;
  const mercatino = allDayEvents.find((e) => e.slug === "mercatino");
  const otherEvents = allDayEvents.filter((e) => e.slug !== "mercatino");
  const filteredOther = activeFilter === "all" ? otherEvents : otherEvents.filter((e) => e.category === activeFilter);
  const showMercatino = mercatino && (activeFilter === "all" || activeFilter === mercatino.category);

  return (
    <section id="programma" className="scroll-mt-20 py-20 lg:py-28" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Programma 2026</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">Due giorni di cultura e passione</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">Incontri con autori, laboratori creativi per bambini, mercatino del libro e della carta, musica e tanto altro.</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <Image src="/images/programma-a5-stampa-no-20abbondanze-page-0002.jpg" alt="Programma completo del festival" width={600} height={850} className="max-h-[600px] w-auto object-contain" />
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {(["sabato", "domenica"] as const).map((day) => (
            <button key={day} type="button" onClick={() => setActiveDay(day)} className={`rounded-lg px-6 py-3 font-semibold capitalize transition-all ${activeDay === day ? "bg-primary text-primary-foreground shadow-md" : "bg-white text-foreground shadow-sm hover:bg-secondary"}`}>{day}</button>
          ))}
        </div>

        {/* Mercatino - sempre in evidenza sopra tutto quando e' domenica */}
        {showMercatino && mercatino && (
          <div className="mt-10">
            <MercatinoCard event={mercatino} />
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button type="button" onClick={() => setActiveFilter("all")} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${activeFilter === "all" ? "bg-foreground text-background" : "bg-white text-foreground shadow-sm hover:bg-secondary"}`}>Tutti</button>
          {(Object.entries(categoryConfig) as [EventCategory, typeof categoryConfig["letterari"]][]).map(([key, config]) => (
            <button type="button" key={key} onClick={() => setActiveFilter(key)} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${activeFilter === key ? config.color : "bg-white text-foreground shadow-sm hover:bg-secondary"}`}>{config.icon}{config.label}</button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredOther.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        {filteredOther.length === 0 && !showMercatino && (
          <p className="mt-10 text-center text-muted-foreground">Nessun evento per la categoria selezionata in questa giornata.</p>
        )}
      </div>
    </section>
  );
}
