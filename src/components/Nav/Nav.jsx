import React from "react";
import logo from '../../assets/navbar_logo2.jpeg';
import './Nav.css';
import { FaGithub } from "react-icons/fa";

const Nav = () => {

    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="test-logo" src={logo} alt="logo" />
                <p className="test-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-github-link"
                    href="https://github.com/TheFirmFirewall?tab=repositories"
                    rel="noreferrer"
                    >
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Nav;