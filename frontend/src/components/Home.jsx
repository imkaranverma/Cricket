import React, { useState } from 'react';
import Navbar from './navbar';
import Prediction_Page from './Prediction';
import Buy_Page from './Buy_page';
import Contact from './Contact';
import Card from './card';
import Heading from './Heading';
import { useEffect } from 'react';

function Home_Page() {
  let next_heading = "NEXT MATCH"
  let upcoming_heading = "UPCOMING MATCH"
  let buy = "Buy Now";
  const [nextMatch, setNextMatch] = useState(null); // State to hold next match

  useEffect(() => {
    // Function to fetch next match data from the backend
    const fetchNextMatch = async () => {
      try {
        const response = await fetch('https://cricket-prediction-66bh.onrender.com/nextmatch');
        const nextMatchData = await response.json();
        console.log("next match", nextMatchData);
        setNextMatch(nextMatchData); // Set next match in state
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    };

    fetchNextMatch();
  }, []); // Empty dependency array, runs once on component mount
  console.log(nextMatch)

  return (
    <>
      <Navbar />
      <div className='mt-8 md:mt-1'></div>
      {/* Render next match data if available */}
      {nextMatch && (
        <>
          {/* Pass next match data to Heading component */}
          <Heading heading={next_heading} />
          {/* Render Card component with next match data */}
          <Card prev={true} btn_des={buy} data={nextMatch} />
        </>
      )}
      {/* <div className='flex justify-center'>
      <div className="mt-8 md:w-10/12 border-2 border-solid border-customRed rounded-full"></div>
      </div> */}
    <Heading heading={upcoming_heading} />
    <Card btn_des="Buy Now"/>
    
    </>
  );
}

export default Home_Page;
