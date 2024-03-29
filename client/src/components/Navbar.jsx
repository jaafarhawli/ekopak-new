import React, {useState, useEffect} from 'react';
import logo from '../assets/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import Scroll from './Scroll';

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const openNavBarClass = 'flex flex-col bg-navy/90 md:bg-navy/0 lg:w-[80%] w-full md:flex-row md:py-4 py-8 2xl:px-24 sm:px-12 px-4 justify-between items-center fixed z-[200] duration-500'
  const closedNavBarClass = 'h-[70px] items-center w-full flex flex-col lg:w-[80%] md:flex-row py-4 2xl:px-24 sm:px-12 px-4 justify-between align-middle fixed z-[200] duration-500'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResize = () => {
    if(window.innerWidth > 1024) 
    setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={isScrolled ? openNav ? openNavBarClass + '  bg-navy md:bg-navy lg:w-full' : closedNavBarClass + ' bg-navy md:bg-navy lg:w-full' : openNav ? openNavBarClass : closedNavBarClass}>
      <GiHamburgerMenu className={`absolute top-6 right-6 md:hidden ${isScrolled || openNav ? 'text-white' : 'text-navy'} text-[24px] cursor-pointer`} onClick={() => setOpenNav(!openNav)} />
      <div className={`self-start flex items-center gap-2 ${openNav ? 'hidden' : 'auto'}`}>
        <Scroll to='header'><img src={logo} alt="" className={openNav ? 'w-[60px] mb-4 md:mb-0 select-none justify-start self-start cursor-pointer' : 'cursor-pointer select-none w-[60px] justify-start self-start'} /></Scroll>
        <h1 className={`text-[22px] font-semibold ${isScrolled ? 'text-white nav-white-item' : 'text-navy '}`}>EkoPak Sal</h1>
      </div>
      
      <div className={openNav ? 'flex flex-col md:flex-row gap-6 select-none md:text-left text-center' : 'hidden md:flex md:flex-row md:gap-6 md:select-none'}>
          <li className={`text-[20px] font-semibold ${isScrolled ? 'text-white nav-white-item' : 'md:text-navy text-white'} cursor-pointer relative nav-item list-none`}><Scroll to='services'>Services</Scroll></li>
          <li className={`text-[20px] font-semibold ${isScrolled ? 'text-white nav-white-item' : 'md:text-navy text-white'} cursor-pointer relative nav-item list-none`}><Scroll to='about'>About</Scroll></li>
          <li className={`text-[20px] font-semibold ${isScrolled ? 'text-white nav-white-item' : 'md:text-navy text-white'} cursor-pointer relative nav-item list-none`}><Scroll to='team'>Team</Scroll></li>
          <li className={`text-[20px] font-semibold ${isScrolled ? 'text-white nav-white-item' : 'md:text-navy text-white'} cursor-pointer relative nav-item list-none`}><Scroll to='partners'>Partners</Scroll></li>
          <li className={`text-[20px] font-semibold ${isScrolled ? 'text-white nav-white-item' : 'md:text-navy text-white'} cursor-pointer relative nav-item list-none`}><Scroll to='contact'>Contact</Scroll></li>
      </div>
    </div>
  );
}

export default Navbar;