import React from 'react';
import Container from '../../components/Container';
import {MdEmail} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {IoLocationSharp} from 'react-icons/io5';

const Contact = () => {
  return (
    <div>
      <div className='px-24 bg-secondary'>
          <div className='w-full h-[2px] bg-navy'></div>
      </div>
      <Container className='bg-secondary text-navy' id='contact'>
          <h1 className='text-[42px] font-bold text-center'>Contact Us</h1>
          <div className='grid gap-8 xl:grid-cols-3 grid-cols-1 px-24 justify-center lg:justify-between mt-12'>
              <div className='flex flex-col items-center gap-4'>
                <IoLocationSharp className='text-navy text-[40px]' />
                <div className='w-[400px] flex flex-col gap-3 items-center'>
                    <h1 className=' font-bold text-[24px]'>Address</h1>
                    <p className='text-center text-[18px]'>5th floor Chawki Nader Bldg, Chukri Chkair Street,Achrafieh, Beirut Lebanon</p>
                </div>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <MdEmail className='text-navy text-[40px]' />
                <div className='w-[400px] flex flex-col gap-3 items-center'>
                    <h1 className=' font-bold text-[24px]'>Email</h1>
                    <a className='text-center text-[18px] hover:underline' href="mailto:contact@ekopak-sal.com ">contact@ekopak-sal.com</a>
                </div>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <BsFillTelephoneFill className='text-navy text-[40px]' />
                <div className='w-[400px] flex flex-col gap-3 items-center'>
                    <h1 className=' font-bold text-[24px]'>Phone</h1>
                    <p className='text-center text-[18px]'>+961 3 793536</p>
                </div>
              </div>
          </div>
        </Container>
      </div>
  );
}

export default Contact;
