import React from "react";

const WhatDifferent = () => {
  return (
    <section className="mt-24">
      <div className="wrapper">
        <div>
          <div className="text-center">
            <h2 className="text-3xl text-dark-blue font-bold">
              What’s different about Manage?
            </h2>
            <p className="text-dark-grayish-blue mt-5">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams
            </p>
          </div>
          <div className="mt-10">
            <div>
              <div className="flex items-center">
                <span
                  className="bg-bright-red text-white px-6
                 rounded-full py-1.5"
                >
                  01
                </span>
                <h4 className="text-xl font-semibold">
                  Track company-wide progress
                </h4>
              </div>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDifferent;
