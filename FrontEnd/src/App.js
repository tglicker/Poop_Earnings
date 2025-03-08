import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent"; // Ensure this is correctly imported
import PoopTracker from "./components/PoopTracker";

function App() {
  return (
    <div>
      <Header />
      <PoopTracker />  {/* Make sure this is included */}
      <Footer />
    </div>
  );
}

export default App;
