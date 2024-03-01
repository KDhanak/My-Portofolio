import React from "react";
import "./nav.css";
import { Link } from "react-scroll";
import { IoIosContact } from "react-icons/io";
import { LiaBloggerB } from "react-icons/lia";
import { SiOpenproject } from "react-icons/si";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { IoMdDocument } from "react-icons/io";
import apiUrlFunction from "../../utils/apiLogic";

const Navigation = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiURL = apiUrlFunction();
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
                        <a
                            role="button"
                            href={`${apiURL}/blog`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="nav-icon-3">
                                <LiaBloggerB />
                            </div>
                            Blog
                            <HiArrowTopRightOnSquare className="blog-mini-icon" />
                        </a>
                    </div>
                    <div className="nav-button">
                        <a
                            role="button"
                            href="https://drive.google.com/drive/folders/1Xwt57h37RfmaYYnMfnqh6vyug6miTZUT?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="nav-icon-4">
                                <IoMdDocument />
                            </div>
                            Resume/Certificates
                            <HiArrowTopRightOnSquare className="blog-mini-icon" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
