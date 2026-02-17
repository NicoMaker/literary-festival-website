import { CalendarDays, MapPin, Baby, UtensilsCrossed } from "lucide-react";

const quickCards = [
  {
    href: "#bambini",
    icon: <Baby className="h-6 w-6" />,
    label: "Bambini",
    desc: "Laboratori e letture animate",
  },
  {
    href: "#adulti",
    label: "Adulti",
    desc: "Incontri con autori e dibattiti",
  },
  {
    href: "#food",
    icon: <UtensilsCrossed className="h-6 w-6" />,
    label: "Cibi & Gusto",
    desc: "Sapori del territorio friulano",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-courtyard.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center text-primary-foreground">
        <div className="mx-auto max-w-4xl pt-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] opacity-80 lg:text-base">
            Festival Letterario
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Cortile del Libro
            <br />
            e della Carta
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-primary-foreground/40" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-90 text-pretty lg:text-xl">
            {"Dove le storie trovano casa e la carta prende vita. Piccoli tesori, grandi passioni. Benvenuti nel nostro spazio dedicato alla cultura."}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              <span className="text-lg font-semibold">16 - 17 Maggio 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Montereale Valcellina (PN)</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#programma"
              className="rounded-lg bg-primary-foreground px-8 py-3 font-semibold text-primary transition-transform hover:scale-105"
            >
              Scopri il Programma
            </a>
            <a
              href="#contatti"
              className="rounded-lg border-2 border-primary-foreground/60 px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contattaci
            </a>
          </div>
        </div>

        {/* Quick access cards */}
        <div className="mx-auto mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {quickCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="group flex flex-col items-center gap-2 rounded-xl bg-primary-foreground/10 px-6 py-5 backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              {card.icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20 transition-colors group-hover:bg-primary-foreground/30">
                  {card.icon}
                </div>
              )}
              <span className="text-base font-bold">{card.label}</span>
              <span className="text-center text-xs opacity-70">{card.desc}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-primary-foreground/50 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
}
