// import { manifest } from "../Components/data";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";

function Manifest() {
  const [state, setState] = useState("");
  const url = "http://localhost:5002/infoData.json";

  //Fetcha data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  return (
    <section id="manifest" className="scroller">
      <h3>
        Det agila arbetssättet vilar på 4 grunder: individer och interaktiv
        framför processer, fungerande mjukvara framför omfattande dokumentation,
        samarbete med kunden framför att förhandla om kontrakt, reagera på
        förändring framför att strikt följa en uppgjord plan.
      </h3>

      {state
        ? state.manifest.map((element, i) => (
            <p key={i}>
              {element.id > 0 ? (
                element.id + ": " + element.item
              ) : (
                <h4>
                  Det agila manifestet beskriver 12 grundprinciper att arbeta
                  efter:
                </h4>
              )}
            </p>
          ))
        : null}
      <Footer />
    </section>
  );
}

export default Manifest;
