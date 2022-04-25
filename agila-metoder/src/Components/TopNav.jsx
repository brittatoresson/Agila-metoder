import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <>
      <nav>
        <Dropdown />
      </nav>
      <Link to="/" id="headerName">
        <h1>Scrum</h1>
        <p> - ett agilt arbetssätt</p>{" "}
      </Link>
    </>
  );
}

export default Navbar;
