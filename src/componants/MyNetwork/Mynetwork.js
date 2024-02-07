// LoadingPage.js
import React from "react";
import { BsLinkedin } from "react-icons/bs";   // Assuming you have the LinkedIn logo in your assets folder

const MyNetwork = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <BsLinkedin className="w-16 h-16 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Build in Progress
      </h1>
      <p className="text-gray-600">
        Please wait while we prepare the page for you...
      </p>
    </div>
  );
};

export default MyNetwork;
