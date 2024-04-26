import React from 'react';
import Navbar from './navbar';
import Prediction_Page from './Prediction';
import Buy_Page from './Buy_page';
import Contact from './Contact';
import Card from './card';
import Heading from './Heading';

function Home_Page() {
  let next_heading = "NEXT MATCH"
  let upcoming_heading = "UPCOMING MATCH"
  return (
    <>
    <Navbar/>
    {/* <Prediction_Page/>
    <Buy_Page/>
    <Contact/> */}
    <div className='mt-8 md:mt-1'></div>
    <Heading heading={next_heading}/>
      <Card/>
      {/* <div className='flex justify-center'>
      <div className="mt-8 md:w-10/12 border-2 border-solid border-customRed rounded-full"></div>
      </div> */}
    <Heading heading={upcoming_heading} />
    <Card/>
    
    </>
  );
}

export default Home_Page;
