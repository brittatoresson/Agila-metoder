// import { useState } from "react";

// function Modal(props) {
//   console.log(props.item);
//   console.log(props.modal);
//   const [modal, setModal] = useState(props.modal);
//   const [chosenItem, setChosenItem] = useState(props.item);

//   //   function openModale(e) {
//   //     setModal(true);
//   //     // setChosenItem(e.item);
//   //   }

//   return (
//     <>
//       <div className={modal === true ? "display-cards" : "display-none"}>
//         <aside onClick={() => setModal(false)}>X</aside>
//         <div>
//           <img src={chosenItem.img}></img>
//           <li>{chosenItem.name}</li>
//         </div>
//         <li>{chosenItem.slogan}</li>
//         <li>{chosenItem.description}</li>
//         {chosenItem.extraInfo ? (
//           <li>
//             <a target="_blank" href={chosenItem.extraInfo}>
//               Lär dig mera här
//             </a>
//           </li>
//         ) : null}
//       </div>
//     </>
//   );
// }

// export default Modal;
