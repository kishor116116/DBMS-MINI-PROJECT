import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
import '../Login.scss';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:5000/api/users/login', {
      email,
      password
    });

    // If login is successful and token is received
    if (res?.data?.token) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify({ email }));
      toast.success("Login successful! Redirecting...");
      navigate('/');
    } else {
      toast.error("Login failed. Please try again.");
    }

  } catch (err) {
    toast.error(err.response?.data?.message || "Login not successful");
  }
};


  

  const handleForgotPassword = () => {
    alert("Password reset link has been sent to your email.");
  };

  return (
    <div className=" login-page flex justify-center items-center min-h-screen bg-cover bg-center  " >
      <div className="snow"></div>
      <div className="bg-gray-600 bg-opacity-40 p-8 rounded-3xl shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white rounded-3xl opacity-50"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 px-4 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-white opacity-50"
            required
          />
          <div className="text-right text-sm mb-4">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-black hover:text-white "
            >
              Forgot Password?
            </button>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-3xl opacity-60">
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-300">
          New user?{" "}
          <Link to="/signup" className="text-black  hover:text-white">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;