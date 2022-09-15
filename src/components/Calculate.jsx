import React, { useEffect } from "react";
import Trade from "./Trade";
import AOS from "aos";
import "aos/dist/aos.css";

const Calculate = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative">
      <div className="w-full max-w-[1200px] mx-auto pt-18 pb-[10rem] px-4 md:px-4 lg:px-6">
        <div
          className="text-center m-auto max-w-[741px]"
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h1 className="font-bold text-[35px] md:text-[40px] pb-6">
            Check how much you can earn
          </h1>
          <p className="text-[12px] md:text-[14px]">
            Let's check your hash rate to see how much you will earn today,
          </p>
          <p className="text-[12px] md:text-[14px]">
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      <Trade />

      <div className="max-w-[1200px] mx-auto px-2">
        <div className="flex items-center justify-center">
          <div
            className="bg-[#E0E0E0]  w-[22rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] text-[#0D0D2B] rounded-xl shadow-lg absolute top-[12rem] md:top-[12rem]"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1300"
            data-aos-delay="230"
          >
            <form>
              <div className="py-4 flex flex-col md:items-center md:justify-between md:flex-row p-6">
                <div className="mb-6 md:mb-0">
                  <input
                    type="text"
                    className="border-b-gray-400 outline-none px-1 placeholder-black font-semibold border-b-[1px] bg-transparent md:w-[16rem]"
                    placeholder="Enter your harsh rate"
                  />
                </div>

                <div>
                  <select
                    name=""
                    className="border-b border-b-gray-400 placeholder-black font-semibold bg-transparent outline-none px-1 w-[10rem]"
                  >
                    <option value="ths">TH/s</option>
                    <option value="hs">H/s</option>
                    <option value="khs">KH/s</option>
                    <option value="mhs">MH/s</option>
                    <option value="ghs">GH/s</option>
                  </select>
                </div>

                <button className="text-white bg-[#3671E9] hover:bg-[#213a6d] ease duration-200 rounded-full px-6 py-3 shadow-lg cursor-pointer mt-4 lg:mt-0">
                  Calculate
                </button>
              </div>
            </form>

            <div className="bg-[#FFFFFF] p-6 rounded-b-xl">
              <p className="font-semibold text-[12px] md:text-[14px] text-[#3671E9] mb-2">
                ESTIMATED 24 HOUR REVENUE:
              </p>
              <h2 className="text-[22px] md:text-[32px] font-bold text-[#0D0D2B] mb-2">
                0.055 130 59 ETH <span className="text-[#3671E9]">($1275)</span>
              </h2>
              <p className="text-[#828282] text-[12px] md:text-[14px] font-normal max-w-[240px] md:max-w-full">
                Revenue will change based on mining difficulty and Ethereum
                price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
