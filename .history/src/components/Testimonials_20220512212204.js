import React from "react";

const Testimonials = () => {
  return (
    <section className="mt-20">
      <div className="wrapper">
        <h2 className="text-3xl mb-16 text-center text-dark-blue font-semibold">
          What they’ve said{" "}
        </h2>
        <div>
          <div className="bg-very-light-gray px-6 py-8">
            <img className="w-24" src="images/avatar-ali.png" alt="" />
            <div>
              <h5 className="text-dark-blue font-semibold text-center">
                Ali Bravo
              </h5>
              <p>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
