import React from "react";

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue py-16">
      <div className="wrapper">
        <div>
          <div className="flex items-center">
            <div className="flex-1">
              <input
                className="w-full px-6 rounded-full py-3"
                type="text"
                placeholder="Updates in your inbox..."
              />
            </div>

            <button className="get-start-btn ml-4">Go</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
