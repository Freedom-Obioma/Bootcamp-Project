import React from 'react';
import {Footer, Frame, Header, Newsletter, Testimonial, Navbar} from './components';
import './App.css';

const App = () => {
  return <>
      <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
          <Frame />
          <Testimonial />
          <Newsletter />
          <Footer />
          
        </div>
      </div>
    </>
};

export default App;