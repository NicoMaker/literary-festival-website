import { BookOpen, Facebook, Instagram, Heart } from "lucide-react";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#vuoi-visitare", label: "Vuoi Visitare?" },
  { href: "#vuoi-esporre", label: "Vuoi Esporre?" },
  { href: "#food", label: "Food" },
  { href: "#programma", label: "Programma" },
  { href: "#edizioni", label: "Edizioni" },
  { href: "#info-visita", label: "Info Visita" },
  { href: "#contatti", label: "Contatti" }
];

const externalLinks = [
  { label: "Visita Montereale", href: "https://visitmonterealevalcellina.it/" },
  {
    label: "Comune di Montereale",
    href: "https://www.comune.monterealevalcellina.pn.it/",
  },
  {
    label: "Turismo FVG",
    href: "https://www.turismofvg.it/montereale-valcellina",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-serif text-lg font-bold">
                Cortile del Libro
                <br />
                e della Carta
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              {"Festival letterario nel cuore di Montereale Valcellina. Dove le storie trovano casa e la carta prende vita."}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/cortiledellibroedellacarta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/cortiledellibroedellacarta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider">
              Navigazione
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider">
              Scopri il Territorio
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider">
              Contatti
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm opacity-70">
              <p>Palazzo Toffoli</p>
              <p>Via Verdi, Montereale Valcellina (PN)</p>
              <p>Friuli Venezia Giulia, Italia</p>
              <p className="mt-3">Tel: +39 1234567890</p>
              <p>Mail: info@cortiledellibroedellacarta.it</p>
              <p>P.Iva: 01234567890</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm opacity-60">
              {"© 2026 Cortile del Libro e della Carta. Tutti i diritti riservati."}
            </p>
            <p className="flex items-center gap-1 text-sm opacity-60">
              Fatto con{" "}
              <Heart className="h-3 w-3 fill-current" /> a Montereale
              Valcellina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
