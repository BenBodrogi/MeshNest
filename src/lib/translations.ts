export type Lang = "hu" | "en";

export const t = {
  navbar: {
    problems:    { hu: "Problémák",         en: "Problems" },
    approach:    { hu: "Hogyan dolgozunk",   en: "Approach" },
    services:    { hu: "Szolgáltatások",    en: "Services" },
    pricing:     { hu: "Árak",              en: "Pricing" },
    whyMeshNest: { hu: "Miért a MeshNest",    en: "Why MeshNest" },
    contact:     { hu: "Kapcsolat",         en: "Contact" },
    cta:         { hu: "Hálózat ellenőrzése", en: "Book a Health Check" },
    openMenu:    { hu: "Menü megnyitása",   en: "Open menu" },
    closeMenu:   { hu: "Menü bezárása",     en: "Close menu" },
  },

  hero: {
    titleLine1:  { hu: "Tervezés.",         en: "Designed." },
    titleLine2:  { hu: "Védelem.",            en: "Secured." },
    titleLine3:  { hu: "Melletted.",        en: "Managed." },
    subtitle:    {
      hu: "A rosszul tervezett hálózat a felelős a lassú Wi-Fi-ért, a lefedettségi hiányokért és a véletlenszerű kiesésekért. A MeshNest segít megérteni, hogy mi a gond és hogyan lehet megoldani.",
      en: "A badly designed network is usually to blame for slow Wi-Fi, dead zones, and random dropouts. MeshNest helps you understand what's wrong and how to fix it.",
    },
    ctaPrimary:   { hu: "Wi-Fi ellenőrzés foglalása",  en: "Book a Wi-Fi Health Check" },
    ctaSecondary: { hu: "Szolgáltatások",              en: "View Services" },
    trustBadge:   { hu: "Általában 24 órán belül válaszolunk", en: "We usually reply within" },
    trustBold:    { hu: "",                            en: " 24 hours" },
    chip1:        { hu: "Jobb lefedettség",            en: "Better coverage" },
    chip2:        { hu: "Stabilabb sebesség",          en: "More stable speeds" },
    chip3:        { hu: "Alapvető biztonság",          en: "Security basics" },
    chip4:        { hu: "Egyértelmű konklúzió",        en: "Clear next steps" },
    proofArea:    { hu: "Törökbálint és környéke",     en: "Törökbálint & surrounding area" },
    proofWho:     { hu: "Lakossági ügyfelek és egyéni vállalkozók", en: "Homes and sole proprietors" },
    proofPlan:    { hu: "Egyszerűen megtervezett kivitelezés",      en: "Clear, straightforward plan" },
  },

  problems: {
    kicker:    { hu: "Gyakori problémák",   en: "Common problems" },
    title:     { hu: "A legtöbb Wi-Fi-probléma az otthoni hálózati beállításokra vezethető vissza.", en: "Most Wi-Fi issues trace back to your home setup." },
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
      { hu: "Offline, vagy akadozó okosotthon-eszközök",     en: "Smart home devices going offline" },
      { hu: "Wi-Fi, ami csak a router közelében működik rendesen", en: "Wi-Fi that only works properly near the router" },
    ],
    bottomStrong: { hu: "Kíváncsi vagy, mi okozza a te esetedben?", en: "Curious what's causing yours?" },
    bottomMuted:  { hu: " A Wi-Fi ellenőrzés azonosítja a problémát és egyértelmű következő lépést ad.", en: " A Wi-Fi Health Check helps identify the issue and gives you a clear next step." },
  },

  services: {
    kicker:  { hu: "Szolgáltatások",  en: "Services" },
    title:   { hu: "A probléma méretéhez igazodó támogatás.", en: "Support that matches the size of the problem." },
    sub:     { hu: "Kezdd egy célzott ellenőrzéssel, vagy tervezz teljes frissítést a jobb lefedettségért, stabilitásért és megbízhatóságért.", en: "Start with a focused health check or plan a full upgrade for better coverage, stability, and day-to-day reliability." },
    cardBtn: { hu: "Érdeklődj",     en: "Ask About This" },
    featuredBadge: { hu: "Ajánlott", en: "Recommended" },
    cards: [
      {
        title:  { hu: "Wi-Fi Ellenőrzés",         en: "Wi-Fi Health Check" },
        price:  { hu: "39 000 Ft-tól",            en: "From 39,000 HUF" },
        bullets: [
          { hu: "A lefedettségi hiányok és kiesések okának azonosítása", en: "Pinpoint dead zones and the cause of dropouts" },
          { hu: "Konkrét megoldások az elhelyezésre és a beállításokra", en: "Hands-on fixes for placement and settings" },
          { hu: "Egyszerű biztonsági ellenőrzés (vendég Wi-Fi, router alapok)", en: "Simple security sanity check (guest Wi-Fi, router basics)" },
        ],
      },
      {
        title:  { hu: "Otthoni Wi-Fi Fejlesztési Terv", en: "Home Wi-Fi Upgrade Plan" },
        price:  { hu: "120 000 Ft-tól",               en: "From 120,000 HUF" },
        bullets: [
          { hu: "Teljes lefedettségi terv az otthonodhoz (szobánként)", en: "Full coverage plan for your space (room-by-room)" },
          { hu: "Hardverajánlások (router vagy mesh) és elhelyezési térkép", en: "Hardware recommendations (router or mesh) and a placement map" },
          { hu: "Egy áttekinthető rendszer, biztonságosabb okosotthon-alapelemekkel és – szükség esetén – hálózati elválasztással", en: "A clean setup with safer smart-home basics and network separation, if needed" },
        ],
      },
    ],
  },

  approach: {
    kicker: { hu: "Hogyan működik",  en: "How it works" },
    title:  { hu: "Egyértelmű folyamat a diagnózistól a jobb hálózatig.", en: "A clear process from diagnosis to a better network." },
    sub:    { hu: "Egyértelmű válaszok, érthetően leírva és olyan fejlesztések, amelyek valóban megérik a fáradságot. Egyszerű út a megbízhatóbb Wi-Fi felé.", en: "Clear answers, plain language, and upgrades that are actually worth making. Just a straightforward path to more reliable Wi-Fi." },
    steps: [
      {
        number: "01",
        title:  { hu: "Felmérés",  en: "Assess" },
        body:   { hu: "Egy pillantás a berendezésedre, az alaprajzodra, és arra, hogy a mindennapi használat során hol vannak a hiányosságok.", en: "A look at your setup, your floor plan, and where things actually drop off in everyday use." },
      },
      {
        number: "02",
        title:  { hu: "Javaslat",  en: "Recommend" },
        body:   { hu: "Közérthető tanács arról, mi okozza a problémát és melyik változtatás hoz a legnagyobb javulást.", en: "Plain-English advice on what's causing it and which change will make the biggest difference." },
      },
      {
        number: "03",
        title:  { hu: "Fejlesztés", en: "Improve" },
        body:   { hu: "Ha segítségre van szükséged a megvalósításhoz, a MeshNest az elejétől a végéig elvégzi helyetted a beállítást.", en: "If you want help implementing it, MeshNest can handle the setup for you, start to finish." },
      },
    ],
    noteStrong: { hu: "Teljes rugalmasság az értékelés után.", en: "Complete flexibility after the assessment." },
    noteMuted:  { hu: " A javaslatokat úgy használod, ahogy szeretnéd.", en: " The recommendations are yours to act on however you like." },
  },

  whyMeshNest: {
    kicker: { hu: "Miért MeshNest",  en: "Why MeshNest" },
    title:  { hu: "Gyakorlatias segítség, egyértelmű tanácsok és felüdítő egyszerűség.", en: "Down-to-earth help, clear advice, and refreshing simplicity." },
    sub:    { hu: "Wi-Fi-tanácsok, amelyek figyelembe veszik, hol laksz valójában, és hogyan használod a hálózatot.", en: "Wi-Fi advice that fits where you actually live and how you actually use it." },
    points: [
      {
        title: { hu: "Egyértelmű javaslatok",     en: "Clear recommendations" },
        body:  { hu: "Tudni fogod, mi a probléma, érdemes-e javítani, és mit kell először megtenni.", en: "You'll know what the problem is, whether it's worth fixing, and what to do first." },
      },
      {
        title: { hu: "Érdemi fejlesztések", en: "Upgrades worth making" },
        body:  { hu: "Elsősorban a jelenlegi rendszer apró, célzott fejlesztéseit hajtjuk végre, amennyiben azok elegendőek a feladat elvégzéséhez.", en: "Small, targeted improvements to your current setup come first, whenever they'll do the job." },
      },
      {
        title: { hu: "Valódi otthonokra tervezve", en: "Designed for real homes" },
        body:  { hu: "Tanácsok, amelyek a lakáselrendezéseden és a tér mindennapi, tényleges használatán alapulnak.", en: "Advice based on your layout and how you actually use the space, day to day." },
      },
      {
        title: { hu: "Helyi és személyes",         en: "Local and personal" },
        body:  { hu: "Egyetlen kapcsolattartó. Valódi magyarázatok, minden alkalommal.", en: "One point of contact. Real explanations, every time." },
      },
    ],
  },

  carePlan: {
    kicker:       { hu: "Folyamatos támogatás",  en: "Ongoing support" },
    title:        { hu: "A hálózatod, karbantartva.", en: "Your network, maintained." },
    body:         { hu: "A beállítást követően a MeshNest segít a hálózat stabilitásának fenntartásában rendszeres ellenőrzésekkel, gyors állapotvizsgálatokkal és praktikus segítséggel, ha valami probléma adódik.", en: "After setup, MeshNest helps keep your network stable with regular check-ins, quick health reviews, and practical support when something starts acting up." },
    viewAllLabel: { hu: "Árlista", en: "Price List" },
    cta:          { hu: "Karbantartás igénylése", en: "Request Care" },
  },

  pricing: {
    hero: {
      kicker: { hu: "Árak", en: "Pricing" },
      title:  { hu: "[HU pending] Clear pricing for two kinds of work.", en: "Clear pricing for two kinds of work." },
      sub:    { hu: "[HU pending] Ongoing maintenance, billed by the hour at a rate you pick by tier — and one-time installs, quoted after a quick conversation. Both work the same way whether it's your home or a small office.", en: "Ongoing maintenance, billed by the hour at a rate you pick by tier — and one-time installs, quoted after a quick conversation. Both work the same way whether it's your home or a small office." },
    },

    maintenance: {
      kicker:               { hu: "[HU pending] Maintenance", en: "Maintenance" },
      title:                { hu: "[HU pending] Pick a tier, then choose your hours.", en: "Pick a tier, then choose your hours." },
      sub:                  { hu: "[HU pending] Basic, Standard, and Premium all cover the same ground — Wi-Fi and network, printers, backups, and email. What changes is the hourly rate, how fast someone responds, and what's included beyond the hours themselves.", en: "Basic, Standard, and Premium all cover the same ground — Wi-Fi and network, printers, backups, and email. What changes is the hourly rate, how fast someone responds, and what's included beyond the hours themselves." },
      hoursLabel:           { hu: "Óra / hó", en: "Hours / month" },
      recommendedPrefix:    { hu: "[HU pending] Recommended:", en: "Recommended:" },
      hourUnit:             { hu: "[HU pending] hours/mo", en: "hours/mo" },
      monthlyEstimateLabel: { hu: "[HU pending] Estimated monthly cost", en: "Estimated monthly cost" },
      responseLabel:        { hu: "Válaszidő", en: "Response time" },
      extrasLabel:          { hu: "[HU pending] What's included", en: "What's included" },
      minimumOverageNote:   { hu: "[HU pending] Every tier has a 2-hour monthly minimum. Any hours used beyond what you've committed to are billed at a flat 17,000 HUF/hour overage rate — the same rate, regardless of tier.", en: "Every tier has a 2-hour monthly minimum. Any hours used beyond what you've committed to are billed at a flat 17,000 HUF/hour overage rate — the same rate, regardless of tier." },
      cardBtn:              { hu: "Érdeklődj a csomagról", en: "Ask About This Tier" },
      cards: [
        {
          name:       { hu: "Basic", en: "Basic" },
          rateDisplay:{ hu: "11 000 Ft/óra", en: "11,000 HUF/hour" },
          response:   { hu: "48 órán belül", en: "Within 48 hours" },
          extras:     null,
        },
        {
          name:       { hu: "Standard", en: "Standard" },
          rateDisplay:{ hu: "12 000 Ft/óra", en: "12,000 HUF/hour" },
          response:   { hu: "24 órán belül", en: "Within 24 hours" },
          extras:     { hu: "Negyedévenként egy kiszállás a csomagban", en: "1 on-site visit included per quarter" },
        },
        {
          name:       { hu: "Premium", en: "Premium" },
          rateDisplay:{ hu: "14 000 Ft/óra", en: "14,000 HUF/hour" },
          response:   { hu: "Aznap, munkaidőben", en: "Same-day, during business hours" },
          extras:     { hu: "[HU pending] Proactive monitoring and priority scheduling", en: "Proactive monitoring and priority scheduling" },
        },
      ],
    },

    installation: {
      kicker:     { hu: "Egyszeri telepítés", en: "One-time setup" },
      title:      { hu: "[HU pending] One hourly rate for installs and one-off support.", en: "One hourly rate for installs and one-off support." },
      sub:        { hu: "[HU pending] Whether it's a fresh setup or a one-time fix with no ongoing contract, it's billed the same way — no itemized total until we've talked through the scope.", en: "Whether it's a fresh setup or a one-time fix with no ongoing contract, it's billed the same way — no itemized total until we've talked through the scope." },
      rateLabel:  { hu: "Óradíj", en: "Hourly rate" },
      rateDisplay:{ hu: "14 000 Ft / óra", en: "14,000 HUF / hour" },
      note:       { hu: "[HU pending] This is also the rate for ad-hoc, no-contract support calls — installs and one-off fixes are billed the same way. Get in touch and you'll get a scoped quote before any work starts.", en: "This is also the rate for ad-hoc, no-contract support calls — installs and one-off fixes are billed the same way. Get in touch and you'll get a scoped quote before any work starts." },
      cta:        { hu: "[HU pending] Request a Quote", en: "Request a Quote" },
    },

    hardwareNote: { hu: "[HU pending] Maintenance and installation prices cover labor only — hardware is quoted and billed separately, so ask for details when we scope the work.", en: "Maintenance and installation prices cover labor only — hardware is quoted and billed separately, so ask for details when we scope the work." },

    closing: {
      title: { hu: "Készen állsz, hogy átbeszéljük az árakat?", en: "Ready to talk pricing?" },
      body:  { hu: "Írd meg, mire van szükséged, és hamarosan kapsz egy egyértelmű tervet és egy világos árajánlatot.", en: "Get in touch with what's going on, and you'll hear back with a plan and a straightforward number." },
      cta:   { hu: "Kapcsolatfelvétel", en: "Get in Touch" },
    },
  },

  contact: {
    kicker:         { hu: "Kapcsolat",              en: "Get in touch" },
    title:          { hu: "Wi-Fi audit foglalása",  en: "Book a Wi-Fi audit" },
    sub:            { hu: "Írd le az ingatlanodat és a problémádat. Egyértelmű tervvel és hozzávetőleges árajánlattal jelentkezünk.", en: "Describe your space and what's been giving you trouble. You'll hear back with a clear plan and a rough price." },
    point1:         { hu: "Általában 24 órán belül válaszolunk", en: "Usually reply within 24 hours" },
    point2:         { hu: "Barátságos, nyugodt konzultáció.",   en: "Friendly, easygoing consultation" },
    point3:         { hu: "Törökbálint és környékén",            en: "Serving Törökbálint & nearby areas" },
    fieldName:      { hu: "Név",              en: "Name" },
    fieldEmail:     { hu: "Email",            en: "Email" },
    fieldProperty:  { hu: "Ingatlan típusa",  en: "Property type" },
    optApartment:   { hu: "Lakás",            en: "Apartment" },
    optHouse:       { hu: "Ház",              en: "House" },
    optBusiness:    { hu: "Kisvállalkozás",   en: "Small business" },
    fieldArea:      { hu: "Terület (m²)",     en: "Area (m²)" },
    areaPlaceholder:{ hu: "pl. 80",           en: "e.g., 80" },
    fieldIssues:    { hu: "Milyen problémákkal szembesülsz?", en: "What issues are you facing?" },
    fieldTimeline:  { hu: "Határidő",         en: "Timeline" },
    optAsap:        { hu: "Minél hamarabb",   en: "ASAP" },
    opt1to2weeks:   { hu: "1–2 héten belül",  en: "1–2 weeks" },
    optMonth:       { hu: "Egy hónapon belül", en: "Within a month" },
    optResearching: { hu: "Csak tájékozódok", en: "Just researching" },
    sending:        { hu: "Küldés...",         en: "Sending..." },
    submit:         { hu: "Kérelem küldése",  en: "Send request" },
    successTitle:   { hu: "Kérelem elküldve", en: "Request sent" },
    successMsg:     { hu: "Köszönöm! Hamarosan visszajelzek.", en: "Thanks! I'll get back to you soon." },
    successApiMsg:  { hu: "Kérelem megérkezett. Hamarosan visszajelzek.", en: "Request received. I'll get back to you soon." },
    successMeta:    { hu: "Tipikus válaszidő: 24 órán belül. Ha sürgős, jelezd a következő üzenetedben, és előnyt biztosítok.", en: "Typical response time: within 24 hours. If it's urgent, mention it in your next message and I'll prioritize it." },
    sendAnother:    { hu: "Újabb kérelem küldése", en: "Send another request" },
    errGeneric:     { hu: "Valami hiba történt.",  en: "Something went wrong." },
    errNetwork:     { hu: "Hálózati hiba. Kérjük, próbáld újra.", en: "Network error. Please try again." },
  },

  footer: {
    tagline:      { hu: "Praktikus hálózattervezés és -beállítás otthonok és kisvállalkozások számára.", en: "Practical network design and setup for homes and small businesses." },
    serviceArea:  { hu: "Földrajzi elhelyezkedés", en: "Service area" },
    areaValue:    { hu: "Törökbálint és környéke", en: "Törökbálint & surrounding area" },
    responseTime: { hu: "Válaszidő",             en: "Response time" },
    responseVal:  { hu: "Általában 24 órán belül", en: "Usually within 24 hours" },
    copy:         { hu: "Minden jog fenntartva.", en: "All rights reserved." },
  },
} as const;
