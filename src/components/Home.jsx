import image from './Navneet.jpg'
import './home.css'

export const Home = ()=>{
    return (
        <div className='mainhome' style={{
           "background-color": "#000000",
            "background":"linear-gradient(147deg, #000000 0%, #04619f 74%)",
            }} >
            <div style={{"height":"150px"}}></div>
            <div className='home'>
            <div>
            <img src={image} alt="Navneet Kumar" />
            </div>
            <div id='righthome'>
                <div id='greet'>Hi, I'm</div>
                <div id='name'>Navneet Kumar</div>
                <div id='pro'>A Full Stack web Developer</div>
                <div id='personal'>
                    <div className='flex'>
                        <div id='email'>
                        <span class="material-icons-outlined">email</span>
                        </div>
                        <div>navneetharsh3@gmail.com</div>
                    </div>
                    <div className='flex'>
                        <div>
                        <span id='phone' class="material-icons-outlined">call</span>
                        </div>
                        <div>+91 7903259049</div>
                    </div>
                </div>
            </div>
        </div>
        <div id='expand'><span id='expand_more' class="material-icons-outlined">expand_more</span></div>
        </div>
    )
}

// background-color: #abe9cd;
// background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
