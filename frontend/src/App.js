import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/index");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return <div className="App">{data}</div>;
}

export default App;
