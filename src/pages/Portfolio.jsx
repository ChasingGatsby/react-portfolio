import Project from "../components/Project";
import {
  pokeDisple,
  weeklyPlanner,
  noteTaker,
  techBlog,
  weatherDash,
  codingQuiz,
  pokiDoki,
} from "../images";

export default function Portfolio() {
  const projects = [
    {
      name: "PokiDoki",
      link: "https://pokidoki-96931dcc8e78.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/p3-pokidoki",
      pic: pokiDoki,
      description:
        "A social media platform for Pokemon fans to share their favorite Pokemon and related content, and interact with fellow fans.",
    },
    {
      name: "PokeDisple",
      link: "https://madchazo.github.io/P1-pokedisple/",
      repo: "https://github.com/MadChazo/P1-pokedisple",
      pic: pokeDisple,
      description:
        "A catalog app that allows you to search for Pokemon cards of a specific Pokemon and save them to a personal collection",
    },
    {
      name: "Weekly Planner",
      link: "https://hidden-refuge-12457-e7186f1acd67.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/p2-weekly-planner",
      pic: weeklyPlanner,
      description:
        "A weekly planner that allows you to save tasks and other information for each day of the week.",
    },
    {
      name: "Weather Dashboard",
      link: "https://chasinggatsby.github.io/w6c-weather-fc/",
      repo: "https://github.com/ChasingGatsby/w6c-weather-fc",
      pic: weatherDash,
      description:
        "A weather dashboard that searches 5-day forecasts based on city name.",
    },
    {
      name: "Coding Quiz",
      link: "https://chasinggatsby.github.io/w4c-codequiz/",
      repo: "https://github.com/ChasingGatsby/w4c-codequiz",
      pic: codingQuiz,
      description: "A simple coding quiz",
    },
    {
      name: "Tech Blog",
      link: "https://polar-refuge-49175-d6c386176be9.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/tech-blog",
      pic: techBlog,
      description: "A simple tech blog",
    },
    {
      name: "Note Taker",
      link: "https://infinite-bayou-86037-c3d7475f96e7.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/note-taker",
      pic: noteTaker,
      description: "A simple note taker",
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
          desc={project.description}
        />
      ))}
    </div>
  );
}
