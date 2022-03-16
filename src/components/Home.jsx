import image from './Navneet.jpg'
import resumepng from './images/resume.png'
import './home.css'

export const Home = ()=>{
    return (
        <div className='mainhome' >
           <div id='hmain'>
           <div className='home'>
            <div id='profilediv'>
            <img id='profile' src={image} alt="Navneet Kumar" />
            </div>
            <div id='righthome'>
                <div id='greet'>Hi, I'm</div>
                <div id='name'>Navneet Kumar</div>
                <div id='pro'>A Full Stack web Developer</div>
                <a href={resumepng} download><button id='resume'>Resume</button></a>
            </div>
        </div>
           </div>
        <div id='expand'><span id='expand_more' className="material-icons-outlined">expand_more</span></div>
        </div>
    )
}