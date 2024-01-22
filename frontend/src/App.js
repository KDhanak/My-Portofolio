import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/core/api/profile`
                );
                setData(response.data);
                console.log(response.data[0].profile_image);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            {data.map((data, i) => (
                <img
                    className="profile-image"
                    key={i}
                    alt="Profile"
                    src={`http://localhost:8000/${data.profile_image}`}
                />
            ))}
        </div>
    );
}

export default App;
