import "../styles.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="app-header">
      <h1 className="app-logo">Fun With Traingle</h1>
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/isTriangle">is Triangle?</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Quiz</Link>{" "}
          </li>
          <li className="nav-link">
            <Link to="hypotenuse">Hypotenuse</Link>{" "}
          </li>
          <li className="nav-link">
            <Link to="/areaOfTriangle">Area of Traingle</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};
