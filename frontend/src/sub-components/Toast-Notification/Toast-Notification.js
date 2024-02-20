import React, { useState, useEffect } from "react";
import "./Toast-Notification.css";

const ToastNotification = (props) => {
    const [imageSource, setImageSource] = useState("");
    console.log("toast notification loaded");

    useEffect(() => {
        if (props.message === "Form Submitted") {
            setImageSource("check-circle.svg");
        } else {
            setImageSource("cross-circle3.png");
        }
    }, [props.message]);

    return (
        <>
            <div></div>
            <div className="notification">
                <div className="notification__body">
                    <img
                        src={`assets/${imageSource}`}
                        alt="icon"
                        className="notification__icon"
                    />
                    {props.message}
                </div>
                <div className="notification__progress"></div>
            </div>
        </>
    );
};

export default ToastNotification;
