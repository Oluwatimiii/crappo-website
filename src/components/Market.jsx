import React, { useEffect } from "react";
import Statistics from "../assets/images/statistic.png";
import Profit from "../assets/images/profit.png";
import Invest from "../assets/images/invest.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Market = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full bg-[#2B076E]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-4 lg:px-6 pt-[6rem]">
        <div
          className="flex flex-col items-center justify-center mb-[4rem]"
          data-aos="zoom-in-down"
          data-aos-easing="ease-in"
          data-aos-duration="1300"
          data-aos-delay="150"
        >
          <h1 className="text-center text-[#FFFFFF] font-bold max-w-[680px] lg:max-w-[790px] text-[30px] md:text-[40px]">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:justify-between justify-center mx-auto mb-[6rem]">
          <div
            className="grid gap-6  pb-[3rem] lg:pb-0 max-w-[450px] lg:max-w-full"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="1500"
            data-aos-delay="150"
          >
            <h1 className="text-4xl font-extrabold">Invest Smart</h1>
            <p className="text-[#E0E0E0] text-[14px] max-w-[400px]">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
            </p>
            <a className="bg-[#3671E9] hover:bg-[#254481] transition ease py-3 px-6 rounded-3xl text-[14px] w-[130px]">
              Learn More
            </a>
          </div>

          <div>
            <img
              src={Statistics}
              alt="Statistics graph"
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1300"
              data-aos-delay="150"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center md:justify-between justify-center mx-auto mb-[6rem]">
          <div
            className="grid gap-6 pb-[3rem] lg:pb-0 max-w-[450px] lg:max-w-full"
            data-aos="fade-left"
            data-aos-easing="zoom-in-down"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <h1 className="text-4xl font-extrabold">Detailed Statistics</h1>
            <p className="text-[#E0E0E0] text-[14px] max-w-[400px]">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <a className="bg-[#3671E9] hover:bg-[#254481] transition ease py-3 px-6 rounded-3xl text-[14px] w-[130px]">
              Learn More
            </a>
          </div>

          <div className="max-w-[550px]">
            <img
              src={Profit}
              alt="Profit graph"
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1300"
              data-aos-delay="150"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:justify-between justify-center mx-auto pb-[6rem]">
          <div
            className="grid gap-6 pb-[3rem] lg:pb-0 max-w-[420px] lg:max-w-full"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="1300"
            data-aos-delay="250"
          >
            <h1 className="text-4xl font-extrabold">
              Grow your profit and track your investments
            </h1>
            <p className="text-[#E0E0E0] text-[14px] max-w-[400px]">
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <a className="bg-[#3671E9] hover:bg-[#254481] transition ease py-3 px-6 rounded-3xl text-[14px] w-[130px]">
              Learn More
            </a>
          </div>

          <div>
            <img
              src={Invest}
              alt="Invest graph"
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1300"
              data-aos-delay="150"
            />
          </div>
        </div>
      </div>
      <div className="rounded-tl-full rounded-bl-full w-[222px] h-[322px] bg-white/5 absolute right-0 bottom-0 hidden lg:block"></div>
      <div className="rounded-br-full rounded-bl-full w-[422px] h-[222px] bg-white/5 absolute top-0 left-[8rem] hidden lg:block"></div>
    </div>
  );
};

export default Market;
