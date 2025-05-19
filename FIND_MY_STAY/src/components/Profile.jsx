// src/components/Profile.jsx
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            defaultValue="user@example.com"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Phone Number</label>
          <input
            type="text"
            defaultValue="9876543210"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            disabled
          />
        </div>
        
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
