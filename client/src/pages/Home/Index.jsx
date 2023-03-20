import React from 'react';
import Header from './Header';
import Navbar from '../../components/Navbar';
import Services from './Services';
import About from './About';
import Team from './Team';
import Partners from './Partners';
import Contact from './Contact';

const Index = () => {

  return (
    <div>
      <Navbar />  
      <Header />
      <Services />
      <About />
      <Team />
      <Partners />
      <Contact />

      {/* <section className='mt-12 team bg-primary-100 w-full pt-32 lg:px-24 px-6 pb-40'>
        <h1 className='text-[42px] font-bold text-center text-white'>Our Team</h1>
        <div className='flex lg:flex-row flex-col-reverse mt-12 items-center justify-between w-full'>
          <div>
            <img src={cesarIMG} className='w-[300px] h-[400px] object-cover rounded-xl' alt="" />
            <i className='text-white mt-4'>Cesar Ibrahim - Project Manager In Nigeria</i>
          </div>
          <div className=' text-white text-[22px] text-justify lg:w-[60%] lg:mb-0 mb-6'>
            <p>The Industrial Paper Company is managed by a team of experienced professionals who are dedicated to ensuring the success of the company. Rana Lateif serves as the Deputy CEO, bringing a wealth of knowledge and experience to the table. As the second in command, Rana plays a crucial role in the overall strategic direction of the company and is responsible for ensuring that the company operates smoothly and efficiently.</p>
            <p className='mt-12'>Charbel Chahine serves as the General Manager and is responsible for overseeing the day-to-day operations of the company. He has a strong track record of successfully managing complex projects and ensuring that the company's goals are met.</p>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:mt-24 mt-12 items-center justify-between lg:mb-24 mb-12'>
          <div className='text-white text-[22px] text-justify lg:w-[60%] lg:mb-0 mb-6'>
            <p>Josiane Mezher is the Business Development Manager, responsible for identifying and pursuing new business opportunities that will help the company grow and expand. She brings a wealth of experience in the industry and has a proven track record of success in developing new markets and building strong relationships with clients.</p>
            <p className='mt-12'>Cesar Ibrahim and Nader Harakeh are the Project Managers, responsible for overseeing specific projects and ensuring that they are completed on time and within budget. Both bring a wealth of experience and knowledge to their roles and are committed to delivering high-quality work that meets the needs of the company and its clients.</p>
          </div>
          <div>
            <img src={naderIMG} className='w-[300px] h-[400px] object-cover rounded-xl' alt="" />
            <i className='text-white mt-4'>Nader Khalil - Project Manager In Qatar</i>
          </div>
        </div>
        <i className='text-white text-[22px] text-justify'>In conclusion, the Industrial Paper Company is managed by a team of experienced and dedicated professionals who are committed to ensuring the success of the company. They bring a wealth of knowledge, experience, and expertise to their roles and are dedicated to delivering high-quality work that meets the needs of the company and its clients.</i>
      </section> */}

      
    </div>
  );
}

export default Index;