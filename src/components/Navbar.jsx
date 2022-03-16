import { useEffect, useState } from 'react'
import'./navbar.css'

export const Navbar=({idHandle})=>{
    const [nav, setNav] = useState(true);
    const [matches, setMatches]=useState(
       window.matchMedia("(min-width:546px)").matches
    )
    useEffect(()=>{
       window.matchMedia("(min-width:545px)").addEventListener('change', e=>
       setMatches(e.matches));
    },[])
    const handleNav = () => {
       if(nav===true) return setNav(false)
      return setNav(true);
    }
    return (
         <div >
           <div id='menu' onClick={handleNav}>
              {nav?"":<span className="material-icons-outlined">menu</span>}
           </div>
          <div
              className="navbar" 
              style={{
                 "backgroundImage": "linear-gradient(to right, rgba(255, 255, 255, 0.315), #398AB9)",
                 "display":matches?"block":nav?"block":"none",
            }
            }>
          <div>
          <div id='close' onClick={handleNav}>
              {nav?<span id='span' className="material-icons-outlined">close</span>:""}
           </div>
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
               idHandle("contact");
            }}>contact</button>
          </div>
          </div>
        </div>
    )
}