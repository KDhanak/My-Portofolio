import React from "react";
import "./contact.css";
import { useRef } from "react";
import axios from "axios";
import ToastNotification from "../../sub-components/Toast-Notification/Toast-Notification";
import { IoIosContact } from "react-icons/io";

const Contact = () => {
    console.log("Contact Loaded");
    const formStatusRef = useRef(null);
    const full_nameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "full_name") {
            full_nameRef.current = value;
        } else if (name === "email") {
            emailRef.current = value;
        } else if (name === "message") {
            messageRef.current = value;
        }
    };

    const resetForm = () => {
        full_nameRef.current = "";
        emailRef.current = "";
        messageRef.current = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log({
                full_name: full_nameRef.current,
                email: emailRef.current,
                message: messageRef.current,
            });

            const response = await axios.post(
                "http://localhost:8000/core/api/contact-me/post",
                {
                    full_name: full_nameRef.current,
                    email: emailRef.current,
                    message: messageRef.current,
                }
            );

            resetForm();
            formStatusRef.current = "success";
        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.response) {
                console.log(error.response.data);
            }
            formStatusRef.current = "failure";
        }
    };

    return (
        <>
            <div className="contact-heading">
                <div className="nav-icon-1">
                    <IoIosContact />
                </div>
                <h1 className="heading-h1">Get in Touch</h1>
            </div>
            <div className="contact">
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-container ic1">
                        <input
                            id="full_name"
                            name="full_name"
                            className="input"
                            type="text"
                            placeholder=" "
                            onChange={handleInputChange}
                        />
                        <div className="cut"></div>
                        <label htmlFor="full_name" className="placeholder">
                            Full Name
                        </label>
                    </div>
                    <br />
                    <div className="input-container ic2">
                        <input
                            id="email"
                            name="email"
                            className="input"
                            type="text"
                            placeholder=" "
                            onChange={handleInputChange}
                        />
                        <div className="cut"></div>
                        <label htmlFor="email" className="placeholder">
                            Email
                        </label>
                    </div>
                    <br />
                    <div className="input-container ic3">
                        <textarea
                            id="message"
                            name="message"
                            className="input"
                            placeholder=" "
                            onChange={handleInputChange}
                            rows={4}
                        />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder">
                            Let me know your thoughts..
                        </label>
                    </div>
                    <button type="submit" className="submit">
                        Submit
                    </button>
                    {formStatusRef.current && (
                        <ToastNotification
                            key={formStatusRef.current}
                            message={
                                formStatusRef.current === "success"
                                    ? "Form Submitted"
                                    : "Error Occurred"
                            }
                            success={formStatusRef.current === "success"}
                        />
                    )}
                </form>
            </div>
        </>
    );
};

export default Contact;
