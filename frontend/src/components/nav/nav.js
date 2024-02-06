import React, { useState, useEffect } from "react";
import "./nav.css";
import { IoIosContact } from "react-icons/io";
import { LiaBloggerB } from "react-icons/lia";
import { SiOpenproject } from "react-icons/si";

const Navigation = () => {
    // const [opacity, setOpacity] = useState(1);
    // const [scrolling, setScrolling] = useState(false);
    // const scrollThreshold = 1000;
    // const scrollThreshold2 = 100;

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.scrollY;

    //         const newOpacity = Math.max(0, 1 - scrollTop / scrollThreshold);
    //         setOpacity(newOpacity);

    //         setScrolling(scrollTop > scrollThreshold2);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    const handleClick = (i) => {
        switch (i) {
            case 0:
                return "Home";
                break;

            case 1:
                return "Contact-Me";
                break;

            case 2:
                return "Projects";
                break;

            case 3:
                return "Blog";
                break;

            default:
                return "Home";
        }
    };

    return (
        <>
            <nav className="navigation">
                <div
                    // className={`nav-container ${scrolling ? "active" : ""}`}
                    // style={{ backgroundColor: `rgba(10,10,46, ${opacity})` }}

                    className="nav-container"
                >
                    <div>
                        <a role="button" onClick={handleClick(1)}>
                            Contact
                        </a>
                    </div>
                    <div>
                        <a role="button" onClick={handleClick(2)}>
                            Projects
                        </a>
                    </div>
                    <div>
                        <a role="button" onClick={handleClick(3)}>
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
