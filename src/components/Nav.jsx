import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Logo from "../assets/images/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";


const Nav = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [mobileNav, setMobileNav] = useState(false);

  const openNav = () => {
    setMobileNav((prev) => !prev);
  };

  const navStyle = mobileNav
    ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80"
    : "";

  return (
    // Larger Screens Nav
    <div className="w-full py-2 bg-[#0D0D2B] fixed h-20 z-[10]" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="600" data-aos-delay="100">
      {/* Logo Div */}
      <div className="flex justify-between items-center w-full h-full max-w-[1200px] m-auto px-4 md:px-5 lg:px-6">
        <Link to="header" smooth={true} offset={50} duration={500}>
          <div className="flex items-center cursor-pointer">
            <img
              src={Logo}
              alt="Crappo Logo"
              styles={{ width: 40, height: 40 }}
            />
            <p className="pl-4 md:text-[14px] text-[18px] font-medium">CRAPPO</p>
          </div>
        </Link>

        {/* NavMenu Div */}
        <div className="hidden md:flex md:items-center">
          <div>
            <ul className="md:flex md:items-center md:pr-2 ld:pr-4">
              <li>
                <a
                  href="#"
                  className="md:ml-6 ml-10 text-sm hover:font-bold hover:text-[#3671E9]"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="md:ml-6 ml-10 text-sm hover:font-bold hover:text-[#3671E9]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="md:ml-6 ml-10 text-sm hover:font-bold hover:text-[#3671E9]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="md:ml-6 ml-10 text-sm hover:font-bold hover:text-[#3671E9]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="md:flex md:items-center md:ml-20">
              <li>
                <a
                  href="#"
                  className="text-[16px] hover:font-bold hover:text-[#3671E9]"
                >
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="ml-6 font-light w-2">
                  |
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ml-6 text-sm hover:bg-[#385285] py-[14px] px-[32px] rounded-[32px] bg-[#3671E9] ease-in-out duration-200"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Icon Div */}
        <div className="md:hidden" onClick={openNav}>
          <AiOutlineMenu size={25} color={"white"} />
        </div>
      </div>

      {/* Mobile Devices Nav */}
      <div className={navStyle}>
        <div
          className={
            mobileNav
              ? " fixed left-0 top-0 w-[100%] h-screen bg-[#0D0D2B] z-[1000] p-4 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-4 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link
                to="header"
                smooth={true}
                offset={50}
                duration={500}
                onClick={openNav}
              >
                <div className="flex items-center cursor-pointer">
                  <img
                    src={Logo}
                    alt="Crappo Logo"
                    styles={{ width: 40, height: 40 }}
                  />
                  <p className="pl-4 text-[18px] font-medium">CRAPPO</p>
                </div>
              </Link>

              <div
                className="cursor-pointer z-[10] md:hidden p-4 text-white hover:text-[#031844] hover:bg-[#dce1eb] ease-in-out duration-200 rounded-full hover:shadow-md bg-[#031844] shad0w-white "
                onClick={openNav}
              >
                <AiOutlineClose size={25}  />
              </div>
            </div>

            <div className="text-center flex flex-col items-center justify-center mt-20">
              <ul className="">
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[24px] mb-10 hover:font-bold hover:text-[#3671E9]"
                  >
                    Products
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[24px] hover:font-bold hover:text-[#3671E9]"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#"
                    className="text-[24px] hover:font-bold hover:text-[#3671E9]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[24px] hover:font-bold hover:text-[#3671E9]"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <ul className="flex items-center mt-10">
                <li>
                  <a
                    href="#"
                    className="text-[24px] hover:font-bold hover:text-[#3671E9]"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light w-2 p-4">
                    |
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] hover:bg-[#385285] py-[10px] px-[24px] rounded-[32px] bg-[#3671E9] ease-in-out duration-200"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
