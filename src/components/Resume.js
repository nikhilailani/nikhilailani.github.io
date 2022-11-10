import React from "react";
import '../css/resume.css';

const Resume = () => {
    return (
        <div id="resume">
            <div className="resume-wrapper">
                <div className="resume-heading">
                    <h1>Resume</h1>
                    
                </div>
                <div className="resume-content">
                    <div className="resume-exp-edu-section">

                        <div className="resume-exp">
                            <div className="exp-heading">
                                <h1>WORK EXPERIENCE</h1>
                            </div>
                            <div className="exp-content">
                                <div className="exp-place-heading">
                                    <h1>Freelancing</h1>
                                </div>
                                <div className="exp-place-content">
                                    <p>I have been working as freelancer since 2021 in the field of web development and in content writing. </p>
                                </div>
                                
                                <div className="exp-place-heading">
                                    <h1>Nodejs Developer</h1>
                                </div>
                                <div className="exp-place-content">
                                        <p>ITAIMS</p>
                                        <p>May 2021 - May 2021 1 Month</p>
                                        <p>Achieved 110% of the target given by the company in the web development.</p>    
                                </div>
                            </div>
                        </div>
                        <div className="resume-edu">
                        <div className="exp-heading">
                                <h1>EDUCATION</h1>
                            </div>
                            <div className="exp-content">
                                <div className="exp-place-heading">
                                    <h1>Dhirubhai Ambani Institute of  Information and Communication Technology</h1>
                                </div>
                                <div className="exp-place-content">
                                    <p>MscIT, Information Technology</p>
                                    <p>2021-present</p>
                                   
                                </div>
                                
                                <div className="exp-place-heading">
                                    <h1>Birla Institute of Technology Mesra,
                                        Jaipur Campus</h1>
                                </div>
                                <div className="exp-place-content">
                                        <p>BCA, Computer Science</p>
                                        <p>2018 - 2021</p>
                                </div>

                                <div className="exp-place-heading">
                                    <h1>Bharatiya Vidya Bhavan Vidyashram,
                                        Pratap Nagar Jaipur</h1>
                                </div>
                                <div className="exp-place-content">
                                        <p>HSC (12th) - 2018</p>
                                        <p>SSC (10th) - 2016</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}

export default Resume;