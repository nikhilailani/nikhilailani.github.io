import React from "react";
import '../css/skill.css';
import htmlimage from '../images/html-5.png'
import cssimage from '../images/css-3.png'
import jsimage from '../images/javascript.png'
import mongoimgae from '../images/mongo.png'
import gitimage from '../images/github.png'
import reactimage from '../images/react.png'
import premimage from '../images/premier.png'
import expimage from '../images/express.png'
import nodeimage from '../images/nodejs.png'
import bootsimage from '../images/bootstrap.png'

const Skill = () => {
    return (
        <div id="skills">
            <div className="skill-section">
                <div className="skill-container">
                    <div className="skill-section-heading">
                        <h1>Things I am good at!</h1>
                    </div>
                    <div className="skills-items">
                        <div className="skill-items-container">
                            <div className="skill-item-box">
                                <div className="skill-item-box-logo html-bg">
                                    <img src={htmlimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">
                                    <h1>HTML5</h1>    
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo css-bg">
                                <img src={cssimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name ">
                                    <h1>CSS3</h1>    
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo js-bg">
                                    <img src={jsimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">    
                                    <h1>JavaScript</h1>
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo boots-bg">
                                    <img src={bootsimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">    
                                    <h1>Bootstrap</h1>
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo node-bg">
                                    <img src={nodeimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">    
                                    <h1>NodeJs</h1>
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo express-bg">
                                    <img src={expimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">    
                                    <h1>ExpressJs</h1>
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo react-bg">
                                    <img src={reactimage} alt="" />
                                </div>
                                <div className="skill-item-box-name">    
                                    <h1>ReactJs</h1>
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo mongo-bg">
                                    <img src={mongoimgae} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">    
                                    <h1>MongoDB</h1>
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo github-bg">
                                    <img src={gitimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">    
                                    <h1>Github</h1>
                                </div>    
                            </div>

                            <div className="skill-item-box">
                                <div className="skill-item-box-logo prempro-bg">
                                    <img src={premimage} alt="" srcSet="" />
                                </div>
                                <div className="skill-item-box-name">    
                                <h1>Adobe Premiere Pro</h1>
                                </div>    
                            </div>

                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Skill;