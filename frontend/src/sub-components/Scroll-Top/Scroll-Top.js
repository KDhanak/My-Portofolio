import "./Scroll-Top.css";
import React from "react";
// import { GoMoveToTop } from "react-icons/go";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.onscroll = () => {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
        ) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    };
    return (
        <button
            className="scrollToTopBtn"
            id="scrollToTopBtn"
            onClick={scrollToTop}
        >
            <MdOutlineVerticalAlignTop />
        </button>
    );
};

export default ScrollTop;
