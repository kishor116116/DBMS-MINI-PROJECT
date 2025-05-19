import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';  // Import toast

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Response:", res);

      if (res?.data?.token) {
        localStorage.setItem('token', res.data.token);
      }

      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email,
      }));

      if (res?.data?.message) {
        toast.success(res.data.message);
      } else {
        toast.success("Registration successful!");
      }

      navigate("/login");

    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "User already exists");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/image3.webp)' }}
    >
      <div className="bg-gray-400 shadow-md rounded px-8 py-10 w-full max-w-md bg-opacity-20">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 opacity-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 opacity-50"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 opacity-50"
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md transition duration-200 opacity-60"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-300 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-white text-lg font-bold hover:underline hover:text-black">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
