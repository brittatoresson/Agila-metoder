import Card from "./Card";
import { useEffect, useState } from "react";

function FirstPage() {
  const [click, setClick] = useState("");
  const [state, setState] = useState("");
  const url = "http://localhost:5002/infoData.json";

  function handleClick(e) {
    if (e.target.innerText) {
      setClick(e.target.innerText);
    } else {
      setClick(e.target.alt);
    }
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
            <img
              src="/Img/teamWomen.png"
              alt="Team"
              onClick={(e) => handleClick(e)}
            />
          </div>
          <div className={click === "Artifacts" ? "toggle-nav-div" : null}>
            <article>
              <h1 onClick={(e) => handleClick(e)}>Artifacts</h1>
              <img
                src="/Img/backlog (1).png"
                alt="Artifacts"
                onClick={(e) => handleClick(e)}
              />
            </article>
          </div>
          <div className={click === "Process" ? "toggle-nav-div" : null}>
            <article>
              <h1 onClick={(e) => handleClick(e)}>Process</h1>
              <img
                src="/Img/process.svg"
                alt="Process"
                onClick={(e) => handleClick(e)}
              />
            </article>
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
