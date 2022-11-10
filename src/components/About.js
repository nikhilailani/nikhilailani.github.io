import React from "react";
import '../css/about.css'
import aboutimg from '../images/aboutimg.jpg'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div id="about">
            <div className="about-wrapper">
                <div className="about-left-section">

                    <div className="about-heading">
                        <h1>About me</h1>
                    </div>
                    <div className="about-left-image-bg"></div>
                    <div className="about-left-image">
                        <img src={aboutimg} alt="Nikhil Ailani" srcSet="" />
                    </div>
                    


                </div>
                <div className="about-right-section">
                    <div className="about-content">
                        <p>Currently I am doing Masters of Science and communication in IT (MscIT) from Dhirubhai Ambani Institute of Information and Communication Technology Gandhinagar, Gujarat. I have completed my Bachelor of Computer Applications (BCA) from Birla Institute of Technology - Mesra.
                        </p>
                        <p>
                            I am working as a freelancer since 2020 and Currently based in India. And I am passionate about creating new applications.
                        </p>
                    </div>

                    <div className="about-section-button">
                        <div className="about-contact-button">
                            <Link to="/contact" className='contact-me'>Contact Me</Link>
                        </div>
                        <div className="about-download-button">
                            <Link to="/skills" className='download-cv'>My Skills</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;