import React from "react";
import "./nav.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoIosContact } from "react-icons/io";
import { LiaBloggerB } from "react-icons/lia";
import { SiOpenproject } from "react-icons/si";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const Navigation = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <nav className="navigation">
                <div className="nav-container">
                    <div className="nav-button">
                        <Link
                            to="contact-component"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div className="nav-icon-1">
                                <IoIosContact />
                            </div>
                            Contact
                        </Link>
                    </div>
                    <div className="nav-button">
                        <Link
                            to="project-component"
                            spy={true}
                            smooth={true}
                            offset={700}
                            duration={500}
                        >
                            <div className="nav-icon-2">
                                <SiOpenproject />
                            </div>
                            Projects
                        </Link>
                    </div>
                    <div className="nav-button">
                        <a role="button">
                            <div className="nav-icon-3">
                                <LiaBloggerB />
                            </div>
                            Blog
                            <HiArrowTopRightOnSquare className="blog-mini-icon" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
