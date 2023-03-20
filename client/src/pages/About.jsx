import React from 'react';
import Navbar from '../components/Navbar';
import aboutUsFooterSVG from '../assets/aboutUsFooter.svg';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about-us h-[250px] bg-no-repeat bg-center bg-cover w-full flex items-center justify-center'>
        <h1 className='text-[42px] font-bold text-center text-white'>About Us</h1>
      </div>
      <div className='w-full px-12 mt-8'>
        <p className='mb-4 text-justify text-[22px]'>Welcome to EkoPak Sal, a leading trading company in industrial paper products. With a presence in Nigeria, Senegal, and Ghana, we have established a reputation as a reliable and trusted provider of high-quality paper products. Our company is committed to sourcing the best products from around the world, including Austria, Sweden, Brazil, China, and India, and delivering them to factories in West Africa.</p>
        <p className='mb-4 text-justify text-[22px]'>At  EkoPak Sal, we understand the importance of having access to a wide range of industrial paper products to meet the demands of the ever-changing market. That's why we are dedicated to providing our customers with a diverse range of options, from packaging paper to printing paper, and everything in between. With a focus on quality and sustainability, we are committed to providing our customers with the best products and services available.</p>
        <p className='mb-4 text-justify text-[22px]'>Our team of experts is dedicated to providing exceptional customer service, ensuring that your every need is met and that you are completely satisfied with your purchase. We understand the importance of meeting tight deadlines, and we work closely with our suppliers to ensure that our products are delivered on time and in perfect condition.</p>
        <p className='mb-4 text-justify text-[22px]'>Thank you for considering  EkoPak Sal as your industrial paper trading partner. We look forward to working with you and helping your business thrive.</p>
      </div>
      <img src={aboutUsFooterSVG} className='w-full' alt="" />
    </div>
  );
}

export default About;