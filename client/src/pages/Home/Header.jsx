import React from "react";
import images from "../../assets";

const Header = () => {
  return (
    <section
      className="bg-primary-100 w-full lg:h-full flex flex-col lg:flex-row items-center relative lg:py-28 pt-24 2xl:px-24 lg:px-12 sm:px-12 px-4"
      id="header"
    >
      <div className="hero bg-secondary lg:h-full lg:min-h-[0px] min-h-[40rem] absolute top-0 left-0 w-full"></div>

      <div className="lg:w-[50%] w-full lg:h-full flex-1 lg:mr-4 z-10 flex flex-col justify-center mb-6 lg:mb-0">
        <h1 className="capitalize xl:text-[60px]  sm:text-[50px] text-[40px] font-bold text-navy">
          Quality supplies for every aspect of your business
        </h1>
        <h2 className="text-navy lg:text-[20px] 2xl:text-[22px] text-[18px] 2xl:max-w-[650px] lg:max-w-[500px] mt-4">
          Quality is essential in every aspect of business, and our products are
          designed to meet that need. Whether you need industry paper, diaries,
          or restaurant kitchen equipment, we provide top
        </h2>
      </div>

      <div className="lg:w-[40%] w-full flex flex-col justify-center items-center">
        <img
          src={images.kitchenIMG}
          className="z-10 rounded-2xl hover:scale-110 hover:z-50 duration-300 translate-y-6"
          alt=""
          style={{ width: "clamp(310px, 80%, 400px)" }}
        />

        <div className="flex justify-center">
          <img
            src={images.paperIndustryIMG}
            className="rounded-2xl z-20 hover:scale-110 duration-300 hover:z-50 -translate-x-2"
            alt=""
            style={{ width: "clamp(160px, 45%, 270px)" }}
          />
          <img
            src={images.diariesIMG}
            alt=""
            className="w-[45%] rounded-2xl hover:scale-110 duration-300 hover:z-50 translate-x-2"
            style={{ width: "clamp(160px, 45%, 270px)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
