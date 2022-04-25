import Card from "./Card";
import { useEffect, useState } from "react";

function FirstPage() {
  const [click, setClick] = useState("");
  const [state, setState] = useState("");
  const url = "http://localhost:5002/infoData.json";

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
          <div className={click === "Team" ? "toggle-nav-div" : null}>
            <h1 onClick={(e) => handleClick(e)}>Team </h1>
            <img src="/Img/teamWomen.png" alt="pic of team" />
          </div>
          <div className={click === "Artifacts" ? "toggle-nav-div" : null}>
            <h1 onClick={(e) => handleClick(e)}>Artifacts</h1>
            <img src="/Img/backlog (1).png" alt="pic of backlog" />
          </div>
          <div className={click === "Process" ? "toggle-nav-div" : null}>
            <h1 onClick={(e) => handleClick(e)}>Process</h1>
            <img src="/Img/process.svg" alt="pic of process" />
          </div>
        </section>
        {click === "Team" ? <Card items={state.team} /> : null}{" "}
        {click === "Artifacts" ? <Card items={state.artifacts} /> : null}{" "}
        {click === "Process" ? <Card items={state.ceremonies} /> : null}{" "}
      </section>
    </>
  );
}

export default FirstPage;
