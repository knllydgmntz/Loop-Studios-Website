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
      <div className="relative container max-w-6xl mx-auto px-6 py-12">
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
              } relative z-10 hamburger md:hidden focus:outline-none`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        <div className="aboslute top-0 right-0 p-10 bg-red">aweee</div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`${
            toggle ? "max-h-72" : "max-h-0"
          } absolute top-0 left-0 flex-col self-end  w-full text-lg text-white uppercase bg-black/90 overflow-hidden transition-all ease-in-out duration-300`}
        >
          <div className="flex flex-col mt-24 items-start justify-center p-4">
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
