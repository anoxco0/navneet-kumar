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
          My name is Navneet Kumar, I am a MERN stack graduate from Masai
          School, Bengaluru. I'm a MERN Stack Development enthusiast. I realize
          within my first year in college, I am interested in pursuing tech
          skill where I could learn web development?
          <br /> <br />
          My long-term goal goes on through small steps. first I will master
          this field and I want to see myself as one of the best web developer.
          I built a lot of web applications and worked on 3 major collaborative
          projects in Masai School and Learned a of things like: communication, time-management, and
          teamwork. After months of rigorous training, here I am
          looking for an opportunity as a full-stack web developer.
        </div>
      </div>
    </div>
  );
};
