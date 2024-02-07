import React, { useState, useEffect } from "react";
import "./nav.css";
import { IoIosContact } from "react-icons/io";
import { LiaBloggerB } from "react-icons/lia";
import { SiOpenproject } from "react-icons/si";

const Navigation = () => {
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
                    <div className="nav-button">
                        <a role="button" onClick={handleClick(1)}>
                            <div className="nav-icon-1">
                                <IoIosContact />
                            </div>
                            Contact
                        </a>
                    </div>
                    <div className="nav-button">
                        <a role="button" onClick={handleClick(2)}>
                            <div className="nav-icon-2">
                                <SiOpenproject />
                            </div>
                            Projects
                        </a>
                    </div>
                    <div className="nav-button">
                        <a role="button" onClick={handleClick(3)}>
                            <div className="nav-icon-3">
                                <LiaBloggerB />
                            </div>
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
