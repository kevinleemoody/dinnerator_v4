import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import MealCard from "./components/MealCard";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


