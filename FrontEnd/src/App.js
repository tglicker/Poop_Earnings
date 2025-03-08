import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent"; // Ensure this is correctly imported

function App() {
  return (
    <div>
      <Header />
      <h2>Welcome to the Poop Earnings Tracker!</h2>
      <MainContent />  {/* Make sure this is included */}
      <Footer />
    </div>
  );
}

export default App;
