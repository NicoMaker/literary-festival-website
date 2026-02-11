import { MapPin, Car, Train, Navigation, UtensilsCrossed, Clock, Wine } from "lucide-react";

export default function DoveSection() {
  return (
    <section id="dove-gusto" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* DOVE */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Dove & Cosa
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Come raggiungerci e cosa gustare
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {"Il festival si svolge nel suggestivo Cortile di Palazzo Toffoli a Montereale Valcellina, in provincia di Pordenone."}
          </p>
        </div>

        {/* Location */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              title="Mappa Palazzo Toffoli, Montereale Valcellina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.5!2d12.6333!3d46.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a3e7c8a2a0001%3A0x1!2sMontereale+Valcellina!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">Dove ci troviamo</h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Palazzo Toffoli<br />
                Via Verdi, Montereale Valcellina (PN)<br />
                Friuli Venezia Giulia, Italia
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Car className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">In auto</h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {"Dall'autostrada A28 Portogruaro-Pordenone, uscita Montereale. Seguire le indicazioni per Montereale Valcellina."}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Train className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">Mezzi pubblici</h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {"Stazione ferroviaria di Pordenone o Aviano. Servizio bus locale in direzione Montereale Valcellina."}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Navigation className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">Dove parcheggiare</h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {"Parcheggio gratuito in Via Verdi e nelle aree limitrofe al centro storico. Segnaletica dedicata al festival."}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto my-16 h-px w-32 bg-border" />

        {/* ZONA FOOD */}
        <div id="food">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Zona Food
            </p>
            <h3 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              I sapori del territorio
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
              {"Tra un incontro e l'altro, gustati le specialit\u00e0 locali preparate con passione dai volontari del territorio."}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/food-zone.jpg"
                alt="Area gastronomica del festival con specialit\u00e0 friulane"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <UtensilsCrossed className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground">Chiosco Enogastronomico</h4>
                    <p className="text-sm text-muted-foreground">A cura della Pro Loco Montereale</p>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {"Tutto il giorno, piatti tipici della tradizione friulana: frico, polenta, salumi e formaggi locali."}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-accent">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Aperto tutto il giorno</span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <UtensilsCrossed className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground">Pastasciutta degli Alpini</h4>
                    <p className="text-sm text-muted-foreground">Alpini di Montereale Valcellina</p>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {"La tradizionale pastasciutta degli Alpini chiude la giornata di Domenica in grande stile."}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-accent">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Domenica dalle ore 18:45</span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Wine className="h-5 w-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-foreground">Vini e bevande locali</h4>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {"Selezione di vini friulani, birre artigianali e bevande del territorio."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
