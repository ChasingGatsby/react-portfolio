export default function Contact() {
  return (
    <div className="m-5">
      <form>
        <div className="form-group my-3">
          <label htmlFor="exampleInputName">Your Names</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            placeholder="Enter your name"
            style={{ width: "60%" }}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            style={{ width: "60%" }}
          />
        </div>
        <div className="input-group d-block">
          <label htmlFor="exampleInputMessage"> Your Message: </label>
          <div className="input-group-prepend"></div>
          <textarea
            className="form-control mb-2"
            aria-label="With textarea"
            defaultValue={""}
            style={{ width: "500px" }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
