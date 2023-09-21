import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../Home/SideBar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navbar bg-custom-black text-white">
      {/* Navbar start */}
      <div className="navbar-start">
        <Link className="md:hidden">Menu</Link>

        <div
          className={`dropdown ${showMenu ? "visible" : ""} `}
          onClick={toggleMenu}
        >
          <label
            tabIndex={0}
            className="btn btn-ghost md:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <div
            className={`fixed inset-y-0 right-0 w-1/2 bg-custom-gray z-50 transform ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out `}
          >
            <div className="flex justify-end p-4 mt-4">
              <button className="text-white" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="text-center p-4 text-black font-bold ">
              <div className="mt-5  hover:text-blue-600 ">
                <Link to="/">Home</Link>
              </div>
              <div className="mt-5 hover:text-blue-600">
                <Link to="/about">About</Link>
              </div>
              <div className="mt-5 hover:text-blue-600">
                <Link to="/block">Block</Link>
              </div>
              <div className="mt-5 hover:text-blue-600">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar start end */}

      {/* center part */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className=" hover:text-blue-600 " to="/">Home</Link>
          </li>
          <li>
            <Link className=" hover:text-blue-600 " to="/about">About</Link>
          </li>
          <li>
            <Link className=" hover:text-blue-600 " to="/block">Block</Link>
          </li>
          <li>
            <Link className=" hover:text-blue-600 " to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}

      <div className="navbar-end">
        <Link className="md:hidden">Sidebar</Link>
        <div className={`dropdown ${showSidebar ? "visible" : ""}`}>
          <label
            tabIndex={0}
            className="btn btn-ghost md:hidden"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <div
            className={`fixed inset-y-0 left-0 w-1/2 bg-custom-blue-gray  z-50 transform ${
              showSidebar ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="text-center p-4 text-black font-bold ">
              <div className="flex justify-end p-4">
                <button className="text-white" onClick={toggleSidebar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <SideBar></SideBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
