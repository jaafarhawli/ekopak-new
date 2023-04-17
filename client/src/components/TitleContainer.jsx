import React from "react";
import images from "../assets";
import { useNavigate } from "react-router-dom";

const TitleContainer = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" w-full bg-primary-100 h-48 flex justify-center items-end relative">
      <div
        className="flex items-center absolute lg:left-28 left-4 top-6 gap-1 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={images.logo} className=" w-12" alt="" />
        <p className="text-white text-[22px] font-bold select-none">
          EkoPak Sal
        </p>
      </div>
      <div className=" bg-secondary md:w-[50%] w-[80%] px-6 h-[60%] flex items-center justify-center about-header relative">
        <h1 className="half-underline relative md:text-[50px] text-[40px] text-navy">
          <span className=" font-bold">{props.firstWord}</span> {props.lastWord}
        </h1>
      </div>
    </div>
  );
};

export default TitleContainer;
