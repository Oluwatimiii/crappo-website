import React, { useState, useEffect } from "react";
import BtcIcon from "../assets/images/bitcon.png";
import EthIcon from "../assets/images/ethereum.png";
import LiteIcon from "../assets/images/litecoin.png";
import { MdChevronRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Trade = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [clickCard, setClickCard] = useState(false);
  const [clickCard1, setClickCard1] = useState(false);
  const [clickCard2, setClickCard2] = useState(false);

  const onClickCard = () => {
    setClickCard((prev) => !prev);
    setClickCard1(false);
    setClickCard2(false);
  };

  const onClickCard1 = () => {
    setClickCard1((prev) => !prev);
    setClickCard(false);
    setClickCard2(false);
  };

  const onClickCard2 = () => {
    setClickCard2((prev) => !prev);
    setClickCard(false);
    setClickCard1(false);
  };

  return (
    <div className="bg-[#fbfbfb] pt-[15rem] pb-16 md:pt-20 md:mt-8">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-4 lg:px-6 pt-16">
        <div
          className="flex items-center justify-center py-10"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1300"
          data-aos-delay="100"
        >
          <h2 className="leading-[50px] tracking-tight font-extrabold text-[40px] text-[#0D0D2B] text-center max-w-[780px]">
            Trade securely and market the high growth cryptocurrencies.
          </h2>
        </div>

        {/* CARDS */}
        <div
          className="grid lg:grid-cols-3 gap-16 justify-center items-center"
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-duration="1300"
          data-aos-delay="150"
        >
          <div
            className={`py-10 px-5 rounded-2xl shadow-lg ${
              clickCard ? "bg-[#2B076E]" : "bg-[#FFFFFF]"
            } transition-all ease delay-100 duration-200`}
            onClick={onClickCard}
          >
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={BtcIcon} alt="btc-icon" />
              </div>

              <div className="flex py-6 items-center">
                <h2
                  className={
                    clickCard
                      ? "text-[#FFFFFF] font-extrabold text-[32px]"
                      : "text-[#0D0D2B] font-extrabold text-[32px]"
                  }
                >
                  Bitcoin
                </h2>
                <p className="ml-1 text-gray-400">BTC</p>
              </div>
              <p
                className={`max-w-[400px] md:max-w-full text-[14px] ${
                  clickCard ? "text-[#FFFFFF]" : "text-[#828282]"
                } text-center py-1`}
              >
                Digital currency in which a record of transactions is
                maintained.
              </p>
              {!clickCard ? (
                <button className="cursor-pointer rounded-sm border-[#2b076e] pt-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-white p-4 rounded-full text-[#3671E9] text-2xl border-2 font-bold">
                      <MdChevronRight />
                    </div>
                  </div>
                </button>
              ) : (
                <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer pt-4">
                  <div className="flex items-center justify-between">
                    <p className="cursor-pointer text-[#FFFFFF]">
                      Start mining
                    </p>
                    <div className="bg-white p-2 ml-5 rounded-full text-[#3671E9]">
                      <MdChevronRight />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>

          <div
            className={`py-10 px-5 rounded-2xl shadow-lg ${
              clickCard1 ? "bg-[#2B076E]" : "bg-[#FFFFFF]"
            }`}
            onClick={onClickCard1}
          >
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={EthIcon} alt="eth-icon" />
              </div>

              <div className="flex items-center py-6">
                <h2
                  className={
                    clickCard1
                      ? "text-[#FFFFFF] font-extrabold text-[32px]"
                      : "text-[#0D0D2B] font-extrabold text-[32px]"
                  }
                >
                  Ethereum
                </h2>
                <p className="ml-1 text-gray-400">ETH</p>
              </div>
              <p
                className={`max-w-[400px] md:max-w-full text-[14px] ${
                  clickCard1 ? "text-[#FFFFFF]" : "text-[#828282]"
                } text-center py-1`}
              >
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
              {!clickCard1 ? (
                <button className="cursor-pointer rounded-sm border-[#2b076e] pt-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-white p-4 rounded-full text-[#3671E9] text-2xl border-2 font-bold">
                      <MdChevronRight />
                    </div>
                  </div>
                </button>
              ) : (
                <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer pt-4">
                  <div className="flex items-center justify-between">
                    <p className="cursor-pointer text-[#FFFFFF]">
                      Start mining
                    </p>
                    <div className="bg-white p-2 ml-5 rounded-full text-[#3671E9]">
                      <MdChevronRight />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>

          <div
            className={`py-10 px-5 rounded-2xl shadow-lg ${
              clickCard2 ? "bg-[#2B076E]" : "bg-[#FFFFFF]"
            }`}
            onClick={onClickCard2}
          >
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={LiteIcon} alt="lite-icon" />
              </div>

              <div className="flex py-6 items-center">
                <h2
                  className={
                    clickCard2
                      ? "text-[#FFFFFF] font-extrabold text-[32px]"
                      : "text-[#0D0D2B] font-extrabold text-[32px]"
                  }
                >
                  Litecoin
                </h2>
                <p className="ml-1 text-gray-400">LTC</p>
              </div>
              <p
                className={`max-w-[400px] md:max-w-full text-[14px] ${
                  clickCard2 ? "text-[#FFFFFF]" : "text-[#828282]"
                } text-center py-1`}
              >
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>
              {!clickCard2 ? (
                <button className="cursor-pointer rounded-sm border-[#2b076e] pt-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-white p-4 rounded-full text-[#3671E9] text-2xl border-2 font-bold">
                      <MdChevronRight />
                    </div>
                  </div>
                </button>
              ) : (
                <button className="bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer pt-4">
                  <div className="flex items-center justify-between">
                    <p className="cursor-pointer text-[#FFFFFF]">
                      Start mining
                    </p>
                    <div className="bg-white p-2 ml-5 rounded-full text-[#3671E9]">
                      <MdChevronRight />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
