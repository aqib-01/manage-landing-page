import React from "react";

const Intro = () => {
  return (
    <section className="mt-10">
      <div className="wrapper">
        <div className="md:flex">
          <div className="md:order-2">
            <img
              className="block mx-auto"
              src="images/illustration-intro.svg"
              alt=""
            />
          </div>
          <div className="mt-5 text-center">
            <h1 className="text-very-dark-blue font-bold  text-4xl">
              Bring everyone together to build better products.
            </h1>
            <p className="mt-3 text-lg text-dark-grayish-blue ">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="get-start-btn  mx-auto my-6 block">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
