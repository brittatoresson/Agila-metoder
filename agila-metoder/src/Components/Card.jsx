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
          <h1>{item.main}</h1>
          <h1>{item.name}</h1>
          <p>{item.slogan}</p>
        </section>
      ))}

      {/* open modal */}
      {chosenItem ? (
        <div className={modal === true ? "display-cards" : "display-none"}>
          <aside onClick={() => setModal(false)}>X</aside>
          <div>
            <img src={chosenItem.img}></img>
            <li>{chosenItem.name}</li>
          </div>
          <li>{chosenItem.slogan}</li>
          <li>{chosenItem.description}</li>
          {chosenItem.extraInfo ? (
            <li>
              <a target="_blank" href={chosenItem.extraInfo}>
                Lär dig mera här
              </a>
            </li>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export default Card;
