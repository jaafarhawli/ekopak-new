import React from 'react'

const Headline = (props) => {
  return (
    <h1 className={`lg:text-[52px] text-[42px] font-bold ${props.className}`}>
        {props.children}
    </h1>
  )
}

export default Headline