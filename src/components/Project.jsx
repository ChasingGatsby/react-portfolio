function Project(props) {
  return (
    <div className="card m-2" style={{ width: "25rem" }}>
      <img src={props.pic} className="card-img-top border" alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text"> </p>
        <div className="d-flex justify-content-center">
        <a href={props.link} className="btn btn-primary">
          View Project
        </a>
        <a href={props.repo} className="btn btn-primary">
          View Repo
        </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
