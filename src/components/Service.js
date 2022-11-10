import React from "react";
import '../css/service.css'
import webdevimage from '../images/coding.png';
import webdevdesign from '../images/ux.png';
import videodesign from '../images/clapperboard.png';
import appdesign from '../images/smartphone.png';

const Service = () => {
    return (
        <div id="services">
            <div className="services-wrapper">
               
                <div className="services-container">
                    <div className="services-heading">
                        <h1>What I can do for you!</h1>
                    </div>
                    <div className="services-content">
                        <p>Contact me regarding to the any of the services listed below in the contact form.</p>
                    </div>
                    <div className="services-items">

                        <div className="service-webdev">
                            <div className="service-image">
                            <div className="service-img-style">
                                <img src={webdevimage} alt="" srcSet="" />
                                </div>
                            </div>
                            <div className="service-heading">
                                <h1>Web Developer</h1>
                            </div>
                            <div className="service-information">
                                <p>I prefer MERN stack to create websites.
                                    MongoDB, ExpressJs, ReactJs, NodeJs. 
                                </p>
                                </div>

                        </div>
                        <div className="service-webdesign">
                            <div className="service-image">
                            <div className="service-img-style">
                                <img src={webdevdesign} alt="" />
                                </div>
                            </div>
                            <div className="service-heading">
                                <h1>Web Design</h1>
                            </div>
                            <div className="service-information">
                                <p>I use different applications for web designing.
                                    like draw.io.
                                </p>
                            </div>
                        </div>
                        <div className="service-appdesign">
                            <div className="service-image">
                                <div className="service-img-style">
                                    <img src={appdesign} alt="" srcSet="" />
                                </div>
                                
                            </div>
                            <div className="service-heading">
                                <h1>App Design</h1>
                            </div>
                            <div className="service-information">
                                <p>I use different applications for web designing.
                                    like figma, draw.io.
                                </p>
                                </div>
                            
                        </div>
                        <div className="service-videodesign">
                            <div className="service-image">
                            <div className="service-img-style">
                                <img src={videodesign} alt="" />
                                </div>
                            </div>
                            <div className="service-heading">
                                <h1>Video Editing</h1>
                            </div>
                            <div className="service-information">
                                <p>I use different application for editing videos
                                    like Adobe premiere pro for editing videos.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="service-down-container">
                    <div className="service-down-items">
                        <div className="service-box">

                            <div className="service-upper-row">
                                <p>12+</p>
                            </div>
                            <div className="service-lower-row">
                                <h1>Projects</h1>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-upper-row">
                                <p>2 Year+</p>
                            </div>
                            <div className="service-lower-row">
                                <h1>Experience</h1>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-upper-row">
                                <p>10+</p>
                            </div>
                            <div className="service-lower-row">
                                <h1>Happy Clients</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;