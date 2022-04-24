import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <p> Home </p>
        </Link>

        <Link to="/quiz">
          <p> Take the quiz </p>
        </Link>
      </nav>
      <Link to="/">
        <h1>Scrum</h1>
        <p> - ett agilt arbetssätt</p>{" "}
      </Link>
    </>
  );
}

export default Navbar;
