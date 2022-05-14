import React from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
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
    </>
  );
};

export default App;
