export type EventCategory = "letterari" | "tutti" | "bambini";

export interface EventItem {
  slug: string;
  time: string;
  day: "sabato" | "domenica";
  title: string;
  description: string;
  author?: string;
  curator?: string;
  category: EventCategory;
  note?: string;
  location?: string;
  image?: string;
}

export const saturdayEvents: EventItem[] = [
  {
    slug: "come-un-sentiero-di-matita",
    time: "17:00",
    day: "sabato",
    title: "Come un sentiero di matita",
    description:
      "Passeggiata sentimentale tra i versi di Pierluigi Cappello. Suggestioni in versi e ricordi di uno straordinario semplificatore della complessità del vivere. Un percorso poetico che attraversa i luoghi e le parole di uno dei più grandi poeti friulani del Novecento, guidando i partecipanti in un viaggio interiore tra natura, memoria e linguaggio.",
    author: "Pierluigi Cappello",
    category: "letterari",
    location: "Cortile di Palazzo Toffoli",
    image: "/images/hero-courtyard.jpg",
  },
  {
    slug: "i-dandolo-a-grizzo",
    time: "20:45",
    day: "sabato",
    title: "I Dandolo a Grizzo",
    description:
      "Quale legame unisce la nobile famiglia Dandolo al piccolo paese di Grizzo? Una serata tra storia locale e scoperte sorprendenti, guidata da studiosi appassionati del territorio.",
    author: "Alessandro Fadelli e Luigi Alzetta",
    curator: 'Gruppo Ricerche "Chei del Talpa"',
    category: "tutti",
    location: "Cortile di Palazzo Toffoli",
    image: "/images/montereale-panorama.jpg",
  },
];

export const sundayEvents: EventItem[] = [
  {
    slug: "mercatino",
    time: "09:30 - 18:30",
    day: "domenica",
    title: "Mercatino",
    description:
      "Mercatino dedicato alla carta in tutte le sue forme! Libri, artigianato, origami, stampe d'arte, quaderni, carte pregiate e molto altro. Un'intera giornata per scoprire la bellezza della carta e del libro nel suggestivo Cortile di Palazzo Toffoli.",
    category: "tutti",
    location: "Cortile di Palazzo Toffoli",
    image: "/images/books-market.jpg",
  },
  {
    slug: "touriolon-cronache-vagabonde",
    time: "10:00",
    day: "domenica",
    title: "To(u)riolon, cronache vagabonde",
    description:
      "L'autore racconta 18+1 itinerari in bicicletta tra Veneto e Friuli. Un libro di viaggio che è anche un libro di incontri, di paesaggi e di storie di chi abita questi territori.",
    author: "Eros Viel",
    curator: "Kellermann Editore",
    category: "letterari",
    location: "Sala interna",
    image: "/images/montereale-panorama.jpg",
  },
  {
    slug: "petali-e-piume",
    time: "10:00",
    day: "domenica",
    title: "Petali e Piume",
    description:
      "Laboratorio per bambini dai 6 anni in su. Con scarti e pezzetti di carta colorata realizzeremo fantastiche forme, delicate e leggere come petali e piume.",
    author: "Ilaria Bomben",
    category: "bambini",
    note: "Iscrizione richiesta",
    location: "Spazio laboratori",
    image: "/images/kids-workshop.jpg",
  },
  {
    slug: "ma-io-sorrido-ancora",
    time: "10:30",
    day: "domenica",
    title: "...ma io sorrido ancora",
    description:
      "Celebriamo figure femminili indimenticabili, raccontate attraverso gli occhi di chi ne ha ammirato la forza. Un incontro dedicato alle donne che hanno cambiato la storia con la loro determinazione e coraggio.",
    curator: "Vita Activa Editoria Trieste",
    category: "letterari",
    location: "Sala interna",
    image: "/images/hero-courtyard.jpg",
  },
  {
    slug: "la-terza-clessidra",
    time: "11:30",
    day: "domenica",
    title: "La terza clessidra",
    description:
      "Ambientato tra Aquileia e Istanbul, una trama avvincente dove antico e moderno si intrecciano. Un romanzo che attraversa i secoli e i continenti, intrecciando archeologia, mistero e avventura.",
    author: "Giuliano Pellizzari, Andrea Doncovio",
    curator: "Gruppo Editoriale Santelli",
    category: "letterari",
    location: "Sala interna",
    image: "/images/hero-courtyard.jpg",
  },
  {
    slug: "avventura-libresca-giraffa",
    time: "11:30",
    day: "domenica",
    title: "Avventura libresca con La Giraffa con gli occhiali",
    description:
      "Un colorato viaggio tra musica e storie, ritmi coinvolgenti e facili cori da cantare insieme. Laboratorio per bambini dai 4 agli 8 anni.",
    category: "bambini",
    note: "Iscrizione richiesta",
    location: "Spazio laboratori",
    image: "/images/kids-workshop.jpg",
  },
  {
    slug: "origami-per-tutte-le-eta",
    time: "14:30",
    day: "domenica",
    title: "Origami per tutte le eta",
    description:
      "Laboratorio gratuito di origami aperto a tutte le età. Impareremo le tecniche base e avanzate dell'arte della piegatura della carta, un'antica tradizione giapponese.",
    author: "Maria Elena Fornasier",
    category: "tutti",
    note: "Iscrizione richiesta",
    location: "Spazio laboratori",
    image: "/images/kids-workshop.jpg",
  },
  {
    slug: "scrivere-per-il-futuro",
    time: "15:00",
    day: "domenica",
    title: "Scrivere per il futuro",
    description:
      "Dialogo urgente tra Autori e Cittadini per una coesistenza più consapevole con il selvatico. Un incontro che esplora il ruolo della scrittura nella sensibilizzazione ambientale.",
    author: "Luigi Casanova, Marco Niro, Sara Segantin e Gloria Solini",
    curator: "Associazione Mountain Wilderness Italia",
    category: "tutti",
    location: "Sala interna",
    image: "/images/montereale-panorama.jpg",
  },
  {
    slug: "donne-frontiere-scritture",
    time: "15:00",
    day: "domenica",
    title: "Donne Frontiere Scritture",
    description:
      "Una raccolta regionale di racconti e poesie che celebra il confronto culturale tra autrici italiane, slovene e croate.",
    curator: "Vita Activa Editoria Trieste",
    category: "letterari",
    location: "Sala interna",
    image: "/images/hero-courtyard.jpg",
  },
  {
    slug: "un-trio-mai-visto",
    time: "15:00",
    day: "domenica",
    title: "Un trio mai visto",
    description:
      "Lettura animata in italiano e friulano e un'attività creativa che stimola fantasia e manualità. Laboratorio per bambini dai 4 agli 8 anni.",
    author: "Stefania Del Rizzo",
    curator: "Orto della Cultura",
    category: "bambini",
    note: "Iscrizione richiesta",
    location: "Spazio laboratori",
    image: "/images/kids-workshop.jpg",
  },
  {
    slug: "le-dieci-grandi-parole",
    time: "16:00",
    day: "domenica",
    title: "Le dieci grandi parole",
    description:
      "Presentazione dell'ultimo libro postumo di Pierluigi Di Piazza da parte di suo fratello Vito. Un incontro commovente dedicato alle parole che hanno guidato una vita al servizio degli ultimi.",
    author: "Vito Di Piazza",
    curator: "Alba Edizioni",
    category: "letterari",
    location: "Sala interna",
    image: "/images/espositore.jpg",
  },
  {
    slug: "la-leggenda-dei-can-cantanti",
    time: "16:00",
    day: "domenica",
    title: "La leggenda dei Can-Cantanti",
    description:
      "Lettura esperienziale per bambini che insegna il rispetto per gli animali. Attraverso il disegno e la narrazione, i bambini scopriranno il valore dell'amicizia tra uomini e animali.",
    author: "Susanna Fontana e Stefania Delponte",
    curator: "Gaspari Editore",
    category: "bambini",
    note: "Iscrizione richiesta",
    location: "Spazio laboratori",
    image: "/images/kids-workshop.jpg",
  },
  {
    slug: "la-poesia-incontra-la-musica",
    time: "17:30",
    day: "domenica",
    title: "La poesia incontra la musica d'autore",
    description:
      "Un format inedito: composizioni corali originali del maestro Maurizio Baldin con poeti friulani. La Corale Polifonica di Montereale porta in scena un connubio straordinario tra parola e musica.",
    author: "Corale Polifonica di Montereale Valcellina",
    curator: "dirige Maurizio Baldin",
    category: "tutti",
    location: "Cortile di Palazzo Toffoli",
    image: "/images/hero-courtyard.jpg",
  },
  {
    slug: "gran-finale-pastasciutta",
    time: "18:45",
    day: "domenica",
    title: "Gran finale con pastasciutta",
    description:
      "Gran finale con pastasciutta degli Alpini di Montereale Valcellina. Una tradizione che chiude la giornata in grande stile, attorno alla tavola, in compagnia.",
    category: "tutti",
    location: "Cortile di Palazzo Toffoli",
    image: "/images/food-zone.jpg",
  },
];

export const allEvents = [...saturdayEvents, ...sundayEvents];

export function getEventBySlug(slug: string): EventItem | undefined {
  return allEvents.find((e) => e.slug === slug);
}