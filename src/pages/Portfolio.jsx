import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      name: "PokeDisple",
      link: "https://madchazo.github.io/P1-pokedisple/",
      repo: "https://github.com/MadChazo/P1-pokedisple",
    },
    {
      name: "Weekly Planner",
      link: "https://hidden-refuge-12457-e7186f1acd67.herokuapp.com/",
      repo: "https://github.com/ChasingGatsby/p2-weekly-planner",
    },
  ];
  return (
    <div className="container d-flex">
      {projects.map((project) => (
        <Project name={project.name} link={project.link} repo={project.repo} />
      ))}
    </div>
  );
}
