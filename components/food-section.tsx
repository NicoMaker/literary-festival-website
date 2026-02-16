import { UtensilsCrossed, Clock, Wine } from "lucide-react";
import Image from "next/image";

export default function FoodSection() {
  return (
    <section
      id="food"
      className="py-20 lg:py-28"
      style={{ background: "hsl(35 40% 90%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Zona Food
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            I sapori del territorio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {"Tra un incontro e l'altro, gustati le specialit\u00e0 locali preparate con passione dai volontari del territorio."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl lg:h-auto lg:min-h-[400px]">
            <Image
              src="/images/food-zone.jpg"
              alt="Area gastronomica del festival con specialit\u00e0 friulane"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-xl border border-border bg-background p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    Chiosco Enogastronomico
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A cura della Pro Loco Montereale
                  </p>
                </div>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {"Tutto il giorno, piatti tipici della tradizione friulana: frico, polenta, salumi e formaggi locali."}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-accent">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Aperto tutto il giorno</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground">
                    Pastasciutta degli Alpini
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Alpini di Montereale Valcellina
                  </p>
                </div>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {"La tradizionale pastasciutta degli Alpini chiude la giornata di Domenica in grande stile."}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-accent">
                <Clock className="h-4 w-4" />
                <span className="font-medium">
                  Domenica dalle ore 18:45
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Wine className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground">
                  Vini e bevande locali
                </h4>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {"Selezione di vini friulani, birre artigianali e bevande del territorio."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
