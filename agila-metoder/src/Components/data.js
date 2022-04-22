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
      "Produktägaren är beställaren av uppdraget och hjälper teamet att prioritera arbetet för att skapa ett högt värde för kunden. Produktägaren prioriterar i backlogen. ",
    img: "/Img/womanProfil.png",
  },
  {
    id: "1",
    name: "Scrum Master",
    slogan:
      "Sara scrum master - scrumifierar arbetssättet, strukturerar teamet, samlar till stand-ups, samordnar team och PO",
    description:
      "En Scrum Master hjälper teamet framåt i rätt riktning, ser till så att teamet jobbar agilt på bästa vis. Scrum master kan också vara länken mellan teamet och produktägaren. ",
    img: "/Img/manProfil.png",
  },
  {
    id: "2",
    name: "Utvecklare",
    slogan:
      "Urban utvecklare - übersnbb skapare,  utformar koden och utmanar designen",
    description:
      "Utvecklarna är dom som skapar eller utvecklar projektet. De bestämmer hur och hur snabbt features kommer lanseras/produceras. Utvecklingsteamet ska bestå av individer från olika dicepliner som täcker in de efterfrågade kompetenser som behövs för att skapa produkten. Exempelvis designer, programmerare, testare",

    img: "/Img/teamWomen.png",
  },
];
export const artifacts = [
  {
    main: "Artifacts är den information eller grund som teamet behöver för att utveckla produkten",
  },
  {
    id: "0",
    name: "Produckt backlog",
    ansvarig: "Produktägaren",
    description:
      "En product Backlog är en ”att göra”-lista som innehåller alla features som behöver produceras för att skapa en färdig produkt. Varje punkt i listan beskrivs som en User Story med fokus på VAD och VARFÖR denna del är viktig för slutprodukten. Agil estimering används för att bestämma ordningen på backloggen. Detta görs genom att poängsätts hur viktig varje User Story är och hur krävande den är att genomföra. Rangordning i backlogen = viktighet/svårighet. Vi börjar arbeta med de storys som är högst prioriterade och som ger mest nytta.",
    img: "/Img/backlog (1).png",
  },
  {
    id: "1",
    name: "Sprint Backlog",
    ansvarig: "utvecklingsteamet",
    description:
      "en kortare ”att göra”-lista. Här väljer teamet ut vilka User Stories som de ska arbeta med under kommande sprint. Här kan alla i teamet vara med och bestämma. ",
    img: "/Img/tasks.png",
  },
  {
    id: "2",
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
    id: "0",
    name: "Sprint",
    ansvarig: "Teamet",
    description:
      "En fördefinierad arbetsperiod där man jobbar med vad som bestämdes under Sprint Planningint",
    img: "/Img/person-running-on-a-treadmill-silhouette-from-side-view-svgrepo-com.svg",
  },
  {
    id: "1",
    name: "Sprint planning",
    ansvarig: "Teamet",
    description:
      "Här bestämmer teamet vad som ska genomföras under nästa sprint (vanligtvis under 2 veckors tid). Teamet väljer ut user stories från backlog och placerar i sprint-backlogen",
  },
  {
    id: "2",
    name: "Daily Scrum",
    ansvarig: "Teamet",
    description:
      "Detta är ett daglig möte där teamet får samtala om vad man har gjort, vad man ska göra och om man stött på några hinder. Detta är ett kort möte. Kallas även stand-up. Fårgor att besvara är: Vad gjorde du igår, vad gör du idag, finns det några hinder? ",
  },
  {
    id: "3",
    name: "Sprint review",
    ansvarig: "Teamet",
    description:
      "Sprint review är ett möte i slutet av varje sprint för att presentera vad som producerats under sprinten",
  },
  {
    id: "4",
    name: "Sprint Retrospective",
    ansvarig: "Teamet",
    description:
      "Sprint Retrospective innebär ett reflekterande möte om vad som fungerat bra under sprinten och vad som kan förändras. Fårgor att besvara är: Vad ska jag börja/sluta/fortsätta göra?",
  },
];

export default (team, artifacts, ceremonies);
