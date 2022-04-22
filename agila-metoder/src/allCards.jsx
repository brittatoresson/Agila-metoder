import { team, ceremonies, artifacts } from "./Components/data";

import Card from "./Components/Card";
import { useEffect, useState } from "react";

function AllCards() {
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
    <section className="allCards">
      {" "}
      <h1>Scrum</h1>
      <p> - ett agilt arbetssätt</p>
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
    </section>
  );
}

export default AllCards;
