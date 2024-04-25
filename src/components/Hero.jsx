import { useState } from "react";
import imgLogo from "../assets/images/logo.svg";

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <section id="hero">
      {/* Hero Container */}
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* Menu/Logo Container */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* Logo */}
          <img src={imgLogo} alt="Logo image" />
          {/* Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={clickHandler}
              id="menu-btn"
              type="button"
              className={`${
                toggle ? "open" : ""
              }  z-40 block hamburger md:hidden focus:outline-none`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-0 bottom-0 left-0 flex-col items-center w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black/50 backdrop-blur-sm`}
        >
          <div className="flex flex-col items-center justify-center mx-auto pr-10 gap-5">
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Careers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Support
            </a>
          </div>
        </div>

        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
};

export default Hero;
