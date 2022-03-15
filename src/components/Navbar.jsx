import'./navbar.css'

export const Navbar=({idHandle})=>{
    return (
        <div >
           <div id='menu'><span class="material-icons-outlined">menu</span></div>
          <div className="navbar" style={{"backgroundImage": "linear-gradient(to right, rgba(255, 255, 255, 0.315), #398AB9)"}}>
          <div>
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