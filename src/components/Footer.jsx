import React, { useEffect } from "react";
import Socials from "../assets/images/Socials.png";
import Logo from "../assets/images/Logo.png";
import Visa from "../assets/images/visa.png";
import Bitcoin from "../assets/images/bitcoin.png";
import Mastercard from "../assets/images/mastercard.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full bg-[#0D0D2B]">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-4 lg:px-6 mt-12 mb-10">
        <div
          className="flex flex-col items-center justify-center lg:items-stretch lg:justify-start mx-auto"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          data-aos-delay="250"
        >
          <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row lg:justify-between">
            <div className="flex items-center mb-12 lg:mb-0 cursor-pointer">
              <img
                src={Logo}
                alt="Crappo Logo"
                styles={{ width: 40, height: 40 }}
              />
              <p className="pl-4 md:text-[14px] text-[18px] font-semibold">
                CRAPPO
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start mb-12 lg:mb-0">
              <div>
                <h3 className="font-semibold pb-6 text-1xl">Quick Link</h3>
              </div>

              <div className="text-center lg:text-start">
                <ul>
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Products
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      About
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start mb-12 lg:mb-0">
              <div>
                <h3 className="font-semibold pb-6 text-1xl">Resources</h3>
              </div>

              <div>
                <ul className="text-center lg:text-start">
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Download Whitepaper
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Smart Token
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Blockchain Explorer
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Crypto API
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-[#E0E0E0] text-[14px] hover:font-semibold hover:text-[#3671E9]"
                    >
                      Interest
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-8">
                <h1 className="font-semibold text-center lg:text-start text-2xl lg:text-3xl lg:max-w-[350px]">
                  We accept following payment systems
                </h1>
              </div>

              <div className="flex items-center justify-between space-x-2">
                <img
                  src={Visa}
                  alt="visa icon"
                  className="bg-[#e2dddd36] rounded-sm hover:-translate-y-1 transition ease-in"
                />
                <img
                  src={Mastercard}
                  alt="mastercard icon"
                  className="bg-[#e2dddd36]  rounded-sm hover:-translate-y-1 transition ease-in"
                />
                <img
                  src={Bitcoin}
                  alt="bitcoin icon"
                  className="bg-[#e2dddd36]  rounded-sm hover:-translate-y-1 transition ease-in"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-[2rem] lg:mt-[6rem] ">
            <div>
              <p className="mb-3">©2021 CRAPPO. All rights reserved.</p>
            </div>

            <div>
              <img src={Socials} alt="social icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
