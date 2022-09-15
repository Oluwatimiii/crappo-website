import React, { useEffect } from "react";
import Currency from "./Currency";
import WhyImg from "../assets/images/why-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ChooseCrappo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] m-auto px-4 md:px-4 lg:px-6 mt-[8rem] pb-[4rem]">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1300"
        data-aos-delay="130"
      >
        <Currency />
      </div>

      <div className="pt-[4rem] grid lg:grid-cols-2 gap-8 items-center justify-between w-full lg:max-w-[1200px] m-auto max-w-[600px]">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-in"
          data-aos-duration="1500"
          data-aos-delay="150"
        >
          <img src={WhyImg} alt="Crypto image" />
        </div>

        <div
          className="mt-8 md:mt-0"
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-duration="2000"
          data-aos-delay="130"
        >
          <h1 className="max-w-[480px] text-[30px] md:text-[40px] font-bold">
            Why you should choose CRAPPO
          </h1>
          <p className="pt-4 pb-8 text-[12px] md:text-[14px] max-w-[310px] md:max-w-[350px]" data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="2000"
          data-aos-delay="150">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <a className=" bg-[#3671E9] rounded-full px-5 py-3 shadow-lg cursor-pointer font-medium text-[14px]">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChooseCrappo;
