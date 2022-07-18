import { useEffect, useRef, useState } from "react";

import sandesh1 from "../images/Screenshot (1049).png"
import sandesh2 from "../images/Screenshot (1050).png"
import sandesh3 from "../images/Screenshot (1051).png"
import sandesh4 from "../images/Screenshot (1052).png"
import sandesh5 from "../images/Screenshot (1053).png"
import sandesh6 from "../images/Screenshot (1055).png"
import sandesh7 from "../images/Screenshot (1056).png"
import sandesh8 from "../images/Screenshot (1057).png"
import sandesh9 from "../images/Screenshot (1058).png"

import weather2 from "../images/Screenshot (1064).png"
import weather3 from "../images/Screenshot (1065).png"
import weather4 from "../images/Screenshot (1066).png"
import weather5 from "../images/Screenshot (1067).png"

import uber1 from "../images/Screenshot (910).png";
import uber2 from "../images/Screenshot (911).png";
import uber3 from "../images/Screenshot (912).png";
import uber4 from "../images/Screenshot (913).png";
import uber5 from "../images/Screenshot (914).png";
import uber6 from "../images/Screenshot (915).png";
import uber7 from "../images/Screenshot (916).png";
import uber8 from "../images/Screenshot (917).png";
import uber9 from "../images/Screenshot (918).png";

import spec1 from "../images/Screenshot (838).png";
import spec2 from "../images/Screenshot (839).png";
import spec3 from "../images/Screenshot (840).png";
import spec4 from "../images/Screenshot (841).png";
import spec5 from "../images/Screenshot (842).png";
import spec6 from "../images/Screenshot (843).png";

import nykaa1 from "../images/nykaa_homepage.png";
import nykaa2 from "../images/nykaa_signuppage.png";
import nykaa3 from "../images/nykaa_signInpage.png";
import nykaa4 from "../images/nykaa_cartpage.png";
import nykaa5 from "../images/nykaa_menpro.png";

import { MongoDB } from "../svg/MongoDB";
import { Express } from "../svg/Express";
import { React } from "../svg/React";
import { NodeJs } from "../svg/NodeJs";
import { Redux } from "../svg/Redux";
import { HTML } from "../svg/HTML";
import { CSS } from "../svg/CSS";
import { JavaScript } from "../svg/JavaScript";

import "./projects.css";
import { Firebase } from "../svg/Firebase";


export const Projects = () => {
  const sandesh = [sandesh1, sandesh2, sandesh3, sandesh4, sandesh5, sandesh6, sandesh7, sandesh8, sandesh9];
  const weather = [weather2, weather3, weather4, weather5]
  const slides = [spec1, spec2, spec3, spec4, spec5, spec6];
  const nykaa = [nykaa1, nykaa2, nykaa3, nykaa4, nykaa5];
  const uber = [uber1, uber2, uber3, uber4, uber5, uber6, uber7, uber8, uber9];

  const delaysandesh = 3000;
  const delayWeather=3500;
  const delayUber = 4000;
  const delaySlide = 4500;
  const delayNykaa = 4000;
  const [sandeshIndex, setSandeshIndex] = useState(0);
  const [weatherIndex, setWeatherIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [nykaaIndex, setNykaaIndex] = useState(0);
  const [uberIndex, setUberIndex] = useState(0);
  const timeoutRefSandesh = useRef(null);
  const timeoutRefWeather = useRef(null);
  const timeoutRefUber = useRef(null);
  const timeoutRefslide = useRef(null);
  const timeoutRefnykaa = useRef(null);
  const projects = [
    {
      images: sandesh,
      code: "https://github.com/anoxco0/sandesh",
      site: "https://sandesh-navneet.netlify.app",
      demo: "https://drive.google.com/file/d/1cTwF-7G_--R9jIzmtOgP2BbkK0tTxVFN/view?usp=sharing",
      heading: "Sandesh - a chat app",
      paragraphs: [
        "Sandesh is a chat app. where user can login, signup, live chat and personal chat.",
        "This is a solo project.",
        "I build this project by using firebase.",
      ],
      stacks: [
        { stack: <React />, id: "react" },
        { stack: <Redux />, id: "redux" },
        {stack:<CSS/>, id:"css"},
        {stack:<Firebase/>, id:"firebase"}
      ],
      index:sandeshIndex
    },
    {
      images: weather,
      code: "https://github.com/anoxco0/weatherapp",
      site: "https://weatherapp-navneet.netlify.app/",
      demo: "https://drive.google.com/file/d/1UHdFliVgrqPluhlQ8zltooo-Q3ZLuOg8/view?usp=sharing",
      heading: "Weather app - ReactJs",
      paragraphs: [
        "This is a weather app where app takes one permission for loacation and give all weather data related to that place. user can also search for city as he/her wish.",
        "This is a solo project.",
        "I build this project by using ReactJs, Redux, Redux-thunk, CSS.",
      ],
      stacks: [
        { stack: <React />, id: "react" },
        { stack: <Redux />, id: "redux" },
        {stack:<CSS/>, id:"css"},
      ],
      index:weatherIndex
    },
    {
      images: uber,
      code: "https://github.com/anoxco0/ubereats-clone",
      site: "https://ubereats-clone.herokuapp.com/",
      demo: "https://drive.google.com/file/d/1lVeW-frYUli1Jf25ErfxQ399oZmm_EON/view?usp=sharing",
      blog: "https://medium.com/@navneetharsh3/uber-eats-clone-b8894f480dbb",
      heading: "Clone of Uber Eats",
      paragraphs: [
        "Uber Eats is an online food ordering and delivery platform. Users can read menus, reviews and ratings, order, and pay for food",
        "This is a collaborative project.",
        "My area of responsibility in this project is to build the Home page, Login and Signup Page, reusable Navbar, and the API.",
      ],
      stacks: [
        { stack: <MongoDB />, id: "mongo" },
        { stack: <Express />, id: "express" },
        { stack: <React />, id: "react" },
        { stack: <NodeJs />, id: "node" },
        { stack: <Redux />, id: "redux" },
        {stack:<CSS/>, id:"css"},
      ],
      index:uberIndex
    },
    {
      images: slides,
      code: "https://github.com/https://github.com/anoxco0/specmaker-front.git/specmakers.git",
      site: "http://specmaker-front.vercel.app/",
      demo: "https://www.linkedin.com/posts/navneet-kumar-77186721b_project-masaischool-coding-ugcPost-6900148288457105408-o6OV?utm_source=linkedin_share&utm_medium=member_desktop_web",
      blog: "https://medium.com/@poojayadav190618/specsmakers-clone-31c2b070c7fe",
      heading: "Clone of Specmaker",
      paragraphs: [
        "Specmaker is an e-commerce web application of eyeglasses and contact lenses",
        "This is a collaborative project.",
        "My area of responsibility in this project is to build the Home page, Product pages, reusable Navbar, and the API.",
      ],
      stacks: [
        { stack: <HTML />, id: "html" },
        { stack: <CSS />, id: "css" },
        { stack: <JavaScript />, id: "javascript" },
        { stack: <MongoDB />, id: "mongo" },
        { stack: <Express />, id: "express" },
      ],
      index:slideIndex 
    },
    {
      images: nykaa,
      code: "https://github.com/anoxco0/nykaa-fashion.git",
      site: "http://nykaa-fashion-five.vercel.app",
      demo: "https://drive.google.com/file/d/1NqoT8v86ixR13mkRXF8-14D78h71M1EW/view?usp=sharing",
      blog: "https://medium.com/@navneetharsh3/nykaa-fashion-clone-82266d65a3f2",
      heading: "Clone of Nykaa Fashion",
      paragraphs: [
        "Nykaa Fashion is an e-commerce web application of beuty, wellnes and fashion products.",
        "This is a collaborative project.",
        "My area of responsibility in the project was to build the Home page Product pages, login, signup, wishlist, and reusable Navbar.",
      ],
      stacks: [
        { stack: <HTML />, id: "html" },
        { stack: <CSS />, id: "css" },
        { stack: <JavaScript />, id: "javascript" }
      ],
      index:nykaaIndex 
    }
  ];
 
  function resetTimeoutsandesh() {
    if (timeoutRefSandesh.current) {
      clearTimeout(timeoutRefSandesh.current);
    }
  }

  useEffect(() => {
    resetTimeoutsandesh();
    timeoutRefSandesh.current = setTimeout(
      () =>
        setSandeshIndex((prevIndex) =>
          prevIndex === sandesh.length - 1 ? 0 : prevIndex + 1
        ),
      delaysandesh
    );
    return () => {
      resetTimeoutsandesh();
    };
  }, [sandesh.length, sandeshIndex]);

  function resetTimeoutWeather() {
    if (timeoutRefWeather.current) {
      clearTimeout(timeoutRefWeather.current);
    }
  }

  useEffect(() => {
    resetTimeoutWeather();
    timeoutRefWeather.current = setTimeout(
      () =>
        setWeatherIndex((prevIndex) =>
          prevIndex === weather.length - 1 ? 0 : prevIndex + 1
        ),
      delayWeather
    );
    return () => {
      resetTimeoutWeather();
    };
  }, [weather.length, weatherIndex]);
  
  function resetTimeoutuber() {
    if (timeoutRefUber.current) {
      clearTimeout(timeoutRefUber.current);
    }
  }



  useEffect(() => {
    resetTimeoutuber();
    timeoutRefUber.current = setTimeout(
      () =>
        setUberIndex((prevIndex) =>
          prevIndex === uber.length - 1 ? 0 : prevIndex + 1
        ),
      delayUber
    );
    return () => {
      resetTimeoutuber();
    };
  }, [uber.length, uberIndex]);

  function resetTimeoutslide() {
    if (timeoutRefslide.current) {
      clearTimeout(timeoutRefslide.current);
    }
  }

  useEffect(() => {
    resetTimeoutslide();
    timeoutRefslide.current = setTimeout(
      () =>
        setSlideIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delaySlide
    );
    return () => {
      resetTimeoutslide();
    };
  }, [slideIndex, slides.length]);

  function resetTimeoutnykaa() {
    if (timeoutRefnykaa.current) {
      clearTimeout(timeoutRefnykaa.current);
    }
  }
  useEffect(() => {
    resetTimeoutnykaa();
    timeoutRefnykaa.current = setTimeout(
      () => setNykaaIndex((prev) => (prev === nykaa.length - 1 ? 0 : prev + 1)),
      delayNykaa
    );
    return () => {
      resetTimeoutnykaa();
    };
  }, [nykaa.length, nykaaIndex]);

  return (
    <div id="Project" className="project">
      <div style={{ height: "150px" }}></div>
      <div id="head">Projects</div>
      {projects.map((Element, i) => (
        <div id="project1" style={{ marginBottom: "20px" }} key={Element.code+i} >
          <div id="specp1" className="slideshow" style={{position:'relative'}}>
          {/* <div style={{position:'absolute', zIndex:"2", }}><ArrowLeft/></div>
          <div style={{position:'absolute', zIndex:2, margin:'30% 0 0 calc(100% - 24px)'}}><ArrowRight/></div> */}
            <div
              className="slideshowSlider"
              style={{ transform: Element.index?`translate3d(${-Element.index * 100}%, 0, 0)`:""}}
            >
              {Element.images.length>1?Element.images.map((el, index) => (
                <img className="slide" id="Spec1" src={el} alt="" key={el+index} />
              )):""}
            </div>
            
            <div id="comp">
              {Element.code ? (
                <button onClick={() => window.open(Element.code, "_blank")}>
                  Code
                </button>
              ) : (
                ""
              )}
              {Element.site ? (
                <button onClick={() => window.open(Element.site, "_blank")}>
                  Site
                </button>
              ) : (
                ""
              )}
              {Element.demo ? (
                <button onClick={() => window.open(Element.demo, "_blank")}>
                  Demo
                </button>
              ) : (
                ""
              )}
              {Element.blog ? (
                <button onClick={() => window.open(Element.blog, "_blank")}>
                  Blog
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div id="specp2">
            <h1>{Element.heading}</h1>
            {Element.paragraphs.map((ele, inde) => (
              <p key={ele+inde}>{ele}</p>
            ))}
            <div id="stack">
              <div id="builtwith">Built With:</div>
              <div id="stacks">
                {Element.stacks.map((ele , ind) => (
                  <div key={ele.stack+ind} id={ele.id}>{ele.stack}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ height: "150px" }}></div>
    </div>
  );
};
