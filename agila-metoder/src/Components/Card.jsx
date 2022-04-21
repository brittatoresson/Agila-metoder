import data from "./data";

function Card(props) {
  console.log(props.item);
  //   data.forEach((item) => {
  //     console.log(item.name);
  //   });
  return (
    <section className="card">
      <h1>{props.item.name}</h1>
      <h3></h3>
    </section>
  );
}

export default Card;
