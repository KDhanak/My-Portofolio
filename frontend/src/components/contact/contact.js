import React from "react";
import "./Contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("", formData);
            console.log("Form submitted successfully", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="subtitle">Get in Touch</div>
                <div className="input-container ic1">
                    <input
                        id="fullname"
                        name="fullname"
                        className="input"
                        type="text"
                        placeholder=" "
                        value={formData.fullname}
                        onChange={handleInputChange}
                    />
                    <div className="cut"></div>
                    <label htmlFor="fullname" className="placeholder">
                        Full Name
                    </label>
                </div>
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
            </form>
        </>
    );
};

export default Contact;
