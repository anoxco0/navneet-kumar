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
        <div>
            <Navbar idHandle={idHandle} />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
        </div>
    )
}