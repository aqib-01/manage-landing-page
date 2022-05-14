import React, { useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="py-8">
      <div className="container">
        <div className="logo-main">
          <img src="images/logo.svg" alt="" />
        </div>
        <button className="ham-btn">
          <img
            src={
              isNavOpen ? "images/icon-close.svg" : "images/icon-hamburger.svg"
            }
            alt=""
          />
        </button>
      </div>
    </header>
  );
};

export default Nav;