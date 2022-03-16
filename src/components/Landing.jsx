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
            "backgroundColor": "#000000",
             "backgroundImage":"linear-gradient(147deg, #000000 0%, #04619f 74%)",
             }}>
            <Navbar idHandle={idHandle} />
            <Home />
            <About />
            <Skill />
            {/* <Project />
            <Contact /> */}
        </div>
    )
}