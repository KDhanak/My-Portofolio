import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import { SiOpenproject } from "react-icons/si";

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/core/api/project"
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="heading">
                <div className="heading-icon">
                    <SiOpenproject />
                </div>
                <h1 className="heading-h1">Projects</h1>
            </div>
            <div className="project-container">
                {data.map((data, i) => (
                    <div key={i} className="project">
                        <div className="project-image-container">
                            <img
                                alt="Project"
                                src={`http://localhost:8000/${data.project_display}`}
                                className="project-image"
                            />
                        </div>
                        <div className="project-synopsis-container">
                            <h2>{data.project_name}</h2>
                            <p className="project-synopsis">
                                {data.project_synopsis}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
