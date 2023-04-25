import React, { useState, useEffect } from "react";
import images from "../../assets";
import Container from "../../components/Container";
import Headline from "../../components/Headline";

const Services = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [service, setService] = useState("paper");
  const serviceNameClass =
    "xl:text-[28px] text-[22px] hover:bg-white hover:text-primary-100 duration-200 select-none cursor-pointer py-3";
  const serviceNameSmallScreenClass =
    "text-[24px] hover:bg-white hover:text-primary-100 duration-200 select-none cursor-pointer py-3";

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {!isSmallScreen ? (
        <Container id='services'>
          <Headline className='text-white'>Services</Headline>
          <div
            className={`flex ${
              service === "restaurant" ? "flex-row-reverse" : null
            } mt-12 justify-between`}
          >
            <img
              src={
                service === "paper"
                  ? images.paperServices1
                  : service === "restaurant"
                  ? images.restaurantServices1
                  : service === "diaries"
                  ? images.diariesServices1
                  : null
              }
              alt=''
              className='xl:h-[500px] h-[400px] w-1/3 object-cover rounded-2xl'
            />
            <div className='flex flex-col gap-10 w-1/3 mx-8'>
              <div className='flex flex-col text-center w-full'>
                <h2
                  className={
                    service === "paper"
                      ? serviceNameClass + " bg-white text-primary-100"
                      : serviceNameClass + " text-white"
                  }
                  onClick={() => setService("paper")}
                >
                  Industry Paper
                </h2>
                <div className='w-full h-[1px] bg-white'></div>
                <h2
                  className={
                    service === "restaurant"
                      ? serviceNameClass + " bg-white text-primary-100"
                      : serviceNameClass + " text-white"
                  }
                  onClick={() => setService("restaurant")}
                >
                  Industrial Kitchen Equipment
                </h2>
                <div className='w-full h-[1px] bg-white'></div>
                <h2
                  className={
                    service === "diaries"
                      ? serviceNameClass + " bg-white text-primary-100"
                      : serviceNameClass + " text-white"
                  }
                  onClick={() => setService("diaries")}
                >
                  Diary Products
                </h2>
              </div>
              <div
                className={`${service} w-full bg-cover bg-center bg-no-repeat flex-1 bg-white rounded-2xl`}
              ></div>
            </div>
            <div className='flex flex-col xl:h-[500px] h-[400px] w-1/3'>
              <img
                src={
                  service === "paper"
                    ? images.paperServices3
                    : service === "restaurant"
                    ? images.restaurantServices3
                    : service === "diaries"
                    ? images.diariesServices3
                    : null
                }
                alt=''
                className=' object-cover flex-1 mb-10 h-1/2 rounded-2xl'
              />
              <img
                src={
                  service === "paper"
                    ? images.paperServices4
                    : service === "restaurant"
                    ? images.restaurantServices4
                    : service === "diaries"
                    ? images.diariesServices4
                    : null
                }
                alt=''
                className=' object-cover flex-1 h-1/2 rounded-2xl'
              />
            </div>
          </div>
          <div className=' h-12'></div>
        </Container>
      ) : (
        <Container id='services'>
          <Headline className='text-white'>Services</Headline>
          <div className='flex flex-col text-center mt-12'>
            <h2
              className={
                service === "paper"
                  ? serviceNameSmallScreenClass + " bg-white text-primary-100"
                  : serviceNameSmallScreenClass + " text-white"
              }
              onClick={() => setService("paper")}
            >
              Industry Paper
            </h2>
            <div className='w-full h-[1px] bg-white'></div>
            <h2
              className={
                service === "restaurant"
                  ? serviceNameSmallScreenClass + " bg-white text-primary-100"
                  : serviceNameSmallScreenClass + " text-white"
              }
              onClick={() => setService("restaurant")}
            >
              Industrial Kitchen Equipment
            </h2>
            <div className='w-full h-[1px] bg-white'></div>
            <h2
              className={
                service === "diaries"
                  ? serviceNameSmallScreenClass + " bg-white text-primary-100"
                  : serviceNameSmallScreenClass + " text-white"
              }
              onClick={() => setService("diaries")}
            >
              Diary Products
            </h2>
          </div>

          <div className='grid gap-12 m-auto grid-cols-2 items-center justify-center w-full mt-12'>
            <img
              src={
                service === "paper"
                  ? images.paperServices2
                  : service === "restaurant"
                  ? images.restaurantServices2
                  : service === "diaries"
                  ? images.diariesServices2
                  : null
              }
              className='m-auto w-[200px] md:w-[300px] h-[200px] rounded-2xl object-cover'
              alt=''
            />
            <img
              src={
                service === "paper"
                  ? images.paperServices1
                  : service === "restaurant"
                  ? images.restaurantServices1
                  : service === "diaries"
                  ? images.diariesServices1
                  : null
              }
              className='m-auto w-[200px] md:w-[300px] h-[200px] rounded-2xl object-cover'
              alt=''
            />
            <img
              src={
                service === "paper"
                  ? images.paperServices3
                  : service === "restaurant"
                  ? images.restaurantServices3
                  : service === "diaries"
                  ? images.diariesServices3
                  : null
              }
              className='m-auto w-[200px] md:w-[300px] h-[200px] rounded-2xl object-cover '
              alt=''
            />
            <img
              src={
                service === "paper"
                  ? images.paperServices4
                  : service === "restaurant"
                  ? images.restaurantServices4
                  : service === "diaries"
                  ? images.diariesServices4
                  : null
              }
              className='m-auto w-[200px] md:w-[300px] h-[200px] rounded-2xl object-cover '
              alt=''
            />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Services;
