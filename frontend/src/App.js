import "./App.css";
import React from "react";
import Navigation from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import HomeSection from "./components/home-section/Home-Section";

function App() {
    return (
        <div className="App">
            <div className="navigation-component">
                <Navigation />
            </div>
            <div className="home-section-component">
                <HomeSection />
            </div>
            <div className="profile-section-component">
                <Profile />
            </div>
            <Footer />
        </div>
    );
}

export default App;
