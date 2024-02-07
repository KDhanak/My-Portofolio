import React from "react";
import "./contact.css";
import { useState } from "react";
import axios from "axios";
import ToastNotification from "../../sub-components/Toast-Notification/Toast-Notification";
import { IoIosContact } from "react-icons/io";

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({ full_name: "", email: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData);
            const response = await axios.post(
                "http://localhost:8000/core/api/contact-me/post",
                formData
            );
            resetForm();
            setFormStatus("success");
        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.response) {
                console.log(error.response.data);
            }
            setFormStatus("failure");
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
                            value={formData.full_name}
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
                            value={formData.email}
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
                            value={formData.message}
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
                    {formStatus && (
                        <ToastNotification
                            key={formStatus}
                            message={
                                formStatus === "success"
                                    ? "Form Submitted"
                                    : "Error Occurred"
                            }
                            success={formStatus === "success"}
                        />
                    )}
                </form>
            </div>
        </>
    );
};

export default Contact;
