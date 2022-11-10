import React from "react";
import '../css/contact.css';
import githubimage from '../images/github.png';
import gmailimage from '../images/gmail.png';
import linkedln from '../images/linkedin.png';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef()
    const [done, setdone] = useState(false)
    const userkey = process.env.React_App_userkey;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(process.env.React_App_servicekey, process.env.React_App_tempkey, formRef.current, userkey)
            .then((result) => {
                console.log(result.text);
                setdone(true);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div id="contact">
            <div className="contact-wrapper">
                <div className="contact-border-line">
                    {/* element that sets line */}
                </div>
                <div className="contact-sections">
                    <div className="contact-right-form-section">
                        <div className="contact-me-heading">
                            <h1>Let's Connect!</h1>
                        </div>
                        <div className="contact-me-desc"></div>
                        <div className="contact-right-part">

                            <div className="right-section-heading">
                                <h1>Connect with me on</h1>
                            </div>
                            <div className="right-section-links">
                                <a href="https://github.com/nikhilailani" className="github-link">
                                    <div className="github-image">
                                        <img src={githubimage} alt="" srcSet="" />
                                    </div>
                                    <p>github</p>
                                </a>
                                <a href="https://linkedin.com/in/nikhil-ailani" className="linkedin-link">
                                    <div className="linkedin-image">
                                        <img src={linkedln} alt="" srcSet="" />
                                    </div>
                                    <p>LinkedLn</p>
                                </a>
                                <a href="mailto: nailani@lakeheadu.ca" className="email-link">
                                    <div className="email-image">
                                        <img src={gmailimage} alt="" />
                                    </div>
                                    <p>Email</p>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="contact-left-form-section">

                        {/* the contact me heading will only visible in the mobile version */}
                        <div className="contact-me-heading-mob connect-mobile-version">
                            <h1>Let's Connect!</h1>
                        </div>

                        <div className="left-section-desc">
                            <p>Get in touch. I am always available to help you. Please provide the service you need in the Subject.</p>
                        </div>
                        <div className="left-form">
                            <form ref={formRef} onSubmit={handleSubmit}>
                            
                                <div className="user-basic-info">
                                    <input type="text" className="form-name" name="user_name" id="" placeholder="Enter your Name" required />
                                    <input type="email" className="form-email" name="user_email" id="" placeholder="Enter your Email" required />
                                </div>
                                <div className="form-subject">
                                    <input type="text" className="form-subject-input" name="user_subject" id="" placeholder=" Subject" required />
                                </div>
                                <div className="form-text">
                                    <textarea name="message" className="form-text-input" id="" rows="10" placeholder=" Message" required></textarea>
                                </div>
                                <div className="btn-msg">
                                    <input type="submit" className="form-submit" value="Send" />
                                    <span className="msg-display">
                                        {done && "Your message has been sent. Thank you."}
                                    </span>
                                </div>

                            </form>

                        </div>


                        {/* this will only visible in less than 700px */}
                        <div className="contact-right-part-mob connect-mobile-version">

                            <div className="right-section-heading-mob">

                            </div>
                            <div className="right-section-links-mob">
                                <a href="https://github.com/nikhilailani" className="github-link">
                                    <div className="github-image">
                                        <img src={githubimage} alt="" srcSet="" />
                                    </div>

                                </a>
                                <a href="https://linkedin.com/in/nikhil-ailani" className="linkedin-link">
                                    <div className="linkedin-image">
                                        <img src={linkedln} alt="" srcSet="" />
                                    </div>

                                </a>
                                <a href="mailto: nailani@lakeheadu.ca" className="email-link">
                                    <div className="email-image">
                                        <img src={gmailimage} alt="" />
                                    </div>

                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;