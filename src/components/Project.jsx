function Project(props) {
    return(
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={"src/assets/placeholder.png"} className="card-img-top" alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"> </p>
                <a href={props.link} className="btn btn-primary">View Project</a>
                <a href={props.repo} className="btn btn-primary">View Repo</a>
            </div>
        </div>
    )
}

export default Project;