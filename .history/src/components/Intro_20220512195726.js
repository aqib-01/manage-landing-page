import React from "react";

const Intro = () => {
  return (
    <section className="mt-10">
      <div className="wrapper">
        <div>
          <div>
            <img
              className="block mx-auto"
              src="images/illustration-intro.svg"
              alt=""
            />
          </div>
          <div className="mt-5">
            <h1 className="text-very-dark-blue font-bold text-center text-4xl">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="get-start-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
