import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = axios.get(
                "http://localhost:8000/core/api/project"
            );
            setData(response.data);
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="project-container">
                <div className="project">
                    <div className="project-image-container"></div>
                    <div className="project-synopsis-container"></div>
                </div>
            </div>
        </>
    );
};

export default Projects;
