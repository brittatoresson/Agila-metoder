import { useState } from "react";

function Card(props) {
  const [modal, setModal] = useState(false);
  const [chosenItem, setChosenItem] = useState();

  function openModale(e) {
    setModal(true);
    setChosenItem(e.item);
  }
  return (
    <section className="cards">
      {props.items.map((item, i) => (
        <section key={i} onClick={() => openModale({ item })}>
          <img src={item.img}></img>
          {item.main ? <h1>{item.main}</h1> : null}
          <h1>{item.name}</h1>
          <h3>{item.slogan}</h3>
        </section>
      ))}
      {chosenItem ? (
        <div className={modal ? "display-cards" : "display-none"}>
          <li>{chosenItem.name}</li>
          <li>{chosenItem.slogan}</li>
          <li>{chosenItem.description}</li>
          <img src={chosenItem.img}></img>
          <aside onClick={() => setModal(false)}>X</aside>
        </div>
      ) : null}
    </section>
  );
}

export default Card;
