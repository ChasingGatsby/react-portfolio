import { DiGithubBadge } from "react-icons/di";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#BF3131", color: "white" }}
    >
      <a href="https://github.com/ChasingGatsby">
        <DiGithubBadge size={40} color="white" />
      </a>
      <a href="https://www.youtube.com/channel/UCIPGj59SSpp3zDkbAgSD1TQ">
        <FaYoutube size={40} color="white" />
      </a>
      <a href="#">
        <FaLinkedin size={40} color="white" />
      </a>
    </footer>
  );
}
