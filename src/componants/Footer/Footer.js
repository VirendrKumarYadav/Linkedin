import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-8 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              About
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Accessibility
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Help Center
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Privacy & Terms
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Advertising
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Business Services
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Get the LinkedIn app
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              More
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
