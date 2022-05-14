import React from "react";
import SwiperSlde
const Testimonials = () => {
  return (
    <section className="my-20">
      <div className="wrapper">
        <h2 className="text-3xl mb-20 text-center text-dark-blue font-semibold">
          What they’ve said{" "}
        </h2>
        <div>
          <div className="bg-very-light-gray px-8 pb-8">
            <img
              className="w-24 -translate-y-10 block mx-auto"
              src="images/avatar-ali.png"
              alt=""
            />
            <div>
              <h5 className="text-dark-blue text-xl font-bold text-center">
                Ali Bravo
              </h5>
              <p className="mt-4 text-dark-grayish-blue text-center font-semibold">
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
