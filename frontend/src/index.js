import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/blog/blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="home" element={<App />} />
            <Route path="blog" element={<Blog />} />
        </Routes>
    </BrowserRouter>
);
