import React, { useEffect } from "react";
import Human from "../assets/images/human.png";
import Chart from "../assets/images/chart.png";
import World from "../assets/images/world.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Currency = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="w-full flex items-center justify-between flex-wrap lg:max-w-[1200px] m-auto max-w-[600px]"
      data-aos="zoom-in-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-delay="180"
    >
      <div className="flex items-center justify-between py-5 lg:py-0">
        <div>
          <img src={Chart} alt="chart icon" />
        </div>

        <div className="flex flex-col items-start ml-4">
          <h1 className="font-bold text-[26px]  md:text-[40px]  mb-[1px]">
            $30B
          </h1>
          <p className="text-[#E0E0E0] text-[14px]">
            Digital Currency Exchanged
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between py-5 lg:py-0">
        <div>
          <img src={Human} alt="human icon" />
        </div>

        <div className="flex flex-col items-start ml-4">
          <h1 className="font-bold text-[26px] md:text-[40px]  mb-[1px]">
            10M+
          </h1>
          <p className="text-[#E0E0E0] text-[14px]">Trusted Wallets Inventor</p>
        </div>
      </div>

      <div className="flex items-center justify-between py-5 lg:py-0">
        <div>
          <img src={World} alt="world icon" />
        </div>

        <div className="flex flex-col items-start ml-4">
          <h1 className="font-bold text-[26px]  md:text-[40px] mb-[1px]">
            195
          </h1>
          <p className="text-[#E0E0E0] text-[14px]">Countries Supported</p>
        </div>
      </div>
    </section>
  );
};

export default Currency;
