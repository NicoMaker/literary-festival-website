import { UtensilsCrossed, Clock, Wine } from "lucide-react";

export default function FoodSection() {
  return (
    <section id="food" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Zona Food
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            I sapori del territorio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {"Tra un incontro e l'altro, gustati le specialità locali preparate con passione dai volontari del territorio."}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/food-zone.jpg"
              alt="Area gastronomica del festival con specialità friulane"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Food options */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Chiosco Enogastronomico
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A cura della Pro Loco Montereale
                  </p>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {"Tutto il giorno, piatti tipici della tradizione friulana: frico, polenta, salumi e formaggi locali. Un viaggio nel gusto del territorio montano."}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-accent">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Aperto tutto il giorno</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Gran Finale - Pastasciutta degli Alpini
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Alpini di Montereale Valcellina
                  </p>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {"La tradizionale pastasciutta degli Alpini chiude la giornata di Domenica in grande stile: convivialità, buon cibo e spirito di comunità."}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-accent">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Domenica dalle ore 18:45</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Wine className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Vini e bevande locali
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {"Selezione di vini friulani, birre artigianali e bevande del territorio per accompagnare la tua visita al festival."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
