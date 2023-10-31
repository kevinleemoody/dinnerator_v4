import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import Routes

import MealCard from './components/MealCard';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
          </ul>
        </nav>
        <Routes> {/* Use Routes to define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <MealCard />
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Recipes() {
  return <h2>Recipes</h2>;
}

export default App;




//old code starts here

// import logo from './logo.svg';
// import './App.css';

// import React from 'react';
// import MealCard from './components/MealCard'; // Adjust the import path if needed


// function App() {
//   return (
//     <div>
//       {/* Your existing code */}
//       <MealCard />
//       {/* Other content */}
//     </div>
//   );
// }

// export default App;














