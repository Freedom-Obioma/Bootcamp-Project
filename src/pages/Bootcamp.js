import React from 'react';
import { Footer, Navbar, Newsletter } from '../components';
import page2 from '../assests/page2.png';

const Bootcamp = () => {
  return (
    <div>
        <Navbar />
        <img src={page2} alt='Bootcamp'/> 
        <Newsletter/> 
        <Footer />
    </div>
  )
};

export default Bootcamp;