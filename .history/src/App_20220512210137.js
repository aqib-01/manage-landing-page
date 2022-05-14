import React from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import WhatDifferent from "./components/WhatDifferent";

const App = () => {
  return (
    <>
      <div>
        <Nav />

        <Intro />
      </div>

      <WhatDifferent />
    </>
  );
};

export default App;
