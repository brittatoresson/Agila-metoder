import { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);
  function dropdownFunction() {
    setClick((click) => !click);
  }

  return (
    <div id="dropdown">
      <button onClick={dropdownFunction} className="dropbtn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
          alt=""
        />
      </button>
      <div className={!click ? "hideDropdown" : "showDropdown"}>
        <Link to="/">
          <p> Hem </p>
        </Link>
        <Link to="/main">
          <p> Scrum </p>
        </Link>
        <Link to="/manifest">
          <p> Agil </p>
        </Link>
        <Link to="/quiz">
          <p> Quiz </p>
        </Link>
      </div>
    </div>
  );
}

export default Dropdown;
