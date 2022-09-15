import React, { useEffect } from "react";
import { MdChevronRight } from "react-icons/md";
import Bitcoin from "../assets/images/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row md:justify-between items-center max-w-[1200px] m-auto px-4 md:px-5 lg:px-6 pt-[5rem]">
      <div id="header" className="max-w-[550px] lg:max-w-[588px]" data-aos="fade-down" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="100">
        <div className="flex items-center mt-10 rounded-[32px] bg-[#32324b] max-w-[340px] lg:max-w-[365px]">
          <p className="text-[10px] md:text-[14px] py-[4px] px-[16px] m-[3px] rounded-[32px] bg-[#FFFFFF] text-[#0D0D2B] font-semibold">
            75% SAVE
          </p>
          <p className="text-[12px] md:text-[14px] ml-4 tracking-wide">
            For the Black Friday weekend
          </p>
        </div>

        <div>
          <h2 className="mt-6 max-w-full lg:max-w-full text-5xl md:text-6xl leading-[54px] lg:leading-[64px]" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="220">
            Fastest & secure platform to invest in crypto
          </h2>
          <p className="mt-6 text-[14px] tracking wide max-w-[435px]" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="3000" data-aos-delay="250">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <a className="mt-6 text-[14px] flex items-center bg-[#3671E9] hover:bg-[#223a6b] rounded-[32px] pr-4 py-3 pl-6 max-w-[160px] cursor-pointer ease-in-out duration-200">
            Try for free{" "}
            <span className="bg-white p-2 ml-3 rounded-full text-[#3671E9]">
              <MdChevronRight />
            </span>
          </a>
        </div>
      </div>

      <div className="lg:max-w-[604px]" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-delay="200">
        <img src={Bitcoin} alt="Crappo Bitcoin" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
