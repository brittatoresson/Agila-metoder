import Footer from "./Footer";

function SvampEntusiasterna() {
  return (
    <section id="svamp" className="scroller">
      <h1>Svampentusiasterna blir med app!</h1>
      <h4>Backlog</h4>
      <article className="article-card">
        <li>1. Lista över svampar ( ätbara, giftiga)</li>
        <li>2. Kännetecken för en bra svampskog</li>
        <li>3. Svampskogar i närheten</li>
        <li>4. Recept med svamp (vego, gryta, paj, soppa) </li>
        <li>5. Lista över medlemmar i SvampEntusiasterna </li>
      </article>
      <h4> User Story och Agil estimering:</h4>
      <article className="article-card">
        <p>
          <b>"2. Lista över svampar"</b> = ge användare en lista med bilder och
          beskrivning över ätbara och gifta svampar så använadre tydligt kan
          känna igen en oätlig svamp i skogen.
        </p>
        <ul>
          <li>Värde: 144 p</li>
          <li>Svårighet: 34 p</li>
          <li>Story value points => 144/34 = 4p</li>
        </ul>

        <p>
          <b> "2. Lista över medlemmar"</b> = ge användare möjlighet att söka
          upp en entusiast i närheten.
        </p>
        <ul>
          <li>Värde: 21 p</li>
          <li>Svårighet: 13 p </li>
          <li>Story value points => 21/13 = 1.5p </li>
        </ul>
      </article>
      <h4> Sprintplannering </h4>
      <article className="article-card">
        <p> Längd på sprint: 2 veckor</p>
        <p>
          {" "}
          Tidsestimering av varje user story utifrån den agila estimeringen. Ex
          user story 1 = 5h, use story 5 = 2h
        </p>
      </article>
      <h4> Sprint Backlog </h4>
      <article className="article-card">
        <li>4 poäng, 5h - Lista över svampar</li>
        <li>1.5 poäng, 2h - Lista över medlemmar </li>
      </article>
      <h4> Daily Scrum: </h4>
      <article className="article-card">
        <p>
          Igår startade jag react-projektet, idag ska jag skapa en lista över
          ätbara svampar, jag är osäker på hur JSON-filen ska se ut.{" "}
        </p>
      </article>
      <h4> Sprint review: </h4>
      <article className="article-card">
        <p>En ny sökfunktion över alla svampar är tillagd och testad. </p>
      </article>
      <h4> Sprint retrospective: </h4>
      <article className="article-card">
        <p>
          {" "}
          Jag ska fortsätta vara noggran när det gäller att göra skillnad på
          ätbar och giftig svamp. Jag ska sluta skriva svamprecept samtidigt som
          jag letar ätbara svampar.{" "}
        </p>
      </article>

      <h4>
        Se projektets Kanban Board{" "}
        <a
          target="_blank"
          href="https://github.com/brittatoresson/agila-metoder/projects/2"
        >
          {" "}
          här
        </a>{" "}
      </h4>

      <Footer />
    </section>
  );
}

export default SvampEntusiasterna;
