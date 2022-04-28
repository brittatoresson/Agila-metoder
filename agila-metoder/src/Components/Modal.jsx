import { useEffect } from "react";
import { useState } from "react";

function Modal(props) {
  const [modal, setModal] = useState(props.modal);

  function handleClick() {
    setModal(false);
  }
  useEffect(() => {}, [props]);

  return (
    <>
      <div className={modal === true ? "display-cards" : "display-none"}>
        <aside onClick={() => handleClick()}>X</aside>
        <h1>{props.item}</h1>
      </div>
    </>
  );
}

export default Modal;
