import React from 'react';
import './Header.css';
import Two from '../../assests/Two.png';

const Header = () => {
  return (
    <header>
    <div className='wrapper'>
      <p className='wrap'>
        <br/>
        <h2>Get the best knowledge from our Versatile Tutors</h2>
        <br/>
        <button>Start learning!</button>
      </p>
    </div>
    
  <div className='gtp3__image__Two'>
    <img src={Two} alt=''/>
  </div>
    </header>
  )
};

export default Header;