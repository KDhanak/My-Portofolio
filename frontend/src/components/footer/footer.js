import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
    console.log("Footer loaded");
    const handleClick = (link) => {
        return () => {
            if (link === "LinkedIn") {
                window.open(
                    "https://www.linkedin.com/in/kishandhanak306/",
                    "_blank"
                );
            }
            if (link === "GitHub") {
                window.open("https://github.com/KDhanak", "_blank");
            }
            if (link === "Instagram") {
                window.open(
                    "https://www.instagram.com/kishan_dhanak/",
                    "_blank"
                );
            }
        };
    };

    return (
        <div className="footer">
            <div className="connect">Let's Connect!</div>

            <div className="icons-container">
                <a role="button" onClick={handleClick("LinkedIn")}>
                    <div className="icon-1">
                        <GrLinkedin />
                    </div>
                </a>
                <a role="button" onClick={handleClick("GitHub")}>
                    <div className="icon-2">
                        <FaGithub />
                    </div>
                </a>
                <a role="button" onClick={handleClick("Instagram")}>
                    <div className="icon-3">
                        <FaInstagramSquare />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Footer;
