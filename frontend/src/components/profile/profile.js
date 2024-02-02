import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
import Contact from "../contact/Contact";

const Profile = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/core/api/profile`
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const headings = [
        "Django",
        "React",
        "PostreSQL",
        "HTML",
        "CSS",
        "TailwindCSS",
        "JavaScript",
        "Node.js",
        "Deno",
        "REST API",
        "MYSQL",
        "AWS",
        "Docker",
        "Postman",
    ];

    return (
        <main className="profile">
            {data.map((data, i) => (
                <>
                    <div className="container">
                        <div className="image-container">
                            {/* <h1>My Skills</h1> */}
                            <img
                                className="profile-image"
                                key={i}
                                alt="Profile"
                                src={`http://localhost:8000/${data.profile_image}`}
                            />
                        </div>
                        <div class="infinity-symbol">
                            <div className="synopsis-container">
                                <div className="synopsis-content">
                                    <h1>Skills</h1>
                                    <br />
                                    <div className="skills-container">
                                        {headings.map((heading, index) => (
                                            <div key={index} className="skills">
                                                <h4>{heading}</h4>
                                            </div>
                                        ))}
                                    </div>
                                    <h1>Howdy! </h1>
                                    <p>
                                        Thanks for visiting this page. I am
                                        Kishan Dhanak. I have been interested
                                        and working in web-development,
                                        specially the backend-part for the last
                                        2 years. Feel free to surf through the
                                        portfolio and interesting projects.
                                    </p>
                                </div>
                                <div className="contact-container">
                                    <Contact />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </main>
    );
};

export default Profile;
