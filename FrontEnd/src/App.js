import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SalaryInput from "./components/SalaryInput";
import PoopTimer from "./components/PoopTimer";
import EarningsDisplay from "./components/EarningsDisplay";

function App() {
  return (
    <div>
      <Header />
      <SalaryInput />
      <PoopTimer />
      <EarningsDisplay />
      <Footer />
    </div>
  );
}

export default App;
