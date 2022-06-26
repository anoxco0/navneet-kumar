import { useSelector } from "react-redux";

import './about.css'
export const About = () => {
  const { theme } = useSelector((store) => store.home);

  return (
    <div id="About" className="about">
      <div>
        <div id="head">About me</div>
        <div
          style={{
            color: theme ? "black" : "white",
          }}
          id="aboutp"
        >
          My name is Navneet Kumar, I am a MERN stack Graduate from Masai
          School, Bengaluru. I'm a MERN Stack Development enthusiast. I realise
          within my first year in college, I am interested in pursuing tech
          skills where I could learn How websites operate?
          <br /> <br />
          My long-term goal goes on through small steps. first I will Master
          this field and I want to see myself as one of the best web Developers.
          I built a lot of web applications and worked on 2 major collaborative
          projects in Masai School and Learned a lot about communication,
          teamwork, and leadership. After months of rigorous training, here I am
          looking for an opportunity as a full-stack web Developer.
        </div>
      </div>
    </div>
  );
};
