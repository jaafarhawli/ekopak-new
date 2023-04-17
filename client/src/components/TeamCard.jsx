import React from 'react';
import images from '../assets';

const TeamCard = ({name, picture, description}) => {
  return (
    <div className='w-full rounded-lg bg-white flex flex-col gap-4 py-10 px-4 justify-center items-center hover:drop-shadow-2xl hover:scale-105 duration-200'>
      <img src={images[picture]} alt="" className='w-[200px] h-[200px] rounded-full object-cover' />
      <h2 className='text-[26px] font-bold text-center'>{name}</h2>
      <p className='text-[20px] text-primary-100 text-center'>{description}</p>
    </div>
  );
}

export default TeamCard;
