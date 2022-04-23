let helj = { 2: "hej", 2: "jpp" };

export const team = [
  {
    main: "Teamet består av medlemmar som med sin gemensamma kunskap kan skapa en given produkt, teamest storlek kan variera men det ska inte föra vör många ej för fp 3-9.",
  },
  {
    id: "0",
    name: "Produktägare",
    slogan:
      "Pia Produktägare - prioriterar backlog, produktens ambassadör och får pang för pengarna",
    description:
      "Produktägaren är beställaren av uppdraget och hjälper teamet att prioritera arbetet för att skapa ett högt värde för kunden. Produktägaren prioriterar backlogen. ",
    extraInfo:
      "https://www.scrum.org/professional-scrum-product-owner-certifications",
    img: "/Img/womanProfil.png",
  },
  {
    id: "1",
    name: "Scrum Master",
    slogan:
      "Sara scrum master - scrumifierar arbetssättet, strukturerar teamet, samlar till stand-ups, samordnar team och PO",
    description:
      "En Scrum Master hjälper teamet framåt i rätt riktning, ser till så att teamet jobbar agilt på bästa vis. Scrum master kan också vara länken mellan teamet och produktägaren. ",
    extraInfo:
      "https://open.spotify.com/episode/49FoMshorfvDP32XmKAPn1?si=33f07469bab74794",

    img: "/Img/manProfil.png",
  },
  {
    id: "2",
    name: "Utvecklare",
    slogan:
      "Urban utvecklare - übersnbb skapare,  utformar koden och utmanar designen",
    description:
      "Utvecklarna är dom som skapar eller utvecklar projektet. De bestämmer hur och hur snabbt features kommer lanseras/produceras. Utvecklingsteamet ska bestå av individer från olika dicepliner som täcker in de efterfrågade kompetenser som behövs för att skapa produkten. Exempelvis designer, programmerare, testare",
    extraInfo: "????",

    img: "/Img/teamWomen.png",
  },
];
export const artifacts = [
  {
    main: "Artifacts är den information eller grund som teamet behöver för att utveckla produkten",
  },
  {
    id: "3",
    name: "Produckt backlog",
    ansvarig: "Produktägaren",
    description:
      "En product Backlog är en ”att göra”-lista som innehåller alla features som behöver produceras för att skapa en färdig produkt. Varje punkt i listan beskrivs som en User Story med fokus på VAD och VARFÖR denna del är viktig för slutprodukten. Agil estimering används för att bestämma ordningen på backloggen. Detta görs genom att poängsätts hur viktig varje User Story är och hur krävande den är att genomföra. Rangordning i backlogen = viktighet/svårighet. Vi börjar arbeta med de storys som är högst prioriterade och som ger mest nytta.",
    img: "/Img/backlog (1).png",
  },
  {
    id: "4",
    name: "Sprint Backlog",
    ansvarig: "Teamet",
    description:
      "en kortare ”att göra”-lista. Här väljer teamet ut vilka User Stories som de ska arbeta med under kommande sprint. Här kan alla i teamet vara med och bestämma. ",
    img: "/Img/tasks.png",
  },
  {
    id: "5",
    name: "Burndonw Chart",
    ansvarig: "",
    description:
      "En Bundown chart är ett verktyg som följer arbetstakten under en sprint. Här kan man följa User Story Points i förhållande till förhållande till tid.",
    img: "https://www.researchgate.net/profile/Timothy-Chick/publication/266049888/figure/fig6/AS:668437126869000@1536379238248/Sample-Sprint-Burn-Down-Chart.png",
  },
];
export const ceremonies = [
  {
    main: "Den agila processen består av olika cermonier som driver arbetet framåt ",
  },
  {
    id: "6",
    name: "Sprint",
    ansvarig: "Teamet",
    description:
      "En fördefinierad arbetsperiod där man jobbar med vad som bestämdes under Sprint Planningint",
    img: "/Img/running.png",
  },
  {
    id: "7",
    name: "Sprint planning",
    ansvarig: "Teamet",
    description:
      "Här bestämmer teamet vad som ska genomföras under nästa sprint (vanligtvis under 2 veckors tid). Teamet väljer ut user stories från backlog och placerar i sprint-backlogen",
    img: "/Img/planning.png",
  },
  {
    id: "8",
    name: "Daily Scrum",
    ansvarig: "Teamet",
    description:
      "Detta är ett daglig möte där teamet får samtala om vad man har gjort, vad man ska göra och om man stött på några hinder. Detta är ett kort möte. Kallas även stand-up. Fårgor att besvara är: Vad gjorde du igår, vad gör du idag, finns det några hinder? ",
    img: "/Img/team.png",
  },
  {
    id: "9",
    name: "Sprint review",
    ansvarig: "Teamet",
    description:
      "Sprint review är ett möte i slutet av varje sprint för att presentera vad som producerats under sprinten",
    img: "/Img/sprint.png",
  },
  {
    id: "10",
    name: "Sprint Retrospective",
    ansvarig: "Teamet",
    description:
      "Sprint Retrospective innebär ett reflekterande möte om vad som fungerat bra under sprinten och vad som kan förändras. Fårgor att besvara är: Vad ska jag börja/sluta/fortsätta göra?",

    img: "/Img/process.svg",
  },
];

export const manifest = [
  {
    id: 0,
    item: "4 central processer, individer och interaktiv framför processer, fungerande mjukvara framför omfattande dokumentation, samarbete med kunden framför att förhandla om kontrakt, reagera på förändring framför att strikt följa en uppgjord plan.",
  },
  {
    id: 1,
    item: "Vår högsta prioritet är att tillfredsställa kunden genom tidig och kontinuerlig leverans av värdefull programvara.",
  },
  {
    id: 2,
    item: "Välkomna förändrade krav, även sent under utvecklingen. Agila metoder utnyttjar förändring till kundens konkurrensfördel.",
  },

  {
    id: 3,
    item: "Leverera fungerande programvara ofta, med ett par veckors till ett par månaders mellanrum,ju oftare desto bättre.",
  },

  {
    id: 4,
    item: "Verksamhetskunniga och utvecklare måste arbeta tillsammans dagligen under hela projektet.",
  },
  {
    id: 5,
    item: " Bygg projekt kring motiverade individer. Ge dem den miljö och det stöd de behöver, och lita på att de får jobbet gjort.",
  },
  {
    id: 6,
    item: "Kommunikation ansikte mot ansikte är det bästa och effektivaste sättet att förmedla information, både till och inom utvecklingsteamet.",
  },
  { id: 7, item: "Fungerande programvara är främsta måttet på framsteg." },
  {
    id: 8,
    item: "Agila metoder verkar för uthållighet. Sponsorer, utvecklare och användare skall kunna hålla jämn utvecklingstakt under obegränsad tid.",
  },
  {
    id: 9,
    item: "Kontinuerlig uppmärksamhet på förstklassig teknik och bra design stärker anpassningsförmågan.",
  },
  {
    id: 10,
    item: "Enkelhet – konsten att maximera mängden arbete som inte görs – är grundläggande.",
  },
  {
    id: 11,
    item: "Bäst arkitektur, krav och design växer fram med självorganiserande team.",
  },
  {
    id: 12,
    item: "Med jämna mellanrum reflekterar teamet över hur det kan bli mer effektivt och justerar sitt beteende därefter.",
  },
];

export default (team, artifacts, ceremonies, manifest);
