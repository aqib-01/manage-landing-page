import React from "react";

const WhatDifferent = () => {
  return (
    <section className="mt-24">
      <div className="wrapper">
        <div className="md:flex gap-10 lg:gap-20">
          <div className="text-center mb-16 md:text-left">
            <h2 className="text-3xl text-dark-blue font-bold">
              What’s different about Manage?
            </h2>
            <p className="text-dark-grayish-blue mt-5">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams
            </p>
          </div>
          <div>
            <div>
              <div className="what-diff-head ">
                <span className="">01</span>
                <h4 className="">Track company-wide progress</h4>
              </div>
              <p className="what-diff-desc">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
            <div className="mt-12">
              <div className="what-diff-head ">
                <span className="">02</span>
                <h4 className="">Advanced built-in reports</h4>
              </div>
              <p className="what-diff-desc">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
            <div className="mt-12">
              <div className="what-diff-head ">
                <span className="">03</span>
                <h4 className="">Everything you need in one place</h4>
              </div>
              <p className="what-diff-desc">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDifferent;
