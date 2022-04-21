import data from "./data";
import { useState } from "react";
function Card(props) {
  const [modal, setModal] = useState(false);
  const [chosenItem, setChosenItem] = useState();

  function openModale(e) {
    console.log(e);
    setModal(true);
    setChosenItem(e.item);
  }
  console.log(chosenItem);
  return (
    <section className="cards">
      <h1>Scrum</h1>
      <p> - ett agilt arbetssätt</p>
      <h1>
        Teamet består av medlemmar som med sin gemensamma kunskap kan skapa en
        given produkt, teamest storlek kan variera men det ska inte föra vör
        många ej för fp 3-9.{" "}
      </h1>

      {props.items.map((item, i) => (
        <section key={i} onClick={() => openModale({ item })}>
          {/* <img src={item.img}></img> */}
          <h1>{item.name}</h1>
          <h3>{item.slogan}</h3>
        </section>
      ))}
      {chosenItem ? (
        <div className={modal ? "display-cards" : "display-none"}>
          <li>{chosenItem.name}</li>
          <li>{chosenItem.slogan}</li>
          <li>{chosenItem.description}</li>
          {/* <img src={chosenItem.img}></img> */}
          <aside onClick={() => setModal(false)}>X</aside>
        </div>
      ) : null}
    </section>
  );
}

export default Card;
