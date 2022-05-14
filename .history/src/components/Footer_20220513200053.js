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
          <div className="mt-10 flex justify-center gap-20">
            <ul className="footer-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
            <ul className="footer-nav">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
              <ul>
                  <li><a href=""></a></li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
