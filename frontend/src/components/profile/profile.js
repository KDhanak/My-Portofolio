import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";

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
        "React",
        "Django",
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
        <>
            <div className="profile">
                {data.map((data, i) => (
                    <div key={i} className="container">
                        <div className="image-container">
                            <img
                                className="profile-image"
                                alt="Profile"
                                src={`http://localhost:8000/${data.profile_image}`}
                            />
                        </div>
                        <div className="synopsis-container">
                            <div className="synopsis-content">
                                <h1>Howdy! </h1>
                                <br />

                                <p>
                                    Thanks for visiting this page. I am Kishan
                                    Dhanak. I have been interested and working
                                    in web-development, specially the
                                    frontend-part for the last 2 years. Feel
                                    free to surf through the portfolio and
                                    interesting projects.
                                </p>
                                <br />
                                <br />

                                <h1>Skills</h1>
                                <div className="skills-container">
                                    {headings.map((heading, index) => (
                                        <div key={index} className="skills">
                                            <h4>{heading}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Profile;
