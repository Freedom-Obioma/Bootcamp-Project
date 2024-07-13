import React from 'react';
import './Navbar.css';
import  TECHNEW from '../../assests/TECHNEW.svg';

const Navbar = () => {
  return (
    <div className='gtp3__navbar'>
      <div className='gtp3__navbarlinks'>
        <div className='gtp3__navbarlinks_technew'>
          <img src={TECHNEW} alt='TECHNEW' />
        </div>
        <div className='gtp3__navbarlinks_container'>
          <p className='p1'><a href='/'>Home</a></p>
          <p className='p2'><a href='/bootcamp'>Bootcamp</a></p>
        </div>
      </div>
    </div>
  )
};

export default Navbar;