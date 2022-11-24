import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
