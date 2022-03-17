import './landing.css'
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar"
import { Skill } from './Skill';
import { Project } from './Project';
import { Contact } from './Contact';

export const Landing = () => {
    const idHandle = (data)=>{
         
    }
    return (
        <div style={{
            "backgroundColor": "#63a4ff",
             "backgroundImage":"linear-gradient(deg, #63a4ff 0%, #83eaf1 74%)",
             }}>
            <Navbar idHandle={idHandle} />
            <Home />
            <About />
            <Skill />
            <Project />
            {/* <Contact /> */}
        </div>
    )
}

// background-color: #63a4ff;
// background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);