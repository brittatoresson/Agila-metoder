import { useEffect } from "react";
import { useState } from "react";

function Modal(props) {
  console.log(props.item);
  const [modal, setModal] = useState(props.modal);
  //   const [chosenItem, setChosenItem] = useState(props.item);

  function handleClick(params) {
    setModal(false);
  }
  useEffect(() => {}, [props]);

  return (
    <>
      <div className={modal === true ? "display-cards" : "display-none"}>
        <aside onClick={() => handleClick()}>X</aside>
        <h1>{props.item}</h1>

        {/* <div>
          <img
            src={chosenItem.img}
            className={chosenItem.id == 5 ? "burnDown" : null}
          ></img>
          {chosenItem.name ? <li>{chosenItem.name}</li> : null}
          {chosenItem.ansvarig ? (
            <li>Ansvarig: {chosenItem.ansvarig}</li>
          ) : null}
        </div> */}
        {/* {chosenItem.solgan ? <li>{chosenItem.slogan}</li> : null}
        <li>{chosenItem.description}</li>
        {chosenItem.extraInfo ? (
          <li>
            <a target="_blank" href={chosenItem.extraInfo}>
              Lär dig mera här
            </a>
          </li>
        ) : null} */}
      </div>
    </>
  );
}

export default Modal;
