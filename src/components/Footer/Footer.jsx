import { useSelector } from 'react-redux';
import './footer.css';
export const Footer = ()=>{
    const {theme} = useSelector(store=>store.home);
    return(
        <div
        className="footer"
        style={
          theme
            ? { color: "black", backgroundColor: "#b8c6db" }
            : { color: "#FFFFFF", backgroundColor: "#485461" }
        }
      >
        Created by Navneet Kumar | © 2022 All rights reserved
      </div>
    )
}