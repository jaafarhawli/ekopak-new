import React from 'react';
import { Link } from "react-scroll";

const Scroll = (props) => {
  return (
    <Link
            activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
    >{props.children}</Link>
  );
}

export default Scroll;
