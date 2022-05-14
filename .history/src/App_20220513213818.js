import React, { useEffect } from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Simplify from "./components/Simplify";
import Testimonials from "./components/Testimonials";
import WhatDifferent from "./components/WhatDifferent";
import Footer from "./components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useEffect(() => {
    // gsap.from(".box", {
    //   x: -100,
    //   scrollTrigger: ".box",
    // });
    //gsapAnimation();
    gsap.from(".build-together-sect .get-start-btn", {
      y: 200,
      scrollTrigger: ".build-together-sect .get-start-btn",
    });
  }, []);
  return (
    <>
      <>
        
        <div className="box h-20 w-20 bg-black mt-96"></div>
      </>
      <div className="nav-intro-sect">
        <Nav />

        <Intro />
      </div>

      <WhatDifferent />
      <Testimonials />
      <Simplify />
      <Footer />
    </>
  );
};

export default App;
