// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ForgotPassword from "./components/Forgotpassword";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Bengaluru from "./components/bengaluru";
import Mysuru from "./components/mysuru";
import Manglore from "./components/Manglore";
import Hassan from "./components/Hassan";
import Chikkaballapur from "./components/Chikkaballapur";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import ProtectedRoute from "./components/ProtectedRoute";






const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      try {
        const result = JSON.parse(data);
        setUser(result);
      } catch (err) {
        console.error("Invalid JSON in localStorage:", err);
      }
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bengaluru" element={<ProtectedRoute><Bengaluru /></ProtectedRoute>} />
        <Route path="/Mysuru" element={<ProtectedRoute><Mysuru /></ProtectedRoute> }/>
        <Route path="/Manglore" element={<ProtectedRoute><Manglore /></ProtectedRoute>} />
        <Route path="/Hassan" element={<ProtectedRoute><Hassan /></ProtectedRoute>} />
        <Route path="/Chikkaballapur" element={<ProtectedRoute><Chikkaballapur /></ProtectedRoute>} />
        <Route path="/Book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
