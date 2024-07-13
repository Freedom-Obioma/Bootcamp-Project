import React from 'react';
import './Testimonial.css';
import Groupimg from '../../assests/Groupimg.png';
import arrows from '../../assests/arrows.png';



const Testimonial = () => {
  return <>
    <div className='gtp3__testimonial'>
      <div className='gtp3__testimonial-content'>
        <h3>Testimonials</h3>
        <h1>See what others are
        saying about us</h1>
        <br/><br/>
        <p className='pi'>“Explore the course catalog and syllables 
          to identify courses that align with personal 
          learning objectives. Take advantage of 
          interactive tutorials we offer to reinforce 
          your understanding and apply concepts in 
          real world scenarios.”</p>
          <br/>
          <h1>Faaruq Azeez</h1>
            <h2 className='testh2'>Founder, Justwear</h2>
              <p>United Arab Emirate</p>
              <br/>
              <span><img src={arrows} alt=''/></span>
              <br/>
      </div>
      <div className='gtp3__Testimonial-image'>
                <img src={Groupimg} alt='Groupimg'/>
              </div>
    </div>
  </>
};

export default Testimonial;