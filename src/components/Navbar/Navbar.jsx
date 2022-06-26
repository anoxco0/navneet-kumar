import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";

export const Navbar = () => {
  const [nav, setNav] = useState(true);
  const { theme } = useSelector((store) => store.home);
  const phone = window.matchMedia("(max-width:669px)");

  useEffect(() => {
    if (phone.matches) {
      setNav(false);
    }
  }, [phone.matches]);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width:670px)").matches
  );

  const handleNav = () => {
    if (nav === true) return setNav(false);
    return setNav(true);
  };
  
  useEffect(() => {
    window
      .matchMedia("(min-width:670px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const executeScroll = (id) => {
    const violation = document.getElementById(id);
    window.scrollTo({ top: violation.offsetTop, behavior: "smooth" });
    setNav(false);
  };


  return (
    <div>
      <div id="menu" onClick={handleNav}>
        {nav ? (
          ""
        ) : (
          <span
            id="menui"
            style={{ color: theme ? "Black" : "white" }}
            className="material-icons-outlined"
          >
            menu
          </span>
        )}
      </div>
      <div
        className="navbar"
        style={{
          backgroundColor: theme ? "#2a2a72" : "#485461",
          backgroundImage: theme
            ? "linear-gradient(315deg, #f5f7fa 0%, #b8c6db 74%)"
            : "linear-gradient(315deg, #485461 0%, #28313b 74%)",
          display: matches ? "block" : nav ? "block" : "none",
          zIndex: 2,
        }}
      >
        <div>
          <button id="close" onClick={handleNav}>
            {nav ? (
              <span id="span" className="material-icons-outlined">
                close
              </span>
            ) : (
              ""
            )}
          </button>
          <button
            style={{ color: theme ? "black" : "white" }}
            onClick={() => {
              executeScroll("Home");
            }}
          >
            Home
          </button>
          <button
            style={{ color: theme ? "black" : "white" }}
            onClick={() => {
              executeScroll("About");
            }}
          >
            About
          </button>
          <button
            style={{ color: theme ? "black" : "white" }}
            onClick={() => {
              executeScroll("Skill");
            }}
          >
            Skills
          </button>
          <button
            style={{ color: theme ? "black" : "white" }}
            onClick={() => {
              executeScroll("Project");
            }}
          >
            Projects
          </button>
          <button
            style={{ color: theme ? "black" : "white" }}
            onClick={() => {
              executeScroll("Contact");
            }}
          >
            contact
          </button>
        </div>
      </div>
    </div>
  );
};
