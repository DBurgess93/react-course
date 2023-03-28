import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from "./pages/Home";
// import { Menu } from "./pages/Menu";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
