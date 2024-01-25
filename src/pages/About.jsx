import profile from "../assets/me.jpg";

export default function About() {
  return (
    <div className="m-5">
      <h1>About Gatsbeau</h1>
      <img src={profile} alt="profile" className="img-thumbnail m-2 custImg" />
      <p>Text about me?!?!</p>
    </div>
  );
}
