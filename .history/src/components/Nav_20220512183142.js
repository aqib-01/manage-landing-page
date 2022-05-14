import React, { useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="py-8">
      <div className="px-4">
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
  );
};

export default Nav;
