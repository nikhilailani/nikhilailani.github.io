import React,{ useState } from "react";
import '../css/navigation.css'
import { Link } from "react-router-dom";

const Navigation = () =>{

    const [showLinks, setshowLinks] = useState(false);

    return(
        <div className="navigation-wrapper">
            <div className="navigation-link" id={showLinks ? "hidden":""} >
                        <ul onClick={()=> setshowLinks(!showLinks)}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/service'>Service</Link></li>
                            <li><Link to='/skills'>Skills</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                           
                        </ul>
                    </div>
          
            <div className="nav-button" onClick={()=> setshowLinks(!showLinks)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Navigation;
