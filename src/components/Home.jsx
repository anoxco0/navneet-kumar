import image from "./Navneet.png";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./Navbar/Navbar";
import { setTheme } from "../redux/home/action";
import { About } from "./About/About";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

export const Home = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.home);
  

  const themeHandle = () => {
    if (theme === true) return dispatch(setTheme(false));
    dispatch(setTheme(true));
  };

  return (
    <div
      style={{
        backgroundColor: theme ? "#b8c6db" : "#485461",
        backgroundImage: theme
          ? "linear-gradient(315deg, #f5f7fa 0%, #b8c6db 74%)"
          : "linear-gradient(315deg, #485461 0%, #28313b 74%)",
        color: theme ? "" : "white",
      }}
    >
      <div onClick={themeHandle}>
        {theme ? (
          <span
            id="day"
            style={{ color: theme ? "black" : "" }}
            className="material-icons-outlined"
          >
            dark_mode
          </span>
        ) : (
          <span
            id="day"
            style={{ color: theme ? "" : "white" }}
            className="material-icons-outlined"
          >
            light_mode
          </span>
        )}
      </div>
      <Navbar />
      <div id="Home" className="mainhome">
        <div id="hmain">
          <div className="home">
            <div id="profilediv">
              <img
                style={{
                  backgroundColor: theme ? "#2a2a72" : "#485461",
                  backgroundImage: theme
                    ? "linear-gradient(315deg, #f5f7fa 0%, #b8c6db 74%)"
                    : "linear-gradient(315deg, #485461 0%, #28313b 74%)",
                }}
                id="profile"
                src={image}
                alt="Navneet Kumar"
              />
            </div>
            <div id="righthome">
              <div id="greet">Hi, I'm</div>
              <div id="name">Navneet Kumar</div>
              <div id="pro">A Full Stack web Developer</div>
              <button
                id="resume"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1y7ZQjKyC_U8i2B9InqmfSEYhzaUFSBPd/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
};
