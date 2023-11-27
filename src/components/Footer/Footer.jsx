import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <a 
                href="https://github.com/TheFirmFirewall?tab=repositories" 
                className="footer-link"
                target="_blank"
                rel="noreferrer"
            >
                Check out more of my Github Repositories now!!!
            </a>
        </div>
    )
}

export default Footer;