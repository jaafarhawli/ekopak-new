import React, {useEffect} from "react";
import TitleContainer from "../components/TitleContainer";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-secondary min-h-screen">
      <TitleContainer firstWord="About" lastWord="Us" />
      <div className="w-full lg:px-28 px-4 py-16 bg-secondary flex flex-col gap-8">
        <p className=" text-[22px] text-justify">
          Welcome to EkoPak Sal, a trading company that specializes in providing
          high-quality industrial paper, dairy products, and industrial kitchen
          equipment to factories in West Africa. Our company has a presence in
          Nigeria, Senegal, and Ghana, and we have established ourselves as a
          reliable and trusted provider of these products.
        </p>
        <p className=" text-[22px] text-justify">
          We source our products from around the world, including Austria,
          Sweden, Brazil, China, and India, to ensure that our customers receive
          the best quality products available. Our team of experts works
          tirelessly to ensure that all our products meet the highest quality
          standards and are delivered to our customers in a timely manner.
        </p>
        <p className=" text-[22px] text-justify">
          At EkoPak Sal, we take pride in our commitment to providing
          exceptional customer service. Our knowledgeable staff is always
          available to assist our customers with any questions or concerns they
          may have. We value our customers' feedback and use it to improve our
          products and services continually.
        </p>
        <p className=" text-[22px] text-justify">
          Thank you for choosing EkoPak Sal as your trusted provider of
          industrial paper, dairy products, and industrial kitchen equipment.
        </p>
      </div>
    </div>
  );
};

export default About;
