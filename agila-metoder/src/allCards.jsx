import data from "./Components/data";
import Card from "./Components/Card";
import { useEffect, useState } from "react";

function AllCards() {
  // const [item, setItem] = useState({});
  let items = [];

  data.forEach((item) => {
    console.log(item.name);
    items.push(item);
  });
  console.log(items);

  return (
    <section className="card"> {items ? <Card item={items} /> : null} </section>
  );
}

export default AllCards;
