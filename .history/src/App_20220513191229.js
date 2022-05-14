import React from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Simplify from "./components/Simplify";
import Testimonials from "./components/Testimonials";
import WhatDifferent from "./components/WhatDifferent";

const App = () => {
  return (
    <>
      <div className="nav-intro-sect">
        <Nav />

        <Intro />
      </div>

      <WhatDifferent />
      <Testimonials />
      <Simplify />
      <Footer></Footer>
    </>
  );
};

export default App;
