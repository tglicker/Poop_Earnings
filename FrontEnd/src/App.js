import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <h2>Welcome to the Poop Earnings Tracker!</h2>
            <Footer />
        </div>
    );
}

export default App;
