import './footer.css';

export const Footer = ({colors}) =>{

    return (
        <div  className='footer' style={{"color":colors[0], "backgroundColor":colors[1]}}>Created by Navneet Kumar | © 2022 All rights reserved</div>
    )
}