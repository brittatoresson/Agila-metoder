import { useState } from "react";
import Modal from "./Modal";

function Card(props) {
  const [modal, setModal] = useState(false);
  const [click, setClick] = useState();
  const [chosenItem, setChosenItem] = useState();

  function openModale(e) {
    setChosenItem(e.item);
    console.log(chosenItem);
    setModal(true);
    setClick("hej");
  }
  console.log(modal);
  return (
    <section className="cards">
      {/* {modal ? <Modal item={chosenItem} modal={modal} /> : null} */}
      {props.items.map((item, i) => (
        <section key={i} onClick={() => openModale({ item })}>
          <h1>{item.main}</h1>
          {/* {item.main ? <h1>{item.main}</h1> : null} */}
          <img src={item.img}></img>
          <h1>{item.name}</h1>
          <p>{item.slogan}</p>
        </section>
      ))}
      {/* open modal */}
      {chosenItem ? (
        <div className={modal === true ? "display-cards" : "display-none"}>
          <aside onClick={() => setModal(false)}>X</aside>
          <div>
            <img
              src={chosenItem.img}
              className={chosenItem.id == 5 ? "burnDown" : null}
            ></img>
            {chosenItem.name ? <li>{chosenItem.name}</li> : null}
            {chosenItem.ansvarig ? (
              <li>Ansvarig: {chosenItem.ansvarig}</li>
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
