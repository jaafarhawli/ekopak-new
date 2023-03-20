import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

const Button = (props) => {
  return (
    <button className={`border-2 border-navy p-2 rounded-full w-[120px] h-[120px] text-[18px] flex flex-col items-center justify-center ${props.className}`} type={props.type ? props.type : 'button'} onClick={props.onClick} >
      {props.children}
      <BsArrowRight className={props.arrowHoverColor ? `hover:text-${props.arrowHoverColor} text-[30px]` : 'text-[30px]'} />
    </button>
  );
}

export default Button;
