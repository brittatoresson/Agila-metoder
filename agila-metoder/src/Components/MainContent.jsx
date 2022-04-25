import { team, ceremonies, artifacts } from "./data";
import Card from "./Card";
import { useEffect, useState } from "react";
import Navbar from "./TopNav";
import Footer from "./Footer";

function FirstPage() {
  const [click, setClick] = useState("");
  const [state, setState] = useState("");
  const url = "http://localhost:5002/infoData.json";
  // let teamArray = [];
  // let ceremoniesArray = [];
  // let artifactsArray = [];

  // team.forEach((item) => teamArray.push(item));
  // ceremonies.forEach((item) => ceremoniesArray.push(item));
  // artifacts.forEach((item) => artifactsArray.push(item));

  function handleClick(e) {
    setClick(e.target.innerText);
  }

  //Fetcha data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  return (
    <>
      {" "}
      <section id="mainPage" className="scroller">
        <section className={click ? "toggle-nav" : null}>
          <div>
            <h1 onClick={(e) => handleClick(e)}>Teamet </h1>
            <img src="/Img/teamWomen.png" alt="pic of team" />
          </div>
          <div>
            <h1 onClick={(e) => handleClick(e)}>Artifacts</h1>
            <img src="/Img/backlog (1).png" alt="pic of backlog" />
          </div>
          <div>
            <h1 onClick={(e) => handleClick(e)}>Processen</h1>
            <img src="/Img/process.svg" alt="pic of process" />
          </div>
        </section>
        {click === "Teamet" ? <Card items={state.team} /> : null}{" "}
        {click === "Artifacts" ? <Card items={state.artifacts} /> : null}{" "}
        {click === "Processen" ? <Card items={state.ceremonies} /> : null}{" "}
      </section>
    </>
  );
}

export default FirstPage;
