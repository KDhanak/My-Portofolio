import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons-container">
                <div className="icon">
                    <GrLinkedin />
                    <FaInstagramSquare />
                </div>
            </div>
        </div>
    );
};

export default Footer;
