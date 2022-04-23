import { Link } from "react-router-dom";
function Home() {
  return (
    <section id="home">
      <h1>Skogis i centrum goes Scrum</h1>
      <h2>Scrum, Sprint, Stand up</h2>
      <p> - vad innebär det och vad ska jag ha det till?</p>
      <img src="./Img/sprint.png" alt="pic of sprint" />
      <p>
        Det <Link to="/manifest">agila</Link> arbetssätter fokuserar på att
        kontinueligt lösa små delar av ett större projekt i jämförelse med den
        traditinella vattenfallsmodellen där ett steg måste avslutas innan nästa
        påbörjas.
      </p>
      <br />
      <h4>Alla snackar Scrum!</h4>
      <Link to="/main">Klicka här</Link> för att lära dig mer
    </section>
  );
}

export default Home;
