import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";

interface GalleryPhoto {
  src: string;
  alt: string;
}

interface EditionGallery {
  year: number;
  edition: string;
  description: string;
  accentColor: string;
  photos: GalleryPhoto[];
}

const galleries: Record<string, EditionGallery> = {
  "2023": {
    year: 2023,
    edition: "1a Edizione",
    description:
      "Le immagini della prima edizione del Cortile del Libro e della Carta. L'inizio di un'avventura culturale a Montereale Valcellina.",
    accentColor: "hsl(140 25% 93%)",
    photos: [
      { src: "/images/edizione-2023.jpg", alt: "Panoramica della prima edizione del festival" },
      { src: "/images/gallery/2023-1.jpg", alt: "Cerimonia di apertura nel cortile" },
      { src: "/images/gallery/2023-2.jpg", alt: "Laboratorio di carta per bambini" },
      { src: "/images/gallery/2023-3.jpg", alt: "Bancarella del mercatino dei libri" },
    ],
  },
  "2024": {
    year: 2024,
    edition: "2a Edizione",
    description:
      "La seconda edizione ha raddoppiato la partecipazione con nuovi espositori, laboratori di origami e autori nazionali.",
    accentColor: "hsl(25 35% 91%)",
    photos: [
      { src: "/images/edizione-2024.jpg", alt: "Panoramica della seconda edizione del festival" },
      { src: "/images/gallery/2024-1.jpg", alt: "Incontro con l'autore nel cortile" },
      { src: "/images/gallery/2024-2.jpg", alt: "Laboratorio di origami per tutte le età" },
      { src: "/images/gallery/2024-3.jpg", alt: "Espositori e visitatori al mercatino" },
    ],
  },
  "2025": {
    year: 2025,
    edition: "3a Edizione",
    description:
      "Due giorni ricchi di eventi: passeggiata poetica, Corale Polifonica, laboratori ampliati e il gran finale con la pastasciutta degli Alpini.",
    accentColor: "hsl(350 30% 93%)",
    photos: [
      { src: "/images/edizione-2025.jpg", alt: "Panoramica della terza edizione del festival" },
      { src: "/images/gallery/2025-1.jpg", alt: "Passeggiata poetica dedicata a Pierluigi Cappello" },
      { src: "/images/gallery/2025-2.jpg", alt: "Esibizione della Corale Polifonica di Montereale Valcellina" },
      { src: "/images/gallery/2025-3.jpg", alt: "Gran finale con pastasciutta degli Alpini" },
    ],
  },
};

const allYears = ["2023", "2024", "2025"];

export function generateStaticParams() {
  return allYears.map((year) => ({ year }));
}

export default async function FotoPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const gallery = galleries[year];

  if (!gallery) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground">
          Edizione non trovata
        </h1>
        <p className="mt-4 text-muted-foreground">
          {"Non ci sono foto per l'anno selezionato."}
        </p>
        <Link
          href="/#edizioni"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna alle Edizioni
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <Link
            href="/#edizioni"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna al Sito
          </Link>
        </div>
      </div>

      {/* Gallery header */}
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <div className="flex items-center justify-center gap-2 text-accent">
          <Camera className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-[0.2em]">
            Galleria Fotografica
          </span>
        </div>
        <h1 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          {gallery.edition} - {gallery.year}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {gallery.description}
        </p>
      </div>

      {/* Photo grid */}
      <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-md ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "h-72 md:h-96" : "h-64 md:h-80"}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                  <p className="text-sm font-medium text-primary-foreground drop-shadow-lg">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other editions nav */}
      <div className="border-t border-border bg-white backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center lg:px-8">
          <h3 className="font-serif text-xl font-bold text-foreground">
            Altre edizioni
          </h3>
          <div className="mt-6 flex justify-center gap-4">
            {allYears
              .filter((y) => y !== year)
              .map((y) => (
                <Link
                  key={y}
                  href={`/foto/${y}`}
                  className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Edizione {y}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}