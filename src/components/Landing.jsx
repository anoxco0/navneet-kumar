import './landing.css'
import { useState } from "react"
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar"
import { Skill } from './Skill';

export const Landing = () => {
    const [time, setTime] = useState(true);
    const idHandle = (data)=>{
         
    }
    return (
        <div>
            <Navbar idHandle={idHandle} />
            <Home />
            <About />
            <Skill />
        </div>
    )
}