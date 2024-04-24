import React from 'react';
import Navbar from './navbar';
import Prediction_Page from './Prediction';
import Buy_Page from './Buy_page';
import Contact from './Contact';
import Card from './card';
import Heading from './Heading';

function Home_Page() {
  return (
    <>
    <Navbar/>
    {/* <Prediction_Page/>
    <Buy_Page/>
    <Contact/> */}
    <div className='mt-16 md:mt-1'>Hello</div>
    <Heading/>
      <Card/>
    
    
    </>
  );
}

export default Home_Page;
