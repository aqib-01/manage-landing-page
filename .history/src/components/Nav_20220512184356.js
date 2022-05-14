import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      {isNavOpen && (
        <div className="bg-black fixed inset-0 bg-opacity-40 z-10"></div>
      )}

      <header className="py-8 bg-white">
        <div className="wrapper">
          <div className="flex items-center justify-between">
            <div className="logo-main relative z-20">
              <img src="images/logo.svg" alt="Main Logo" />
            </div>
            <button className="ham-btn relative z-20" onClick={toggleNav}>
              <img
                src={
                  isNavOpen
                    ? "images/icon-close.svg"
                    : "images/icon-hamburger.svg"
                }
                alt="Hamburger Icon"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
