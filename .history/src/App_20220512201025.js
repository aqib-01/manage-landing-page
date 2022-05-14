import React from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import WhatDifferent from "./components/WhatDifferent";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Intro />
        <WhatDifferent />
      </main>
    </>
  );
};

export default App;
