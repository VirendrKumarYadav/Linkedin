import React, { useState } from "react";
import { BsLinkedin, BsSearch, BsHouseDoorFill ,BsFillChatDotsFill,BsFillBellFill} from "react-icons/bs";
import { IoBagHandle } from "react-icons/io5";

import { MdPeopleAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Home.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="nav-container p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center items-center gap-3 rounded-lg">
            <BsLinkedin className="logo-icon-light text-4xl" />
            <div className="search-container flex p-1 justify-center items-center gap-2 rounded-lg">
              <BsSearch className="" />
              <input
                placeholder="Serach"
                className=" input-search w-64 max-w-64"
              ></input>
            </div>
          </div>
          <a href="/" className="text-white text-2xl font-bold"></a>

          {/* Menu icon for mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.01 3.41L3.42 2l6.36 6.36L16.14 2l1.41 1.41L11.2 10.78l5.19 5.19-1.41 1.42L9.79 12.2l-7.37 7.36-1.41-1.41L8.38 11.79 2.01 5.41l1.41-1.42z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 6H4V5h16v1zM4 11h16v-1H4v1zm16 4H4v-1h16v1z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div
            className={`lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex ">
              <Link to="" className="text-black px-4 py-2">
                {" "}
                <span className=" flex flex-col justify-center items-center">
                  <BsHouseDoorFill className="nav-icon" />
                  <span className="nav-icon-text"> Home</span>
                </span>
              </Link>
              <Link to="" className="text-black px-4 py-2">
                {" "}
                <span className=" flex flex-col justify-center items-center">
                  <MdPeopleAlt className="nav-icon" />
                  <span className="nav-icon-text"> My Network</span>
                </span>
              </Link>

              <Link to="" className="text-black px-4 py-2">
                {" "}
                <span className=" flex flex-col justify-center items-center">
                  <IoBagHandle className="nav-icon" />
                  <span className="nav-icon-text"> Jobs</span>
                </span>
              </Link>
              <Link to="" className="text-black px-4 py-2">
                {" "}
                <span className=" flex flex-col justify-center items-center">
                  <BsFillChatDotsFill className="nav-icon" />
                  <span className="nav-icon-text"> Massaging</span>
                </span>
              </Link>
              <Link to="" className="text-black px-4 py-2">
                {" "}
                <span className=" flex flex-col justify-center items-center">
                  <BsFillBellFill className="nav-icon" />
                  <span className="nav-icon-text"> Notification</span>
                </span>
              </Link>
              <Link to="" className="text-black px-4 py-2">
                {" "}
                <span className=" flex flex-col justify-center items-center">
                  <img className="nav-icon" src=""></img>
                  <span className="nav-icon-text">Me</span>
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
