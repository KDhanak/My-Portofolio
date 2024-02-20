import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";

const Profile = () => {
    console.log("Profile Loaded");
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/core/api/profile"
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
                                <h1>Welcome! </h1>
                                <br />

                                <p>
                                    Thanks for visiting my domain. I am Kishan
                                    Dhanak. I have been interested and working
                                    in web-development, specially the
                                    backend-part for the past 2 years.
                                    <br />
                                    <br />
                                    <h3 style={{ color: "white" }}>
                                        Education:
                                    </h3>
                                    I have finished my undergarduation from
                                    Federation University Australia in
                                    Information & Communication Technology.
                                </p>
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
