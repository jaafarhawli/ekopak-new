import React from 'react';

const Container = (props) => {
  return (
    <section className={`bg-primary-100 2xl:px-24 px-12 py-12 ${props.className}`} id={props.id}>
      {props.children}
    </section>
  );
}

export default Container;
