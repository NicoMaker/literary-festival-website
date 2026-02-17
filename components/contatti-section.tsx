"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, Facebook, Instagram, Send, Linkedin } from "lucide-react";

export default function ContattiSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contatti" className="scroll-mt-20 py-20 lg:py-28" style={{ background: "hsl(30 25% 96%)" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contatti
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Restiamo in contatto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {"Hai domande, suggerimenti o vuoi collaborare? Scrivici o seguici sui social per restare aggiornato."}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Scrivici un messaggio
            </h3>
            {submitted ? (
              <div className="mt-8 rounded-xl bg-chart-4/20 p-6 text-center">
                <p className="font-serif text-lg font-bold text-foreground">
                  Grazie per il tuo messaggio!
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ti risponderemo il prima possibile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nome"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Nome
                    </label>
                    <input
                      id="nome"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cognome"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Cognome
                    </label>
                    <input
                      id="cognome"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Numero di Telefono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+39 0000 000000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="messaggio"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Il tuo messaggio..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 self-start rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  Invia
                </button>
              </form>
            )}
          </div>

          {/* Contact info & social */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Seguici sui Social
              </h3>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/cortiledellibroedellacarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/cortiledellibroedellacarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@cortiledellibroedellacarta.it"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Informazioni di contatto
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefono</p>
                    <p className="font-medium text-foreground">+39 1234567890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">
                      info@cortiledellibroedellacarta.it
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
                <p>P.Iva: 01234567890</p>
              </div>
            </div>

            {/* Panoramic image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/montereale-panorama.jpg"
                alt="Panorama di Montereale Valcellina con le montagne"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
