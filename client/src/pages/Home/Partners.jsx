import React from 'react';
import Container from '../../components/Container';
import Headline from '../../components/Headline';
import images from '../../assets';

const Partners = () => {
  return (
    <Container className='bg-secondary' id='partners'>
        <Headline className='text-navy text-center'>Partners</Headline>
        <div className='grid gap-12 lg:gap-4 xl:w-[1100px] lg:w-[500px] m-auto xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center w-full mt-12'>
          <img src={images.qcsLogo} className='m-auto w-[200px] h-[200px] rounded-full ' alt="" />
          <img src={images.bankByblosLogo} className='m-auto w-[200px] h-[200px] rounded-full ' alt="" />
          <img src={images.dintaLogo} className='m-auto w-[200px] h-[200px] rounded-full ' alt="" />
          <img src={images.lawOfficeLogo} className='m-auto w-[200px] h-[200px] rounded-full ' alt="" />
        </div>
        
    </Container>
  );
}

export default Partners;
