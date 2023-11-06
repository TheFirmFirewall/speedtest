import React from "react";
import logo from '../../assets/navbar_logo2.jpeg';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="test-logo" src={logo} alt="logo" />
                <p className="test-logo-text">TpST</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-tff-link"
                    href="https://github.com/TheFirmFirewall?tab=repositories"
                    rel="noreferrer"
                    >
                    TheFirmFirewall
                </a>
            </div>
        </div>
    )
}

export default Nav;