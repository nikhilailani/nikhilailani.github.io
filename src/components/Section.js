import React from 'react';
import '../css/section.css'
import animimage from '../images/anil.png'
import { Link } from "react-router-dom";
const Section = () =>{
    return(
            <div className="container">
                <div className="left-section">
                    
                    <div className="text-content">
                        <h1>Hello! I am</h1>
                        <h1 className='name'>Nikhil Ailani</h1>

                       
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">UI/UX Designer</div>
                                <div className="i-title-item">Writer</div>
                                <div className="i-title-item">Video Editor</div>
                               
                            </div>
                        </div>
                        <div className="i-desc">
                            I am passionate about creating websites and new technology. Currently based on Jaipur Rajasthan.
                        </div>
                    </div>

                    <div className="cv-button">
                        <Link to="/contact" className='download-cv'>HIRE ME</Link>
                    </div>

                   
                        
                </div>


                <div className="right-section">
                    <div className="i-bg"></div>    
                </div>
                    <div className="home-image">
                        <img src={animimage} className='port-image' alt="" />
                    </div>                

               

            </div>
    
    )
}

export default Section;