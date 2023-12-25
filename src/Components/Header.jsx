import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    // Add scroll event listener to track scrolling
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`text-gray-600 body-font nav bg-white fixed top-0 w-full z-10 backdrop-blur-md bg-opacity-10 ${
        isSticky ? 'border-b border-blue-300' : ''
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-auto inline-flex items-center justify-start bg-transparent border-0 p-0 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-8 h-8 text-gray-900"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Logo */}
        <a className="hidden cursor-pointer md:flex flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-auto md:mr-auto md:ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>

        {/* ... Rest of the code remains unchanged ... */}
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col items-start text-base justify-center w-full">
            <a className="mb-2 hover:text-gray-900">First Link</a>
            <a className="mb-2 hover:text-gray-900">Second Link</a>
            <a className="mb-2 hover:text-gray-900">Third Link</a>
            <a className="mb-2 hover:text-gray-900">Fourth Link</a>
          </nav>
        )}

        {/* Desktop Menu */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:flex">
          <a className="cursor-pointer mr-5 hover:text-gray-900">First Link</a>
          <a className="cursor-pointer mr-5 hover:text-gray-900">Second Link</a>
          <a className="cursor-pointer mr-5 hover:text-gray-900">Third Link</a>
          <a className="cursor-pointer mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>

        {/* Login Button */}
        <button
          className="bg-blue-500 hidden cursor-pointer md:flex  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
