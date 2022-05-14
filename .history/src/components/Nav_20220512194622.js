import React, { useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    let navShowEl = document.querySelector(".nav-show");
    let navHideEl = document.querySelector(".nav-hide");
    if (isNavOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else if (!isNavOpen) {
      document.documentElement.classList.remove("overflow-hidden");
    }
    if (navShowEl) {
      gsap.to(navShowEl, {
        height: "auto",
        ease: "power",
      });
    }
    if (navHideEl) {
      gsap.to(navHideEl, {
        height: 0,
        duration: 0.2,
      });
    }
  }, [isNavOpen]);
  useEffect(() => {
      window.addEventListener(() => {
          
      })
  })
  return (
    <>
      {isNavOpen && (
        <div className="md:hidden bg-black fixed inset-0 bg-opacity-10"></div>
      )}

      <img
        className=" fixed -right-20 -top-20 -z-20 md:max-w-none
        md:-top-56 md:-right-56"
        src="images/bg-tablet-pattern.svg"
        alt=""
      />

      <header className=" ">
        <div className="wrapper py-8 relative md:py-6">
          <div className="flex items-center justify-between gap-10">
            <div className="logo-main relative z-20 mt-2">
              <img src="images/logo.svg" alt="Main Logo" />
            </div>
            <button
              className="ham-btn relative z-20 md:hidden"
              onClick={toggleNav}
            >
              <img
                src={
                  isNavOpen
                    ? "images/icon-close.svg"
                    : "images/icon-hamburger.svg"
                }
                alt="Hamburger Icon"
              />
            </button>
            <nav
              className={`${isNavOpen ? "nav-show" : "nav-hide"} md:!h-auto`}
            >
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </nav>
            <button className="get-start-btn hidden lg:block">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
