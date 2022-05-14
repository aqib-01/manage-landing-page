import React from "react";

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue py-16">
      <div className="wrapper">
        <div>
          <div className="flex items-stretch">
            <div className="flex-1">
              <input
                className="w-full px-6 rounded-full py-3"
                type="text"
                placeholder="Updates in your inbox..."
              />
            </div>

            <button className="get-start-btn ml-2">Go</button>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
