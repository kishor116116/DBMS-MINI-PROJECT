import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: `DOB: ${formData.dob}\nMessage: ${formData.message}`
      });
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        message: ""
      });
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>9876543210</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-500" />
              <span>stayconnect@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>
                RH-210, Arkavathy Layout,<br />
                11th Block Rachenahalli Village Bengaluru
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First"
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last"
              className="p-3 border rounded-md w-full"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="p-3 border rounded-md w-full"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="DOB: XXX-XXX-XXXX"
            className="p-3 border rounded-md w-full"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message ..."
            rows="4"
            className="p-3 border rounded-md w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
