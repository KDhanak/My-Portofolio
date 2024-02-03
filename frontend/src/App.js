import "./App.css";
import React from "react";
import Navigation from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/project";

function App() {
    return (
        <div className="App">
            <div className="navigation-component">
                <Navigation />
            </div>
            <div className="profile-component">
                <Profile />
            </div>
            <div className="project-component">
                <Projects />
            </div>
            <Footer />
        </div>
    );
}

export default App;
