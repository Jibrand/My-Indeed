import React, { useState,useRef,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardPage1 from './DasboardContent';

const DashboardPage = () => {
  const dropdownRef = useRef(null);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
const navigate=useNavigate()
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeDropdownOnOutsideClick);
    };
  }, []);

  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100">
  <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
    <div className="bg-white shadow-md p-4 mb-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="relative" ref={dropdownRef}>
          <button
            className="  hidden cursor-pointer md:flex   text-white font-bold rounded-full focus:outline-none focus:shadow-outline-blue  "
            onClick={toggleDropdown}
          >
            <img
              className="w-10 h-10 rounded-full mr-2"
              src="https://placekitten.com/100/100" // Replace with your avatar image source
              alt="User Avatar"
            />

          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg overflow-hidden transition-transform transform scale-100 md:scale-110">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  // Handle dashboard click
                  navigate('/');
                }}
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  // Handle logout click
                  setDropdownOpen(false);
                }}
              >
                Logout
              </a>
            </div>
          )}
        </div>

    
    </div>
    <div className="flex p-6">
      <div className="flex-1 pr-4">
        {/* Your dashboard content goes here */}
        <DashboardPage1 />
      </div>
     
    </div>
  </div>
</div>

    </>
  );
};

export default DashboardPage;
