import React, { useEffect } from "react";
import Newsletter from "../assets/images/newsletter-box.png";
import "./Subscribe.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] py-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-4 lg:px-6">
        <div className="flex items-center justify-center">
          <div
            className="subscribe rounded-lg w-[60rem] px-4 py-8 relative"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 items-center mx-auto">
              <div className="grid gap-4">
                <h2 className="text-3xl font-bold">Start mining now</h2>
                <p className="text-[14px]">
                  Join now with CRAPPO to get the latest news and start mining
                  now
                </p>
              </div>

              <div className="lg:pl-[4rem]">
                <input
                  type="text"
                  className="border-b border-b-[#FFFFFF] w-[16rem] outline-none bg-transparent pb-1 placeholder:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mt-6 lg:mt-0 lg:ml-20">
                <button className="px-6 py-4 cursor-pointer bg-[#ffffff] text-[#0D0D2B] hover:text-[#FFFFFF] hover:bg-[#0D0D2B] font-semibold transition ease rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
