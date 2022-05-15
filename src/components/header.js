
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../assets/css/header.css";

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };
    return (
        <div>
            <div className="Header-main width-men">
                <header className="Header">
                    <img src={require("../assets/images/logo-1 1.png")} className="Logo" alt="logo" />
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a href="/" className="w-400">About Us</a>
                            <a href="/" className="w-400">Services</a>
                            <a href="/" className="w-400">Team</a>
                            <a href="/" className="w-400">Clients</a>
                            <a href="/" className="w-400">Contact Us</a>
                        </nav>
                    </CSSTransition>
                    <button onClick={toggleNav} className="Burger">
                    <span class="iconify" data-icon="charm:menu-hamburger"></span>
                    </button>
                </header>
            </div>
        </div>
    );

}
