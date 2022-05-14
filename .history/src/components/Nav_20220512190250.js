import React, { useEffect, useState } from "react";
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
    if (navShowEl) {
      gsap.to(navShowEl, {
        height: "auto",
      });
    }
    if (navHideEl) {
      gsap.to(navHideEl, {
        height: 0,
      });
    }
  }, [isNavOpen]);
  return (
    <>
      {isNavOpen && 
          {setTimeout(() => {
   return  (<div className="bg-black fixed inset-0 bg-opacity-10"></div>
          }, 1000)}
       
      }

      <header className=" ">
        <div className="wrapper py-8 relative">
          <div className="flex items-center justify-between">
            <div className="logo-main relative z-20">
              <img src="images/logo.svg" alt="Main Logo" />
            </div>
            <button className="ham-btn relative z-20 " onClick={toggleNav}>
              <img
                src={
                  isNavOpen
                    ? "images/icon-close.svg"
                    : "images/icon-hamburger.svg"
                }
                alt="Hamburger Icon"
              />
            </button>
            <nav className={isNavOpen ? "nav-show" : "nav-hide"}>
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
