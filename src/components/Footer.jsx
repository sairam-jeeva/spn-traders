import React from "react";
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <footer className="bg-indigo-800 text-gray-300 py-12">
      <div className="container mx-auto px-5 lg:px-20 flex flex-col md:flex-row justify-between items-start">
        {/* Logo and About Section */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="h-16 w-16 mb-4" />
          <h2 className="text-2xl font-bold text-white">SPN Traders</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Empowering individuals to reach their full potential <br /> through
            knowledge, skills, and inspiration.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start mr-24">
          <h3 className="text-[20px] font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors">
                Our Products
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white transition-colors">
                Our Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-white pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
