import { team, ceremonies, artifacts } from "./Components/data";

import Card from "./Components/Card";
import { useEffect, useState } from "react";
import Navbar from "./Components/TopNav";
import Footer from "./Components/Footer";

function FirstPage() {
  const [click, setClick] = useState("");
  let teamArray = [];
  let ceremoniesArray = [];
  let artifactsArray = [];

  team.forEach((item) => teamArray.push(item));
  ceremonies.forEach((item) => ceremoniesArray.push(item));
  artifacts.forEach((item) => artifactsArray.push(item));

  function handleClick(e) {
    console.log(e.target.innerText);
    setClick(e.target.innerText);
  }

  return (
    <section id="mainPage" className="scroller">
      <Navbar />
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
      {click === "Teamet" ? <Card items={teamArray} /> : null}{" "}
      {click === "Artifacts" ? <Card items={artifactsArray} /> : null}{" "}
      {click === "Processen" ? <Card items={ceremoniesArray} /> : null}{" "}
      <Footer />
    </section>
  );
}

export default FirstPage;
