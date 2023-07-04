import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1 className='name'>Hello, My Name is Victor Ameh</h1>
        <h5 className="description">I'm a frontend developer, motivated by my experiences and the ever-evolving nature of the computing world</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
