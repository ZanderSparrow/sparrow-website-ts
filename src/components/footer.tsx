import React from "react";
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import './footer.css';

const Footer = () => {
    return (
        <div id="sticky-footer">
            <div className="wrap">
                <p>
                    <SocialIcon className="social" network="linkedin" url="https://www.linkedin.com/in/zandersparrow/"/>
                    <SocialIcon className="social" network="github" url="https://github.com/ZanderSparrow"/>
                    Parallax based on <a href="https://codesandbox.io/p/sandbox/vertical-parallax-h1rrv">Vertical Parallax Example</a>
                </p>
            </div>
        </div>
    )
    return <footer></footer>
}

export default Footer;