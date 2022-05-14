import React from "react";

const Nav = () => {
  return (
    <header className="py-8">
      <div className="container">
        <div className="logo-main">
          <img src="images/logo.svg" alt="" />
        </div>
        <button className="ham-btn">
          <img src="images/icon-hamburger.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
