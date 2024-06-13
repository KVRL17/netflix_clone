import React, { useEffect, useState } from "react";
import loggo from './2.png';
import './Navbar.css';

const Navbar = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1200px-Netflix_logo.svg.png?20220504140802" alt="ramana netflix logo" />
            <img className="nav_avatar" src={loggo} alt="ramana logo" />
        </div>
    );
}

export default Navbar;
