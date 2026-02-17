import { Store, FileText, ExternalLink, BookMarked } from "lucide-react";
import Image from "next/image";

export default function CandidatureSection() {
  return (
    <section
      id="vuoi-esporre"
      className="scroll-mt-20 py-20 lg:py-28"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Vuoi Esporre?
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Partecipa al festival
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {"Sei una casa editrice, un libraio, un artigiano? Vuoi proporre un evento? Candidati per la prossima edizione."}
          </p>
        </div>

        {/* Espositore image */}
        <div className="relative mx-auto mt-10 h-64 max-w-3xl overflow-hidden rounded-2xl md:h-80">
          <Image
            src="/images/espositore.jpg"
            alt="Stand espositivo al festival con libri e carta artigianale"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Espositore */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-md lg:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Store className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
              Candidati come Espositore
            </h3>
            <p className="mt-2 text-sm font-medium text-accent">
              Sei una casa editrice?
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Porta i tuoi prodotti e le tue creazioni nel nostro mercatino letterario. Uno spazio nel cortile storico di Palazzo Toffoli per far conoscere la tua realtà editoriale."}
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                Spazio espositivo nel cortile storico
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {"Visibilità sui canali social del festival"}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                Partecipazione alla rete culturale del territorio
              </li>
            </ul>
            <a
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Compila il modulo Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Proposta */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-md lg:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
              Candida la tua Proposta
            </h3>
            <p className="mt-2 text-sm font-medium text-primary">
              Presentazioni, laboratori, idee
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Hai un libro da presentare, un laboratorio da proporre o un'idea creativa? Inviaci la tua candidatura per partecipare al programma."}
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Presentazioni di libri e incontri con autori
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Laboratori creativi per adulti e bambini
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Performance artistiche e musicali
              </li>
            </ul>
            <a
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Invia la tua proposta
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Info box for publishers */}
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-white p-6 text-center shadow-md">
          <div className="mb-3 flex items-center justify-center gap-2">
            <BookMarked className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-bold text-foreground">
              Sei una casa editrice?
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {"Il Cortile del Libro e della Carta accoglie case editrici indipendenti, piccoli editori e realtà artigianali legate al mondo del libro e della carta. Contattaci per scoprire le modalità di partecipazione e le agevolazioni dedicate."}
          </p>
          <a
            href="mailto:info@cortiledellibroedellacarta.it"
            className="mt-4 inline-block text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            info@cortiledellibroedellacarta.it
          </a>
        </div>
      </div>
    </section>
  );
}