import image from './Navneet.jpg'
import resumepng from './images/resume.png'
import './home.css'

export const Home = ()=>{
    return (
        <div className='mainhome' style={{
           "backgroundColor": "#000000",
            "backgroundImage":"linear-gradient(147deg, #000000 0%, #04619f 74%)",
            }} >
            <div style={{"height":"150px"}}></div>
            <div className='home'>
            <div>
            <img id='profile' src={image} alt="Navneet Kumar" />
            </div>
            <div id='righthome'>
                <div id='greet'>Hi, I'm</div>
                <div id='name'>Navneet Kumar</div>
                <div id='pro'>A Full Stack web Developer</div>
                <div id='personal'>
                    <div className='flex'>
                        <div id='email'>
                        <span className="material-icons-outlined">email</span>
                        </div>
                        <div>navneetharsh3@gmail.com</div>
                    </div>
                    <div className='flex'>
                        <div>
                        <span id='phone' className="material-icons-outlined">call</span>
                        </div>
                        <div>+91 7903259049</div>
                    </div>
                </div>
                <a href={resumepng} download><button id='resume'>Resume</button></a>
            </div>
        </div>
        <div id='expand'><span id='expand_more' className="material-icons-outlined">expand_more</span></div>
        </div>
    )
}