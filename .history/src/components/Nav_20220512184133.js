import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    {
        isNavOpen && 
    }
      <div className="bg-nav"></div>
      <header className="py-8">
        <div className="wrapper">
          <div className="flex items-center justify-between">
            <div className="logo-main">
              <img src="images/logo.svg" alt="Main Logo" />
            </div>
            <button className="ham-btn">
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
