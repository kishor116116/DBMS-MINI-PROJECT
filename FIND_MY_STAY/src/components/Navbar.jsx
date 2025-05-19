import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <div className="w-full bg-gray-100 fixed left-0 top-0 z-50 shadow-md">
            <div className="bg-gray-200 px-2 md:px-4 py-2 flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-6 lg:ml-6">
                    <div className="flex items-center gap-2 md:gap-3">
                        <img src="img1.png" alt="Logo" className="w-8 md:w-10" />
                        <div className="text-sm  md:text-2xl font-semibold">FIND MY STAY</div>
                    </div>
                    <Link to="/" className="text-sm md:text-base font-medium md:font-bold w-16 md:w-20 h-8 md:h-10 hover:bg-gray-300 rounded-lg flex items-center justify-center">
                        Home
                    </Link>
                    <Link to="/about" className="text-sm md:text-base font-medium md:font-bold w-16 md:w-24 h-8 md:h-10 hover:bg-gray-300 rounded-lg flex items-center justify-center">
                        About
                    </Link>
                </div>
                <div className="flex items-center gap-2 md:gap-4 lg:mr-6">
                    <Link
                        to="/contact"
                        className="text-sm md:text-base font-medium md:font-bold w-16 md:w-28 h-8 md:h-10 rounded-lg bg-gray-700 text-white hover:bg-gray-500 hover:shadow flex justify-center items-center"
                    >
                        Contact
                    </Link>

                    {!isLoggedIn ? (
                        <Link
                            to="/login"
                            className="text-sm md:text-base font-medium md:font-bold w-16 md:w-24 h-8 md:h-10 bg-gray-600 text-white rounded-lg hover:bg-gray-500 hover:shadow flex justify-center items-center"
                        >
                            Login
                        </Link>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="text-sm md:text-base font-medium md:font-bold w-16 md:w-24 h-8 md:h-10 bg-gray-700 text-white rounded-lg hover:bg-gray-500 hover:shadow"
                        >
                            Logout
                        </button>
                    )}

                    {user && user.email && (
                        <div className="text-sm md:text-lg font-bold bg-gray-700 text-white w-8 md:w-10 h-8 md:h-10 rounded-full flex justify-center items-center">
                            {user.email.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
