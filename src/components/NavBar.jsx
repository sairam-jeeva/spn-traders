import React, { useState } from "react";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  // State for Mobile Menu Toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-indigo-800 shadow-md py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-[100px]">
            <img src={logo} className="h-[50px]" alt="Logo" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-white font-medium hover:underline hover:underline-offset-4 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white font-medium hover:underline hover:underline-offset-4 transition duration-300"
            >
              About Us
            </a>
            <a
              href="/products"
              className="text-white font-medium hover:underline hover:underline-offset-4 transition duration-300"
            >
              Products
            </a>
            <a
              href="/careers"
              className="text-white font-medium hover:underline hover:underline-offset-4 transition duration-300"
            >
              Careers
            </a>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-white text-indigo-600 text-[18px] font-medium px-6 py-2 rounded-xl shadow hover:bg-gray-200 hover:text-indigo-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-indigo-800 text-white min-h-screen absolute inset-x-0 top-16 shadow-md z-50">
            <div className="flex flex-col justify-center space-y-6 px-6 py-4">
              <a
                href="/"
                className="font-medium text-lg text-center hover:text-indigo-300 transition duration-300"
              >
                Home
              </a>
              <a
                href="/products"
                className="font-medium text-lg text-center hover:text-indigo-300 transition duration-300"
              >
                Products
              </a>
              <a
                href="/services"
                className="font-medium text-lg text-center hover:text-indigo-300 transition duration-300"
              >
                Services
              </a>
              <a
                href="/about"
                className="font-medium text-lg text-center hover:text-indigo-300 transition duration-300"
              >
                About Us
              </a>
              <a
                href="/careers"
                className="font-medium text-lg text-center hover:text-indigo-300 transition duration-300"
              >
                Careers
              </a>
              <a
                href="/contact-us"
                className="bg-white text-indigo-600 text-center font-medium text-lg px-6 py-2 rounded-md shadow hover:bg-gray-200 hover:text-indigo-600 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
