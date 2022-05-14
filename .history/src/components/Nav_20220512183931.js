import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    gsap.from(".box", {
      x: -100,
      scrollTrigger: {
          tare
      },
    });
  }, []);
  return (
    <header className="py-8 mt-56">
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
      <div className="box w-20 h-20 bg-blue-200 mt-96"></div>
    </header>
  );
};

export default Nav;
