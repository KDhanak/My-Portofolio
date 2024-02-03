import React, { useState, useEffect } from "react";
import "./nav.css";

const Navigation = () => {
    const [opacity, setOpacity] = useState(1);
    const [scrolling, setScrolling] = useState(false);
    const scrollThreshold = 1000;
    const scrollThreshold2 = 100;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const newOpacity = Math.max(0, 1 - scrollTop / scrollThreshold);
            setOpacity(newOpacity);

            setScrolling(scrollTop > scrollThreshold2);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const borderColor = scrolling ? "#08d" : "black";
    const borderStyles = { borderBottom: `4px solid ${borderColor}` };
    return (
        <nav className="navigation">
            <div
                className={`nav-container ${scrolling ? "active" : ""}`}
                style={{ backgroundColor: `rgba(48, 50, 69, ${opacity})` }}
            >
                <div>
                    <a style={borderStyles}>Kishan Dhanak</a>
                </div>
                <div>
                    <a style={borderStyles}>Contact</a>
                </div>
                <div>
                    <a style={borderStyles}>Projects</a>
                </div>
                <div>
                    <a style={borderStyles}>Blog</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
