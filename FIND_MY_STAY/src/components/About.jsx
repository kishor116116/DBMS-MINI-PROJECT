import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-20">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
        About Find My Stay
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 space-y-6 md:space-y-0">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src="img4.jpg"
            alt="Comfortable accommodation offered by Find My Stay"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text content */}
        <div className="md:w-1/2 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Find My Stay is your trusted platform for finding the perfect
            accommodation tailored to your needs. Whether you're a student,
            professional, or traveler, our mission is to make your search easy,
            transparent, and hassle-free.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            We carefully curate listings to ensure quality stays with all the
            amenities you want. Our dedicated support team is always ready to
            help you find the best options within your budget.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Join thousands of happy users who have found their ideal stay with
            us. We're committed to making every stay a great experience.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wide Selection */}
        <div className="text-center p-4 bg-green-100 rounded-lg shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-3 h-16 w-16 text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 4l9 5.75v9.5A2.75 2.75 0 0118.25 22h-12A2.75 2.75 0 013 19.25v-9.5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 22V12h6v10"
            />
          </svg>
          <h3 className="font-semibold text-lg mb-1">Wide Selection</h3>
          <p className="text-gray-600">
            Thousands of verified properties to choose from.
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="text-center p-4 bg-green-100 rounded-lg shadow">
          <img
            src="https://img.icons8.com/ios-filled/64/000000/customer-support.png"
            alt="24/7 Support"
            className="mx-auto mb-3"
          />
          <h3 className="font-semibold text-lg mb-1">24/7 Support</h3>
          <p className="text-gray-600">
            We're here to assist you anytime with any questions.
          </p>
        </div>

        {/* Secure Booking */}
        <div className="text-center p-4 bg-green-100 rounded-lg shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-3 h-16 w-16 text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect
              width="18"
              height="14"
              x="3"
              y="8"
              rx="2"
              ry="2"
              fill="none"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8V6a5 5 0 0110 0v2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12v4"
            />
          </svg>
          <h3 className="font-semibold text-lg mb-1">Secure Booking</h3>
          <p className="text-gray-600">
            Your information and payments are safe with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
