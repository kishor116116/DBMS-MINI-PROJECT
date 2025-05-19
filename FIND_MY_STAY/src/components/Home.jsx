// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const [activeTab, setActiveTab] = useState("Common");
  const tabData = {
    "Common": ["Laundry", "wifi", "CCTV", "Guard", "Transport", "Washing-Machine", "Terrace", "WashRoom", "Table"],
    "Room": ["Beds", "Laundry", "WashRoom", "Almirah", "Chairs", "Geyser", "Toilet", "Fridge", "MicroWave", "Table"],
    "Services": ["Geyser", "CCTV", "Housekeeping", "Transport", "wifi"],
    "Food": ["Snacks", "Meals", "Fruits"],
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  

  return (
    <>
      
      <div className=" image relative w-full h-[600px] bg-cover bg-center bg-no-repeat pt-16" style={{ backgroundImage: `url('/img4.jpg')` }}>
        <div className="absolute top-20 left-1/4   text-white ">
          <h1 className="text-5xl font-bold ml-20">Welcome to Find My Stay</h1>
          <p className="text-2xl mt-4 ml-36 font-semibold">Wherever you want; Whenever you need.</p>
        </div>
      </div>
      <div className=" box h-36 mx-20 my-6 bg-pink-100 flex">
        <div className="1 w-1/4 h-full border-r border-gray-400 ">
          <div className="icon pl-5 pt-8 flex">
            <div className="w-20 h-20 bg-gray-300 flex rounded-full justify-center items-center"><img src="home.png" alt="" className="w-12 h-12 " /></div>
            <div className="font-semibold pl-4  ">
              <div className="text1 text-2xl text-gray-500 mb-4">Properties</div>
              <div className="text2 text-4xl text-orange-500">5+</div>
            </div>
          </div>
        </div>
        <div className="1 w-1/4 h-full border-r border-gray-400 ">
          <div className="icon pl-5 pt-8 flex">
            <div className="w-20 h-20 bg-gray-300 flex rounded-full justify-center items-center"><img src="home2.png" alt="" className="w-12 h-12 " /></div>
            <div className="font-semibold pl-4  ">
              <div className="text1 text-2xl text-gray-500 mb-4">Happy Tenants</div>
              <div className="text2 text-4xl text-orange-500">1000+</div>
            </div>
          </div>
        </div>
        <div className="1 w-1/4 h-full border-r border-gray-400 ">
          <div className="icon pl-5 pt-8 flex">
            <div className="w-20 h-20 bg-gray-300 flex rounded-full justify-center items-center"><img src="Bed.png" alt="" className="w-12 h-12 " /></div>
            <div className="font-semibold pl-4  ">
              <div className="text1 text-2xl text-gray-500 mb-4">Beds</div>
              <div className="text2 text-4xl text-orange-500">1000+</div>
            </div>
          </div>
        </div>
        <div className="1 w-1/4 h-full  ">
          <div className="icon pl-5 pt-8 flex">
            <div className="w-20 h-20 bg-gray-300 flex rounded-full justify-center items-center"><img src="pin.png" alt="" className="w-12 h-12 " /></div>
            <div className="font-semibold pl-4  ">
              <div className="text1 text-2xl text-gray-500 mb-4">Location</div>
              <div className="text2 text-4xl text-orange-500">3+</div>
            </div>
          </div>
        </div>
      </div>
      <div className="location  h-60 m-20 px-20  ">
        <div className="font-bold flex text-4xl pb-10">Start Your Stay by Choosing a City.......</div>
        <div className="loc gap-24 flex px-20">
        <Link to="/Bengaluru"className="c1 bg-slate-400 w-32 h-32 rounded-full  items-center cursor-pointer">
            <img src="/img5.webp" alt="" className="rounded-full  w-32 h-32" />
            <span className="flex justify-center font-semibold text-xl">Bengaluru</span>
          </Link>
          <Link to="/Mysuru" className="c1 bg-slate-400 w-32 h-32 rounded-full  items-center cursor-pointer">
            <img src="/img6.jpg" alt="" className="rounded-full  w-32 h-32" />
            <span className="flex justify-center font-semibold text-xl">Mysuru</span>
          </Link>
          <Link to="/Manglore" className="c1 bg-slate-400 w-32 h-32 rounded-full  items-center cursor-pointer">
            <img src="/img7.jpg" alt="" className="rounded-full  w-32 h-32" />
            <span className="flex justify-center font-semibold text-xl">Manglore</span>
          </Link>
          <Link to="/Hassan" className="c1 bg-slate-400 w-32 h-32 rounded-full  items-center cursor-pointer">
            <img src="/img8.jpg" alt="" className="rounded-full  w-32 h-32" />
            <span className="flex justify-center font-semibold text-xl">Hassan</span>
          </Link>
          <Link to="/Chikkaballapur" className="c1 bg-slate-400 w-32 h-32 rounded-full  items-center cursor-pointer">
            <img src="/img9.jpg" alt="" className="rounded-full  w-32 h-32" />
            <span className="flex justify-center font-semibold text-xl">Chikkaballapur</span>
          </Link>
        </div>
      </div>
      <div className="info mx-36 h-auto ">
        <div className="head justify-center flex font-semibold text-4xl mb-20">What Makes FindMyStay different ?</div>
        <div className="firstrow gap-5 flex pb-5">
          <div className="first border-4 border-dotted  border-red-800 w-1/3 h-56 rounded-lg p-5 bg-pink-100">
            <img src="img10.webp" alt="" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold text-xl mb-1 text-red-900">Smart KYC</h3>
            <p className="text-gray-600">One click KYC within 30 seconds valid through all EazyPG properties</p>
          </div>
          <div className="first border-4 border-dotted  border-red-800 w-1/3 h-56 rounded-lg p-5 bg-pink-100">
            <img src="img11.webp" alt="" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold text-xl mb-1 text-red-900">Exclusive tenant membership</h3>
            <p className="text-gray-600">One membership that gives you an exclusive access to amazing benefits which differentiates us from rest of the places.</p>
          </div>
          <div className="first border-4 border-dotted  border-red-800 w-1/3 h-56 rounded-lg p-5 bg-pink-100">
            <img src="img12.webp" alt="" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold text-xl mb-1 text-red-900">Digital payment</h3>
            <p className="text-gray-600">Now handle rent payments digitally with smart receipts and earn rewards on every rent payment.</p>
          </div>
        </div>
        <div className="firstrow gap-5 flex pb-5">
          <div className="first border-4 border-dotted  border-red-800 w-1/3 h-56 rounded-lg p-5 bg-pink-100">
            <img src="img13.webp" alt="" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold text-xl mb-1 text-red-900">Tenant smart app</h3>
            <p className="text-gray-600">Stay 10X better with a smart app that makes your stay frictionless.</p>
          </div>
          <div className="first border-4 border-dotted  border-red-800 w-1/3 h-56 rounded-lg p-5 bg-pink-100">
            <img src="img14.webp" alt="" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold text-xl mb-1 text-red-900">Tenant insurance</h3>
            <p className="text-gray-600">Stay smart with our complimentary tenant insurance plan, which ensures a safer stay.</p>
          </div>
          <div className="first border-4 border-dotted  border-red-800 w-1/3 h-56 rounded-lg p-5 bg-pink-100">
            <img src="img15.webp" alt="" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold text-xl mb-1 text-red-900">Faster complaint resolution</h3>
            <p className="text-gray-600">Make your stay hassle-free with 10X faster complaint resolution with our tenant smart app</p>
          </div>
        </div>
      </div>

      <div className="aminities    mt-10">
        <div className="name font-sans font-semibold text-5xl flex justify-center mb-10">Our Amenities......</div>
        <div className="p-4 mx-20  ">
          {/* Tabs Navigation */}
          <div className="flex space-x-16 justify-center mx-10 mb-10 text-xl font-bold  ">
            {["Common", "Room", "Services", "Food"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-2xl transition-all duration-300 w-1/4 h-24 border-2 ${activeTab === tab
                  ? "bg-gradient-to-r from-red-900 to-red-200 text-white font-semibold shadow-xl hover:border-black"
                  : "bg-white text-gray-800  hover:border-red-900"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-gray-100 p-4  rounded-xl shadow-inner">
            <ul className="grid grid-cols-4 gap-4 text-gray-700">
              {tabData[activeTab].map((amenity, index) => (
                <li key={index} className="flex items-center space-x-3 h-40  rounded-lg p-2 bg-white">
                  <div className="rounded-full w-24 h-24 bg-gray-300 flex items-center justify-center">
                    {/* Image for each amenity */}
                    <img src={`/${amenity.toLowerCase()}.png`} alt={amenity} className="w-16 h-16 " /></div>
                  <span className="font-mono font-semibold text-lg">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <div className="  m-20">
        <div className="font-serif font-semibold flex justify-center text-4xl pb-5">About FindMyStay......</div>
        <div className=" bg-gray-200  py-16 flex rounded-2xl">
          <img src="img4.jpg" alt="" className="w-1/2 h-80 rounded-3xl ml-10 " />
          <p className="w-1/2 p-10 text-lg ">Welcome to a life of simplicity and comfort at Find My Stay,
            discover the comfort and convenience at Find my stay, located
            near Nandi hills. Our well-appointed accommodations offer
            amenities like 24/7 hot water, security guards, lifts, power backup,
            dedicated parking, and an on-site laundry room. Whether you're a professional
            or a student, experience hassle-free living with us.</p>
        </div>
      </div>
      <div className="footer  bg-gray-200 flex mb-5">
        <div className="left w-1/2 relative m-12">
          <div className="head ">
            <span className="font-mono font-semibold text-2xl">Findmystay</span>
            <p className="pt-2 text-gray-600">Findmystay provides a wide range of options from hostels,
              PGs to studio apartments to fully furnished flats.
              Have a look at our properties and choose for yourself.</p>
          </div>
          <div className="flex gap-8">
            <div className="insta  mt-52 w-40 h-16 flex bg-blue-200 rounded-xl gap-2 justify-center items-center  "><p className="text-lg font-semibold">Follow on</p>
              <a href="https://www.instagram.com/k__i__s__h__o__r__7" className="hover:underline "><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="30" height="30" /></a>
            </div>
            <div className="insta  mt-52 w-40 h-16 flex bg-blue-200 rounded-xl gap-2 justify-center items-center  "><p className="text-lg font-semibold">Connect with</p>
              <a href="https://www.linkedin.com/in/kishor-a-8a4a13297" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" height="30" /></a>
            </div>
          </div>
        </div>
        <div className="right ml-32 mt-12 mr-12">
          <div className="links">
            <span className="font-semibold text-3xl "> Useful Links</span>
            <div className="grid  grid-cols-2 gap-x-28 gap-y-4 py-5">
              <a href="" className="hover:underline">About Us</a>
              <a href="" className="hover:underline">Cantact Us</a>
              <a href="" className="hover:underline">Properties</a>
              <a href="" className="hover:underline">privacy Policy</a>
              <a href="" className="hover:underline">terms & Conditions</a>
            </div>
          </div>
          <div className="contct">
            <span className="font-semibold text-3xl "> Contact Us</span>
            <div className="flex gap-1 pt-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
            </svg>RH-210, Arkavathy Layout, 11th Block Rachenahalli Village Bengaluru
            </div>
            <div className="flex gap-1 pt-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
              <span className="flex items-center">stayconnect@example.com</span>
            </div>
            <div className="flex gap-1 pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l2 4-2 2a16 16 0 006 6l2-2 4 2v2a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z" />
              </svg><span>9876543210</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
