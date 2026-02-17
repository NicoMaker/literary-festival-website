import { BookOpen, Users, Baby, Scissors, Music, Palette } from "lucide-react";
import Image from "next/image";

const bambiniActivities = [
  {
    title: "Petali e Piume",
    age: "dai 6 anni in su",
    author: "Ilaria Bomben",
    description:
      "Con scarti e pezzetti di carta colorata realizzeremo fantastiche forme, delicate e leggere.",
  },
  {
    title: 'Avventura libresca con "La Giraffa con gli occhiali"',
    age: "dai 4 agli 8 anni",
    author: "",
    description:
      "Un colorato viaggio tra musica e storie, ritmi coinvolgenti e facili cori da cantare insieme.",
  },
  {
    title: "Un trio mai visto",
    age: "dai 4 agli 8 anni",
    author: "Stefania Del Rizzo",
    description:
      "Lettura animata in italiano e friulano e un'attività creativa che stimola fantasia e manualità.",
  },
  {
    title: "La leggenda dei Can-Cantanti",
    age: "dai 4 agli 8 anni",
    author: "Susanna Fontana e Stefania Delponte",
    description:
      "Lettura esperienziale che insegna, tramite il disegno, il rispetto per gli animali.",
  },
];

const adultiActivities = [
  {
    title: "Incontri con Autori",
    icon: <BookOpen className="h-5 w-5" />,
    description:
      "Presentazioni di libri, dialoghi e passeggiata poetica dedicata a Pierluigi Cappello.",
    highlights: [
      "Pierluigi Cappello",
      "Giuliano Pellizzari",
      "Eros Viel",
      "Vito Di Piazza",
    ],
  },
  {
    title: "Dibattiti e Tavole Rotonde",
    icon: <Users className="h-5 w-5" />,
    description:
      "Temi attuali: ambiente, cultura di frontiera, scrittura al femminile.",
    highlights: [
      "Scrivere per il futuro",
      "Donne Frontiere Scritture",
      "I Dandolo a Grizzo",
    ],
  },
  {
    title: "Musica e Poesia",
    icon: <Music className="h-5 w-5" />,
    description:
      "La Corale Polifonica di Montereale Valcellina con composizioni corali originali e poeti friulani.",
    highlights: ["Corale Polifonica", "Maestro Maurizio Baldin"],
  },
];

const tuttiActivities = [
  {
    title: "Mercatino della Carta",
    icon: <Scissors className="h-5 w-5" />,
    description:
      "Mercatino unico dedicato alla carta in tutte le sue forme: libri, artigianato, origami, stampe.",
    time: "Dalle 9:30 alle 18:30 - Cortile di Palazzo Toffoli",
  },
  {
    title: "Origami per Tutte le Età",
    icon: <Palette className="h-5 w-5" />,
    description:
      "Laboratorio gratuito di origami con Maria Elena Fornasier. Previa iscrizione sul sito.",
    time: "Domenica ore 14:30",
  },
];

export default function ProposteSection() {
  return (
    <section
      id="vuoi-visitare"
      className="scroll-mt-20 py-20 lg:py-28"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Vuoi Visitare?
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {"C'è qualcosa per tutti"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {"Bambini, adulti, famiglie: il festival offre un ricco programma di attività per ogni età e interesse."}
          </p>
        </div>

        {/* Images */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
            <Image
              src="/images/books-market.jpg"
              alt="Mercatino dei libri nel cortile storico"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
            <Image
              src="/images/kids-workshop.jpg"
              alt="Laboratorio creativo per bambini"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BAMBINI */}
        <div id="bambini" className="mt-16 scroll-mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chart-4 text-primary-foreground">
              <Baby className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Laboratori per Bambini
            </h3>
          </div>
          <p className="mb-6 text-sm font-medium text-accent">
            Tutti i laboratori sono gratuiti previa iscrizione sul sito
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bambiniActivities.map((act) => (
              <div
                key={act.title}
                className="rounded-xl border border-border bg-background p-5 transition-shadow hover:shadow-lg"
              >
                <h4 className="font-serif text-base font-bold leading-snug text-foreground">
                  {act.title}
                </h4>
                <p className="mt-1 text-xs font-semibold text-accent">
                  {act.age}
                </p>
                {act.author && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    con {act.author}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ADULTI */}
        <div id="adulti" className="mt-16 scroll-mt-24">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Per gli Adulti
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {adultiActivities.map((act) => (
              <div
                key={act.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {act.icon}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    {act.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {act.description}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {act.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* PER TUTTI */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Per Tutti
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {tuttiActivities.map((act) => (
              <div
                key={act.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    {act.icon}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    {act.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {act.description}
                </p>
                <p className="mt-3 text-xs font-semibold text-accent">
                  {act.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}