import React from "react";
import "../../index.css";
import { IoClose } from "react-icons/io5";

const Banner = ({setActive}) => {
  return (
    <div className="news-ticker-container">
      <div className="text-center">
        <span className="w-full mx-auto ">
            Currently, Ninja Notes is serving first-year students and is in the process of expanding our services to include all semesters. Please stay tuned!! 
        </span>
        
      </div>
      <div>
        <IoClose onClick={() => setActive(false)} className=" absolute right-3 top-4 cursor-pointer text-white"/>
      </div>
    </div>
  );
};

export default Banner;
