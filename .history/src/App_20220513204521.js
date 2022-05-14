import React from "react";
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
  useEff
  return (
    <>
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
