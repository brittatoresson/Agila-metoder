import { manifest } from "../Components/data";
import Footer from "../Components/Footer";
import Navbar from "../Components/TopNav";
console.log(manifest);

manifest.map((element, i) => {
  console.log(element.item);
});

function Manifest() {
  return (
    <section id="manifest" className="scroller">
      <Navbar />

      {manifest.map((element, i) => (
        <p key={i}>
          {element.id > 0 ? element.id + ": " + element.item : element.item}
        </p>
      ))}
      <Footer />
    </section>
  );
}

export default Manifest;
