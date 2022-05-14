import React from "react";

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue py-10">
      <div className="wrapper">
        <div>
          <div>
            <div>
              <input
                className="w-full px-6 rounded-full py-3 focus:shadow"
                type="text"
                placeholder="Updates in your inbox..."
              />
              <button className="get-start-btn">Go</button>
            </div>

            <button></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;