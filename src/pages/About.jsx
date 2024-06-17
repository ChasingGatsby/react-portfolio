import profile from "../assets/me.jpg";

export default function About() {
  return (
    <div className="m-2">
      <h1>About Me</h1>
      <img src={profile} alt="profile" className="img-thumbnail m-2 custImg" />
      <div className="">
        <p>Hey guys! Thanks for actually clicking through my stuff...</p>
        <p>
          I'm J Cabaluna, though as you've probably noticed, I go by Gatsbeau
          online...
        </p>
        <p>
          I'm an amateur (atm...) full-stack web developer, currently looking to
          dive into the tech industry while learning as much as I can about
          whatever I can!
        </p>
        <p>
          For the better part of the last decade, I was completely focused on
          starting my career in healthcare. With a nursing degree in hand, I'd
          started working in the hospital in ancillary positions, fluffing up my
          resume to make my transition into full-time patient care as smooth as
          possible. But after failing the NCLEX for the third time, I was
          overwhelmed by the rising costs of application and testing, as well as
          the obvious disappointment of being unable to begin my professional
          career.
        </p>
        <p>
          I've always been into computers and technology growing up. In
          particular, I've always been fascinated by code: marveling at HTML
          write-ups for Neopets profile pages, mashing on the keyboard of an
          old-school Macintosh like I was some hacker on a procedural crime TV
          show. But at that point, my only experience had been the QBasic/Visual
          Basic programming class I took my freshman year in high school. I'd
          always planned on incorporating technology into my career once I was
          able to support myself, but after some stressful self-discussion I
          presented myself with a solution:
        </p>
        <p>Why not just switch the order and do tech first?</p>
        <p>
          And so I did, signing up for a full-stack web development course with
          the University of Richmond at the tail-end of 2023.
        </p>
        <p>Easily one of the best decisions I've ever made.</p>
        <p>
          And now I'm here: still a few months fresh after finishing that course
          and extremely eager to not only put my newfound skills to use, but to
          add on to my ever-expanding repertoire!
        </p>
        <p>OH. AND I GUESS I'LL WRITE ABOUT IT HERE TOO LOL.</p>
      </div>
    </div>
  );
}
