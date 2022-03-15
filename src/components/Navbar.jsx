import { useState } from 'react'
import'./navbar.css'

export const Navbar=({idHandle})=>{
       const [val, setVal] = useState("");
    return (
        <div className="navbar" style={{"background-image": "linear-gradient(to right, rgba(255, 255, 255, 0.315), #398AB9)"}}>
           <button onClick={()=>{
               idHandle("home")
           }}>Home</button>
           <button onClick={()=>{
              idHandle("about")
           }}>About</button>
           <button onClick={()=>{
              idHandle("skills")
           }}>Skills</button>
           <button onClick={()=>{
              idHandle("projects")
           }}>Projects</button>
           <button onClick={()=>{
            //  idHandle(contact);
           }}>contact</button>
        </div>
    )
}

// background-color: #000000;
// background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);