import React from 'react';
import Container from '../../components/Container';
import Headline from '../../components/Headline';
import Button from '../../components/Button';

const Team = () => {
  return (
    <Container className='flex lg:flex-row flex-col' id='team'>
          <div className='lg:w-1/2 w-full flex flex-col gap-10'>
            <Headline className='text-white'>Our Team</Headline>
            <p className='lg:text-[22px] text-[18px] text-justify text-white'>EkoPak Sal is managed by a team of experienced and dedicated professionals who are committed to ensuring the success of the company. They bring a wealth of knowledge, experience, and expertise to their roles and are dedicated to delivering high-quality work that meets the needs of the company and its clients</p>
            <Button className='text-white border-white hover:text-primary-100 hover:bg-white duration-200'>Read More</Button>
          </div>

    </Container>
  );
}

export default Team;
