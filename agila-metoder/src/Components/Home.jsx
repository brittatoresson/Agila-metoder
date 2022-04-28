import { Link } from "react-router-dom";
function Home() {
  return (
    <section id="home">
      <div>
        <h2>Scrum, Sprint, Stand up</h2>
        <p> - vad innebär det och vad ska jag ha det till?</p>
      </div>
      <img src="./Img/sprint.png" alt="pic of sprint" />
      <br />
      <h4>Alla snackar Scrum!</h4>
      <Link to="/main">Klicka här</Link> för att lära dig mer
    </section>
  );
}

export default Home;
