import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        alert("Message sent successfully");
        // Optionally reset form fields here
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message due to a network error");
    }
  };

  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputName">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            placeholder="Enter your name"
            style={{ width: "60%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group d-block">
          <label htmlFor="exampleInputMessage"> Your Message: </label>
          <div className="input-group-prepend"></div>
          <textarea
            className="form-control mb-2"
            aria-label="With textarea"
            style={{ width: "500px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
