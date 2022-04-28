import { useState } from "react";

function Card(props) {
  const [modal, setModal] = useState(false);
  const [chosenItem, setChosenItem] = useState();

  function openModale(e) {
    setChosenItem(e.item);
    setModal(true);
  }
  return (
    <section className="cards">
      {props.items.map((item, i) => (
        <section key={i} onClick={() => openModale({ item })}>
          <h1>{item.main}</h1>
          <img src={item.img}></img>
          <h1>{item.name}</h1>
          <p>{item.slogan}</p>
        </section>
      ))}
      {chosenItem ? (
        <div className={modal === true ? "display-cards" : "display-none"}>
          <aside onClick={() => setModal(false)}>X</aside>
          <div className={chosenItem.id == 5 ? "burnDown" : null}>
            <img src={chosenItem.img}></img>
            {chosenItem.name ? <h3>{chosenItem.name}</h3> : null}
            {chosenItem.ansvarig ? (
              <li>
                <b>Ansvarig:</b>
                {chosenItem.ansvarig}
              </li>
            ) : null}
          </div>
          {chosenItem.solgan ? <li>{chosenItem.slogan}</li> : null}
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
