export type Lang = "hu" | "en";

export const t = {
  navbar: {
    problems:    { hu: "Problémák",         en: "Problems" },
    approach:    { hu: "Hogyan dolgozunk",   en: "Approach" },
    services:    { hu: "Szolgáltatások",    en: "Services" },
    whyMeshNest: { hu: "Miért MeshNest",    en: "Why MeshNest" },
    contact:     { hu: "Kapcsolat",         en: "Contact" },
    cta:         { hu: "Hálózati ellenőrzés", en: "Book a Health Check" },
    openMenu:    { hu: "Menü megnyitása",   en: "Open menu" },
    closeMenu:   { hu: "Menü bezárása",     en: "Close menu" },
  },

  hero: {
    titleLine1:  { hu: "Tervezve.",         en: "Designed." },
    titleLine2:  { hu: "Védve.",            en: "Secured." },
    titleLine3:  { hu: "Kezelve.",          en: "Managed." },
    subtitle:    {
      hu: "A rosszul tervezett hálózat a felelős a lassú Wi-Fi-ért, a lefedettségi hiányokért és a véletlenszerű kiesésekért. A MeshNest segít megérteni, mi a gond, és hogyan lehet megoldani.",
      en: "A badly designed network is usually to blame for slow Wi-Fi, dead zones, and random dropouts. MeshNest helps you understand what's wrong and how to fix it.",
    },
    ctaPrimary:   { hu: "Wi-Fi ellenőrzés foglalása", en: "Book a Wi-Fi Health Check" },
    ctaSecondary: { hu: "Szolgáltatások",              en: "View Services" },
    trustBadge:   { hu: "Általában 24 órán belül válaszolunk", en: "We usually reply within" },
    trustBold:    { hu: "",                            en: " 24 hours" },
    chip1:        { hu: "Jobb lefedettség",            en: "Better coverage" },
    chip2:        { hu: "Stabilabb sebesség",          en: "More stable speeds" },
    chip3:        { hu: "Alapvető biztonság",          en: "Security basics" },
    chip4:        { hu: "Egyértelmű következő lépések", en: "Clear next steps" },
    proofArea:    { hu: "Törökbálint és környéke",    en: "Törökbálint & surrounding area" },
    proofWho:     { hu: "Otthonok + egyéni vállalkozók", en: "Homes + sole proprietors" },
    proofPlan:    { hu: "Egyértelmű terv, kitalálgatás nélkül", en: "Clear plan, no guesswork" },
  },

  problems: {
    kicker:    { hu: "Gyakori problémák",   en: "Common problems" },
    title:     { hu: "A legtöbb Wi-Fi probléma nem internetprobléma.", en: "Most Wi-Fi issues aren't internet problems." },
    sub:       {
      hu: "Általában az elrendezés, az elhelyezés, a zavarok vagy az elavult eszközök okozzák. Ha az igazi szűk keresztmetszet egyértelmű, a megoldás sokkal egyszerűbbé válik.",
      en: "They usually come down to layout, placement, interference, or outdated equipment. Once the real bottleneck is clear, the fix becomes much simpler.",
    },
    cards: [
      {
        title: { hu: "Lefedettségi hiányok",    en: "Dead zones" },
        body:  { hu: "Szobák, ahol a Wi-Fi teljesen leesik vagy megbízhatatlanná válik, amint mozgunk.", en: "Rooms where Wi-Fi drops off completely or becomes unreliable the moment you move." },
      },
      {
        title: { hu: "Véletlenszerű kiesések",  en: "Random dropouts" },
        body:  { hu: "A hívások befagynak, a streamek pufferelnek, és az eszközök a legrosszabb pillanatban szakadnak le.", en: "Calls freeze, streams buffer, and devices disconnect at the worst possible time." },
      },
      {
        title: { hu: "Instabil sebesség",       en: "Unstable speeds" },
        body:  { hu: "Minden rendben látszik papíron, amíg egyszerre több eszköz nem csatlakozik.", en: "Everything looks fine on paper until several devices are online at once." },
      },
      {
        title: { hu: "Kaotikus hálózati beállítások", en: "Messy network setups" },
        body:  { hu: "A régi routerek, erősítők és össze nem illő eszközök gyakran több problémát okoznak, mint amennyit megoldanak.", en: "Old routers, extenders, and mismatched gear often create more problems than they solve." },
      },
    ],
    effectsTitle: { hu: "Hogyan néz ez ki a mindennapokban", en: "What this often looks like day to day" },
    effects: [
      { hu: "Megszakadó videóhívások",              en: "Video calls that cut out" },
      { hu: "Pufferelés csúcsidőben",               en: "Buffering at peak hours" },
      { hu: "Offline menő okosotthon-eszközök",     en: "Smart home devices going offline" },
      { hu: "Wi-Fi, ami csak a router közelében működik rendesen", en: "Wi-Fi that only works properly near the router" },
    ],
    bottomStrong: { hu: "Nem tudja, mi okozza az Ön problémáját?", en: "Not sure what's causing yours?" },
    bottomMuted:  { hu: " A Wi-Fi ellenőrzés azonosítja a problémát és egyértelmű következő lépést ad.", en: " A Wi-Fi Health Check helps identify the issue and gives you a clear next step." },
  },

  services: {
    kicker:  { hu: "Szolgáltatások",  en: "Services" },
    title:   { hu: "A probléma méretéhez igazodó támogatás.", en: "Support that matches the size of the problem." },
    sub:     { hu: "Kezdje egy célzott ellenőrzéssel, vagy tervezzen teljes frissítést a jobb lefedettségért, stabilitásért és megbízhatóságért.", en: "Start with a focused health check or plan a full upgrade for better coverage, stability, and day-to-day reliability." },
    cardBtn: { hu: "Érdeklődjön",     en: "Ask About This" },
    cards: [
      {
        title:  { hu: "Wi-Fi Ellenőrzés",         en: "Wi-Fi Health Check" },
        price:  { hu: "39 000 Ft-tól",            en: "From 39,000 HUF" },
        bullets: [
          { hu: "A lefedettségi hiányok és kiesések okának azonosítása", en: "Pinpoint dead zones and the cause of dropouts" },
          { hu: "Praktikus megoldások: elhelyezési és beállítási javaslatok", en: "Practical fixes: placement + settings recommendations" },
          { hu: "Egyszerű biztonsági ellenőrzés (vendég Wi-Fi, router alapok)", en: "Simple security sanity check (guest Wi-Fi, router basics)" },
        ],
      },
      {
        title:  { hu: "Otthoni Wi-Fi Fejlesztési Terv", en: "Home Wi-Fi Upgrade Plan" },
        price:  { hu: "120 000 Ft-tól",               en: "From 120,000 HUF" },
        bullets: [
          { hu: "Teljes lefedettségi terv az otthonához (szobánként)", en: "Full coverage plan for your space (room-by-room)" },
          { hu: "Hardverjavaslatok (router / mesh) + elhelyezési térkép", en: "Hardware recommendations (router / mesh) + placement map" },
          { hu: "Tiszta beállítás: biztonságosabb okosotthon alapok + hálózati szétválasztás (szükség esetén)", en: "Clean setup: safer smart-home basics + network separation (if needed)" },
        ],
      },
    ],
  },

  approach: {
    kicker: { hu: "Hogyan működik",  en: "How it works" },
    title:  { hu: "Egyértelmű folyamat a diagnózistól a jobb hálózatig.", en: "A clear process from diagnosis to a better network." },
    sub:    { hu: "Nincs kitalálgatás, nincs zsargon, és nincsenek felesleges frissítések. Csak egy praktikus út a megbízhatóbb Wi-Fi-hez.", en: "No guesswork, no jargon, and no unnecessary upgrades. Just a practical path to more reliable Wi-Fi." },
    steps: [
      {
        number: "01",
        title:  { hu: "Felmérés",  en: "Assess" },
        body:   { hu: "A beállítás, az alaprajz és a valódi kiesési helyek vizsgálata – nem csak azt, amit a router mond.", en: "A look at your setup, your floor plan, and where things actually drop off — not just what the router says." },
      },
      {
        number: "02",
        title:  { hu: "Javaslat",  en: "Recommend" },
        body:   { hu: "Közérthető tanács arról, mi okozza a problémát és melyik változtatás hoz a legnagyobb javulást.", en: "Plain-English advice on what's causing it and which change will make the biggest difference." },
      },
      {
        number: "03",
        title:  { hu: "Fejlesztés", en: "Improve" },
        body:   { hu: "Ha segítségre van szüksége a megvalósításhoz, a MeshNest elvégzi a beállítást, hogy ne kelljen egyedül kitalálnia.", en: "If you want help implementing it, MeshNest can handle the setup so you don't have to figure it out alone." },
      },
    ],
    noteStrong: { hu: "Az értékelés után nincs kötelezettség.", en: "No obligation after the assessment." },
    noteMuted:  { hu: " A javaslatokkal úgy él, ahogy szeretne.", en: " The recommendations are yours to act on however you like." },
  },

  whyMeshNest: {
    kicker: { hu: "Miért MeshNest",  en: "Why MeshNest" },
    title:  { hu: "Praktikus segítség, egyértelmű tanácsok és felesleges bonyodalmak nélkül.", en: "Practical help, clear advice, and no unnecessary complexity." },
    sub:    { hu: "Wi-Fi tanácsadás, ami illeszkedik az Ön valódi életteréhez – nem egy általános specifikáció vagy rábeszélés.", en: "Wi-Fi advice that fits where you actually live — not a generic spec sheet or an upsell." },
    points: [
      {
        title: { hu: "Egyértelmű javaslatok",     en: "Clear recommendations" },
        body:  { hu: "Tudni fogja, mi a probléma, érdemes-e javítani, és mit kell először megtenni.", en: "You'll know what the problem is, whether it's worth fixing, and what to do first." },
      },
      {
        title: { hu: "Nincs felesleges frissítés", en: "No unnecessary upgrades" },
        body:  { hu: "Ha a jelenlegi beállítás javítható anélkül, hogy mindent cserélnénk, az kerül előre.", en: "If your current setup can be improved without replacing everything, that comes first." },
      },
      {
        title: { hu: "Valódi otthonokra tervezve", en: "Designed for real homes" },
        body:  { hu: "Az Ön elrendezésén és a tér valódi használatán alapuló tanácsok – nem egy általános ellenőrző lista.", en: "Advice based on your layout and how you actually use the space — not a generic checklist." },
      },
      {
        title: { hu: "Helyi és személyes",         en: "Local and personal" },
        body:  { hu: "Egy kapcsolattartó. Valódi magyarázatok. Nincs call center.", en: "One point of contact. Real explanations. No call centre." },
      },
    ],
  },

  carePlan: {
    kicker:   { hu: "Folyamatos támogatás",  en: "Ongoing support" },
    title:    { hu: "Az Ön hálózata, karbantartva.", en: "Your network, maintained." },
    body:     { hu: "A beállítást követően a MeshNest segít a hálózat stabilitásának fenntartásában rendszeres ellenőrzésekkel, gyors állapotvizsgálatokkal és praktikus segítséggel, ha valami problémás lesz.", en: "After setup, MeshNest helps keep your network stable with regular check-ins, quick health reviews, and practical support when something starts acting up." },
    price:    { hu: "12 000 Ft-tól / hó",   en: "From 12,000 HUF / month" },
    cta:      { hu: "Karbantartás igénylése", en: "Request Care" },
  },

  contact: {
    kicker:         { hu: "Kapcsolat",              en: "Get in touch" },
    title:          { hu: "Wi-Fi audit foglalása",  en: "Book a Wi-Fi audit" },
    sub:            { hu: "Írja le az ingatlanát és a problémáját. Egyértelmű tervvel és hozzávetőleges árajánlattal fogunk visszajelezni.", en: "Describe your space and what's been giving you trouble. You'll hear back with a clear plan and a rough price." },
    point1:         { hu: "Általában 24 órán belül válaszolunk", en: "Usually reply within 24 hours" },
    point2:         { hu: "Kötelezettség nélküli konzultáció",   en: "No obligation consultation" },
    point3:         { hu: "Törökbálint és környékén",            en: "Serving Törökbálint & nearby areas" },
    fieldName:      { hu: "Név",              en: "Name" },
    fieldEmail:     { hu: "Email",            en: "Email" },
    fieldProperty:  { hu: "Ingatlan típusa",  en: "Property type" },
    optApartment:   { hu: "Lakás",            en: "Apartment" },
    optHouse:       { hu: "Ház",              en: "House" },
    optBusiness:    { hu: "Kisvállalkozás",   en: "Small business" },
    fieldArea:      { hu: "Terület (m²)",     en: "Area (m²)" },
    areaPlaceholder:{ hu: "pl. 80",           en: "e.g., 80" },
    fieldIssues:    { hu: "Milyen problémákkal szembesül?", en: "What issues are you facing?" },
    fieldTimeline:  { hu: "Határidő",         en: "Timeline" },
    optAsap:        { hu: "Minél hamarabb",   en: "ASAP" },
    opt1to2weeks:   { hu: "1–2 héten belül",  en: "1–2 weeks" },
    optMonth:       { hu: "Egy hónapon belül", en: "Within a month" },
    optResearching: { hu: "Csak tájékozódok", en: "Just researching" },
    sending:        { hu: "Küldés...",         en: "Sending..." },
    submit:         { hu: "Kérelem küldése",  en: "Send request" },
    successTitle:   { hu: "✅ Kérelem elküldve", en: "✅ Request sent" },
    successMsg:     { hu: "Köszönöm! Hamarosan visszajelzek.", en: "Thanks! I'll get back to you soon." },
    successApiMsg:  { hu: "Kérelem megérkezett. Hamarosan visszajelzek.", en: "Request received. I'll get back to you soon." },
    successMeta:    { hu: "Tipikus válaszidő: 24 órán belül. Ha sürgős, jelezze a következő üzenetében, és előnyt biztosítok.", en: "Typical response time: within 24 hours. If it's urgent, mention it in your next message and I'll prioritize it." },
    sendAnother:    { hu: "Újabb kérelem küldése", en: "Send another request" },
    errGeneric:     { hu: "Valami hiba történt.",  en: "Something went wrong." },
    errNetwork:     { hu: "Hálózati hiba. Kérjük, próbálja újra.", en: "Network error. Please try again." },
  },

  footer: {
    tagline:      { hu: "Praktikus hálózattervezés és -beállítás otthonok és kisvállalkozások számára.", en: "Practical network design and setup for homes and small businesses." },
    serviceArea:  { hu: "Szolgáltatási terület", en: "Service area" },
    areaValue:    { hu: "Törökbálint és környéke", en: "Törökbálint & surrounding area" },
    responseTime: { hu: "Válaszidő",             en: "Response time" },
    responseVal:  { hu: "Általában 24 órán belül", en: "Usually within 24 hours" },
    copy:         { hu: "Minden jog fenntartva.", en: "All rights reserved." },
  },
} as const;
