import "./App.css";
import React from "react";
import Navigation from "./components/nav/nav";
import HomeSection from "./components/home-section/home-section";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";

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
