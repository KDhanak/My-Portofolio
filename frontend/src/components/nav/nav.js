import React from "react";
import "./nav.css";
import { IoIosContact } from "react-icons/io";
import { LiaBloggerB } from "react-icons/lia";
import { SiOpenproject } from "react-icons/si";

const Navigation = () => {
    const handleClick = (i) => {};

    return (
        <>
            <nav className="navigation">
                <div className="nav-container">
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
