import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PoopTracker from "./components/PoopTracker"; // Use PoopTracker

function App() {
  return (
    <div>
      <Header />
      <PoopTracker />
      <Footer />
    </div>
  );
}

export default App;
