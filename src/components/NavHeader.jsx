import { Link, useLocation } from "react-router-dom";
import resume from "../assets/resume.pdf";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs d-flex align-items-end">
      <li className="navbar-brand title p-3 mx-3 align-self-center">
        Gatsbeau SUCKS at Coding!
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={
            currentPage === "/About" || currentPage === "/"
              ? "nav-link active"
              : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={
            currentPage === "/Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item d-flex">
        <a
          href={resume}
          download
          className="nav-link active align-self-center"
          style={{ backgroundColor: "#7D0A0A", color: "white" }}
        >
          Download Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
