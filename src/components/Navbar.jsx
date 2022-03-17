import { useEffect, useState } from 'react'
import'./navbar.css'

export const Navbar=({colors})=>{
    const [nav, setNav] = useState(true);
    const [matches, setMatches]=useState(
       window.matchMedia("(min-width:670px)").matches
    )
    useEffect(()=>{
       window.matchMedia("(min-width:670px)").addEventListener('change', e=>
       setMatches(e.matches));
    },[])
    const handleNav = () => {
       if(nav===true) return setNav(false)
      return setNav(true);
    }
    return (
         <div >
           <div id='menu' onClick={handleNav}>
              {nav?"":<span id='menui' className="material-icons-outlined">menu</span>}
           </div>
          <div
              className="navbar" 
              style={{
               "backgroundColor": colors[0],
               "backgroundImage":`linear-gradient(315deg, ${colors[0]} 0%, ${colors[1]} 74%)`,
                 "display":matches?"block":nav?"block":"none",
            }
            }>
          <div>
          <div id='close' onClick={handleNav}>
              {nav?<span id='span' className="material-icons-outlined">close</span>:""}
           </div>
            <button onClick={()=>{
                  ("home")
            }}>Home</button>
            <button onClick={()=>{
               ("about")
            }}>About</button>
            <button onClick={()=>{
               ("skills")
            }}>Skills</button>
            <button onClick={()=>{
               ("projects")
            }}>Projects</button>
            <button onClick={()=>{
               ("contact");
            }}>contact</button>
          </div>
          </div>
        </div>
    )
}