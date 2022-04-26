import Footer from "./Footer";

function SvampEntusiasterna() {
  return (
    <section id="svamp" className="scroller">
      <h1>Svampentusiasterna blir med app!</h1>
      <h4>Backlog:</h4>
      <ul>
        <li>1. Lista över svampar ( ätbara, giftiga)</li>
        <li>2. Kännetecken för en bra svampskog</li>
        <li>3. Svampskogar i närheten</li>
        <li>4. Recept med svamp (vego, gryta, paj, soppa) </li>
        <li>5. Lista över medlemmar i SvampEntusiasterna </li>
      </ul>
      <h4> User Story med Agil estimering:</h4>
      <p>
        <b>"2. Lista över svampar"</b> = ge användare en lista med bilder och
        beskrivning över ätbara och gifta svampar så använadre tydligt kan känna
        igen en oätlig svamp i skogen.
      </p>
      <li>Värde: 144 p</li>
      <li>Svårighet: 34 p</li>
      <li>Story value points => 144/34 = 4</li>
      <p>
        <b> "2. Lista över medlemmar"</b> = ge användare möjlighet att söka upp
        en entusiast i närheten.
      </p>
      <li>Värde: 21 p</li>
      <li>Svårighet: 13 p </li>
      <li>Story value points => 21/13 = 1.5</li>
      <h4> Sprintplannering: </h4>
      <p> Längd på sprint: 2 veckor</p>
      <p>
        {" "}
        Tidsestimering av varje user story utifrån den agila estimeringen. Ex
        user story 1 = 5h, use story 5 = 2h
      </p>
      <h4> Sprint Backlog: </h4>
      <li>4 poäng, 5h - Lista över svampar</li>
      <li>1.5 poäng, 2h - Lista över medlemmar </li>
      <h4> Daily Scrum: </h4>
      <p>
        Igår startade jag react-projektet, idag ska jag skapa en lista över
        ätbara svampar, jag är osäker på hur JSON-filen ska se ut.
      </p>
      <h4> Sprint review: </h4>
      <p>En ny sökfunktion över alla svampar är tillagd och testad. </p>
      <h4> Sprint retrospective: </h4>
      <p>
        {" "}
        Jag ska fortsätta vara noggran när det gäller att göra skillnad på ätbar
        och giftig svamp. Jag ska sluta skriva svamprecept samtidigt som jag
        letar ätbara svampar.{" "}
      </p>

      <h4>Kanban: </h4>
      <p>
        Se projektets Kanban Board{" "}
        <a
          target="_blank"
          href="https://github.com/brittatoresson/agila-metoder/projects/2"
        >
          {" "}
          här
        </a>{" "}
      </p>

      <Footer />
    </section>
  );
}

export default SvampEntusiasterna;
