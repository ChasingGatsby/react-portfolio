import Project from "../components/Project";
import {
  pokeDisple,
  weeklyPlanner,
  noteTaker,
  techBlog,
  weatherDash,
  codingQuiz,
} from "../images";

export default function Portfolio() {
  const projects = [
    {
      name: "PokeDisple",
      link: "https://madchazo.github.io/P1-pokedisple/",
      repo: "https://github.com/MadChazo/P1-pokedisple",
      pic: pokeDisple,
    },
    {
      name: "Weekly Planner",
      link: "https://hidden-refuge-12457-e7186f1acd67.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/p2-weekly-planner",
      pic: weeklyPlanner,
    },
    {
      name: "Weather Dashboard",
      link: "https://chasinggatsby.github.io/w6c-weather-fc/",
      repo: "https://github.com/ChasingGatsby/w6c-weather-fc",
      pic: weatherDash,
    },
    {
      name: "Coding Quiz",
      link: "https://chasinggatsby.github.io/w4c-codequiz/",
      repo: "https://github.com/ChasingGatsby/w4c-codequiz",
      pic: codingQuiz,
    },
    {
      name: "Tech Blog",
      link: "https://polar-refuge-49175-d6c386176be9.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/tech-blog",
      pic: techBlog,
    },
    {
      name: "Note Taker",
      link: "https://infinite-bayou-86037-c3d7475f96e7.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/note-taker",
      pic: noteTaker,
    },
  ];

  return (
    <div className="container d-flex flex-wrap mt-3">
      {projects.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          link={project.link}
          repo={project.repo}
          pic={project.pic}
        />
      ))}
    </div>
  );
}
