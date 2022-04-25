import { manifest } from "../Components/data";
import Footer from "../Components/Footer";
import Navbar from "../Components/TopNav";

function Manifest() {
  return (
    <section id="manifest" className="scroller">
      <h3>
        Det agila arbetssättet vilar på 4 grunder: individer och interaktiv
        framför processer, fungerande mjukvara framför omfattande dokumentation,
        samarbete med kunden framför att förhandla om kontrakt, reagera på
        förändring framför att strikt följa en uppgjord plan.
      </h3>

      {manifest.map((element, i) => (
        <p key={i}>
          {element.id > 0 ? (
            element.id + ": " + element.item
          ) : (
            <h4>
              Det agila manifestet beskriver 12 grundprinciper att arbeta efter:
            </h4>
          )}
        </p>
      ))}
      <Footer />
    </section>
  );
}

export default Manifest;
