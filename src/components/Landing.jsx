import './landing.css'
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar"
import { Skill } from './Skill';
import { Project } from './Project';
import { Contact } from './Contact';
import { useEffect, useState } from 'react';

export const Landing = () => {
    const [theme, setTheme] = useState(true)

    useEffect(()=>{
        document.title=theme;
    })
    const themeHandle = () =>{
        if(theme===true) return setTheme(false)
        return setTheme(true);
    }
    return (
            <div style={{
                "backgroundColor": theme?"#2a2a72":"#485461",
                "backgroundImage":theme?"linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)":"linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}>
            <div
              onClick={themeHandle}
            >
                {theme?<span id='day' style={{"color":theme?"black":""}} className="material-icons-outlined">dark_mode</span>:
                <span id='day' style={{"color":theme?"":"white"}} className="material-icons-outlined">light_mode</span>}
            </div>
            <Navbar colors={theme?["#2a2a72","#009ffd"]:["#485461","#28313b"]} />
            <Home />
            <About />
            <Skill />
            <Project />
            {/* <Contact /> */}
        </div>
    )
}

// background-color: #485461;
// background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
