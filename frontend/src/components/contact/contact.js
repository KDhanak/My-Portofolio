import React from "react";
import "./contact.css";
import { useState } from "react";
import axios from "axios";
import ToastNotification from "../../sub-components/Toast-Notification/Toast-Notification";
import { IoIosContact } from "react-icons/io";
import { BarLoader } from "react-spinners";
import apiUrlFunction from "../../utils/apiLogic";

const Contact = () => {
    console.log("Contact Loaded");
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_BASE_URL;
    const [formStatus, setFormStatus] = useState();
    const [formFields, setFormFields] = useState({
        full_name: "",
        email: "",
        message: "",
    });
    const [validationError, setValidationError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormFields((prevFormFields) => ({
            ...prevFormFields,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { full_name, email, message } = formFields;

        if (!full_name.trim() || !email.trim() || !message.trim()) {
            setValidationError("*All fields are required*");
            return false;
        }
        if (!isValidEmail(email)) {
            setValidationError("Invalid email address");
            return false;
        }

        setValidationError(null);
        return true;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiURL = apiUrlFunction();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(
                `${apiURL}/core/api/contact-me/post`,
                formFields,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setFormStatus("success");

            setFormFields({
                full_name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.response) {
                console.log(error.response.data);
            }
            setFormStatus("failure");
        } finally {
            setLoading(false);
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
                            placeholder=""
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                        <div className="cut"></div>
                        <label htmlFor="full_name" className="placeholder">
                            Full Name*
                        </label>
                    </div>
                    <br />
                    <div className="input-container ic2">
                        <input
                            id="email"
                            name="email"
                            className="input"
                            type="text"
                            placeholder=""
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                        <div className="cut"></div>
                        <label htmlFor="email" className="placeholder">
                            Email*
                        </label>
                    </div>
                    <br />
                    <div className="input-container ic3">
                        <textarea
                            id="message"
                            name="message"
                            className="input"
                            placeholder=""
                            onChange={handleInputChange}
                            rows={4}
                            disabled={loading}
                        />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder">
                            Let me know your thoughts*..
                        </label>
                    </div>
                    <button type="submit" className="submit" disabled={loading}>
                        {loading ? "Submitting... " : "Submit"}
                    </button>
                    {loading && <BarLoader color="#36d7b7" width={280} />}
                    {validationError && (
                        <div className="validation-error">
                            {validationError}
                        </div>
                    )}
                </form>
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
            </div>
        </>
    );
};

export default Contact;
