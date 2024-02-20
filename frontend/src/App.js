import "./App.css";
import React from "react";
import Navigation from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/project";
import Contact from "./components/contact/contact";
import ScrollTop from "./sub-components/Scroll-Top/Scroll-Top";

function App() {
    console.log("App loaded");
    return (
        <div className="App">
            <div className="scrollTop-component">
                <ScrollTop />
            </div>
            <div className="navigation-component" id="navigation-component">
                <Navigation />
            </div>
            <div className="profile-component" id="profile-component">
                <Profile />
            </div>
            <div className="project-component" id="project-component">
                <Projects />
            </div>
            <div className="contact-component" id="contact-component">
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
