import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper";
const Testimonials = () => {
  const pagination = {
    clickable: true,
    el: ".img-thumb-pagination",
    renderBullet: function (index, className) {
      return `<button class="${className} rounded-md overflow-hidden">${index}</button>`;
    },
  };
  return (
    <section className="my-20">
      <div className="wrapper">
        <h2 className="text-3xl mb-20 text-center text-dark-blue font-semibold">
          What they’ve said
        </h2>
        <Swiper
          className="!overflow-visible"
          spaceBetween={50}
          pagination={pagination}
          autoplay={{
            delay: 5000,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide className="overflow-visible">
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
          </SwiperSlide>
        </Swiper>
        <div className="img-thumb-pagination flex items-center mt-4 gap-4"></div>
      </div>
    </section>
  );
};

export default Testimonials;
