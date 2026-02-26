"use client";

import React, { useState, useEffect } from "react";
import {
  Clock, BookOpen, Users, Palette,
  ArrowLeft, MapPin, User, Building, Tag,
} from "lucide-react";
import Image from "next/image";

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

const fallbackImage: Record<EventCategory, string> = {
  letterari: "/images/hero-courtyard.jpg",
  tutti: "/images/books-market.jpg",
  bambini: "/images/kids-workshop.jpg",
};

function EventDetailView({ event, onBack }: { event: EventItem; onBack: () => void }) {
  const cat = categoryConfig[event.category];
  const heroImg = event.image ?? fallbackImage[event.category];
  const dayLabel = event.day === "sabato" ? "Sabato 16 Maggio 2026" : "Domenica 17 Maggio 2026";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onBack(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onBack]);

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-white" style={{ animation: "slideInRight 0.3s ease-out" }}>
      <style>{`@keyframes slideInRight { from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0); } }`}</style>

      {/* Hero immagine */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <Image src={heroImg} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 opacity-80" style={{ background: cat.gradient }} />
        <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full bg-white/10" />
        <div className="relative flex h-full flex-col justify-between px-4 py-5 text-white lg:px-8">
          <button type="button" onClick={onBack} className="inline-flex w-fit items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/25">
            <ArrowLeft className="h-4 w-4" /> Torna al programma
          </button>
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">{cat.icon}{cat.label}</div>
            <div className="mb-2 flex items-center gap-2 text-white/80"><Clock className="h-4 w-4" /><span className="font-mono text-sm font-semibold">{dayLabel} · ore {event.time}</span></div>
            <h1 className="font-serif text-2xl font-bold leading-tight drop-shadow md:text-3xl lg:text-4xl">{event.title}</h1>
            {(event.author || event.curator) && (
              <div className="mt-2 flex flex-wrap gap-4">
                {event.author && <div className="flex items-center gap-1.5 text-white/90"><User className="h-4 w-4" /><span className="text-sm font-medium">con {event.author}</span></div>}
                {event.curator && <div className="flex items-center gap-1.5 text-white/75"><Building className="h-4 w-4" /><span className="text-sm">a cura di {event.curator}</span></div>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contenuto */}
      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-xl font-bold text-foreground">Descrizione</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{event.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-md">
              <h3 className="font-serif text-base font-bold text-foreground">Informazioni</h3>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-white" style={{ background: cat.gradient }}><Clock className="h-4 w-4" /></div>
                  <div><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Orario</p><p className="mt-0.5 font-medium text-foreground">{event.time}</p><p className="text-xs text-muted-foreground">{dayLabel}</p></div>
                </div>
                {event.location && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground"><MapPin className="h-4 w-4" /></div>
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Luogo</p><p className="mt-0.5 font-medium text-foreground">{event.location}</p></div>
                  </div>
                )}
                {event.author && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-white" style={{ background: cat.gradient }}><User className="h-4 w-4" /></div>
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Con</p><p className="mt-0.5 font-medium text-foreground">{event.author}</p></div>
                  </div>
                )}
                {event.curator && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground"><Building className="h-4 w-4" /></div>
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">A cura di</p><p className="mt-0.5 font-medium text-foreground">{event.curator}</p></div>
                  </div>
                )}
                {event.note && (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700"><Tag className="h-4 w-4" /></div>
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nota</p><p className="mt-0.5 font-medium text-amber-700">{event.note}</p></div>
                  </div>
                )}
              </div>
            </div>
            <button type="button" onClick={onBack} className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              <ArrowLeft className="h-4 w-4" /> Tutti gli eventi
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:px-8">
          <p className="text-sm text-muted-foreground">Cortile del Libro e della Carta · 16–17 Maggio 2026 · Montereale Valcellina (PN)</p>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event, onClick, isMercatino = false }: { event: EventItem; onClick: () => void; isMercatino?: boolean }) {
  const cat = categoryConfig[event.category];
  return (
    <button type="button" onClick={onClick} className={`group w-full cursor-pointer rounded-xl border border-border bg-white p-5 text-left shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg ${isMercatino ? "border-accent/40 bg-accent/5" : ""}`}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /><span className="font-mono text-sm font-semibold">{event.time}</span></div>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cat.color}`}>{cat.icon}<span className="hidden sm:inline">{cat.label}</span></span>
      </div>
      <h4 className="font-serif text-lg font-bold text-foreground transition-colors group-hover:text-primary">{event.title}</h4>
      {event.author && <p className="mt-1 text-sm font-medium text-accent">con {event.author}</p>}
      {event.curator && <p className="mt-0.5 text-xs text-muted-foreground">a cura di {event.curator}</p>}
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
      {event.note && <span className="mt-2 inline-block rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">{event.note}</span>}
      <p className="mt-3 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">Scopri di più →</p>
    </button>
  );
}

export default function ProgrammaSection() {
  const [activeDay, setActiveDay] = useState<"sabato" | "domenica">("domenica");
  const [activeFilter, setActiveFilter] = useState<EventCategory | "all">("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const allDayEvents = activeDay === "sabato" ? saturdayEvents : sundayEvents;
  const mercatino = allDayEvents.find((e) => e.slug === "mercatino");
  const otherEvents = allDayEvents.filter((e) => e.slug !== "mercatino");
  const filteredOther = activeFilter === "all" ? otherEvents : otherEvents.filter((e) => e.category === activeFilter);
  const showMercatino = mercatino && (activeFilter === "all" || activeFilter === mercatino.category);

  if (selectedEvent) {
    return <EventDetailView event={selectedEvent} onBack={() => setSelectedEvent(null)} />;
  }

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

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button type="button" onClick={() => setActiveFilter("all")} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${activeFilter === "all" ? "bg-foreground text-background" : "bg-white text-foreground shadow-sm hover:bg-secondary"}`}>Tutti</button>
          {(Object.entries(categoryConfig) as [EventCategory, typeof categoryConfig["letterari"]][]).map(([key, config]) => (
            <button type="button" key={key} onClick={() => setActiveFilter(key)} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${activeFilter === key ? config.color : "bg-white text-foreground shadow-sm hover:bg-secondary"}`}>{config.icon}{config.label}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {showMercatino && mercatino && (
            <div className="md:col-span-2 lg:col-span-3">
              <EventCard event={mercatino} onClick={() => setSelectedEvent(mercatino)} isMercatino />
            </div>
          )}
          {filteredOther.map((event) => (
            <EventCard key={event.slug} event={event} onClick={() => setSelectedEvent(event)} />
          ))}
        </div>

        {filteredOther.length === 0 && !showMercatino && (
          <p className="mt-10 text-center text-muted-foreground">Nessun evento per la categoria selezionata in questa giornata.</p>
        )}
      </div>
    </section>
  );
}