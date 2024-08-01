import React from "react";
import { footerData } from "../../assets/data/footer-links";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = ["Articles", "Chart Sheet", "Code challenges", "Docs", "Projects"];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {

  return (
    <div className="bg-theme z-10">
      
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-dargGreen leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-dargGreen">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-dargGreen pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <Link to={"/"}>
              <img src={logo} alt="" width={100} className="object-contain shadow-lg" />
              </Link>
              <h1 className="font-semibold text-[16px] -mb-1">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Join", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>
                      <span className=" hover:text-tingGreen text-gray-300">{ele}</span></Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-lg text-dargGreen ">
                <FaFacebook className="hover:text-tingGreen transition-all duration-200" />
                <FaGoogle className="hover:text-tingGreen transition-all duration-200"/>
                <FaTwitter className="hover:text-tingGreen transition-all duration-200"/>
                <FaYoutube className="hover:text-tingGreen transition-all duration-200" /> 
              </div>
              <div></div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer  transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                      <span className=" hover:text-tingGreen text-gray-300">{ele}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"} className=" hover:text-tingGreen text-gray-300">Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                      <span className=" hover:text-tingGreen text-gray-300">{ele}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                      <span className=" hover:text-tingGreen text-gray-300">{ele}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {footerData.map((ele, i) => {
              return (
                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className=" text-dargGreen font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer transition-all duration-200"
                        >
                          <Link to={link.link}>
                          <span className=" hover:text-tingGreen text-gray-300">{link.title}</span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-dargGreen mx-auto -mt-5  pb-8 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-dargGreen cursor-pointer transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                  <span className=" hover:text-tingGreen cursor-pointer text-gray-300">{ele}</span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center text-gray-300">Developed with 💚 by Team AK © All Rights Reserved 2024 Ninja Notes</div>
        </div>
      </div>

    </div>
  );
};

export default Footer;