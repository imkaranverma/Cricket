import React, { useState } from 'react';
import Navbar from './navbar';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import Heading from './Heading.jsx'
import CSK from '../assets/CSK.png'
import MI from '../assets/MI.png'
import LSG from '../assets/LSG.png'
import GT from '../assets/GT.png'
import KKR from '../assets/KKR.png'
import PBKS from '../assets/PBKS.png'
import SRH from '../assets/SRH.png'
import RR from '../assets/RR.png'
import RCB from '../assets/RCB.png'
import DC from '../assets/DC.png'

function Prediction_Page() {

  let pred_heading = "Predicted Result"

  const  {uniqueId}  = useParams();
  const [Details, setDetails] = useState(null);

  const logos = {
    'MI': MI,
    'RCB': RCB,
    'SRH': SRH,
    'KKR': KKR,
    'LSG': LSG,
    'DC': DC,
    'RR': RR,
    'PBKS': PBKS,
    'GT': GT,
    'CSK': CSK,
  }

  const full_names = {
    'MI': "Mumbai Indians",
    'RCB': "Royal Challengers Banglore",
    'SRH': "Sunrisers Hyderabad",
    'KKR': "Kolkata Knight Riders",
    'LSG': "Lucknow Supergiants",
    'DC': "Delhi Capitals",
    'RR': "Rajasthan Royals",
    'PBKS': "Punjab Kings",
    'GT': "Gujarat Titans",
    'CSK': "Chennai Super Kings",
  }
  
  console.log("hey2  ", uniqueId);
  useEffect(() => {
    // Fetch event details from the backend using uniqueId
   fetch(`http://localhost:3000/matchdetails/${uniqueId}`,)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [uniqueId]);

  if (!Details) {
    return <p>Loading...</p>;
  }

console.log(Details)
const data = Details

const date = new Date(data.matchDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  
  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Array of weekday names
  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Get the weekday (0-6)
  const weekdayIndex = date.getDay();
  const weekday = weekdayNames[weekdayIndex];

  
 
  let time = data.time
  
   time = parseInt(time)-12
   let index = data.uniqueId.indexOf('_')
  const match_no = data.uniqueId.substring(index+1)

  var scorecard = true;


  return (
    <>
    <Navbar/>
    <Heading heading={pred_heading}/>
    <div> {/* Adjusted padding for smaller devices */}
   
   <div className=" mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto"> {/* Centered and adjusted width */}
     <div className="rounded-3xl p-1 md:p-2 bg-gradient-to-r from-customRed to-customBrown">
       <div className="text-center">
         <div className="font-mont font-extrabold text-2xl md:text-3xl text-white"> {/* Adjusted font size */}
           Indian Premiere League 2024
         </div>
         <div className="font-mont text-white text-lg md:text-2xl font-semibold"> {/* Adjusted font size */}
           {match_no}th Match
         </div>
       </div>
       <div className="mt-4 md:mt-6 border border-black w-99/100 bg-white rounded-b-3xl flex flex-col items-center">
       <div className="font-mont font-extrabold text-sm md:text-base mt-2 md:mt-4"> {/* Adjusted font size */}
         {weekday}, {day}{' '}{monthNames[monthIndex]}, {time +":30"+ " PM"}
         </div>
         <div className="font-bold flex flex-row items-center justify-between px-4 md:px-12 py-4 md:py-2 w-full rounded-md">
           <div className="flex flex-col justify-between md:pt-4 w-72 md:flex-row items-center">
             <img className="w-20 md:w-36 h-16" src={logos[data.team1]} alt="" />
             <div className='flex flex-col justify-center items-center'>
             <div className="font-mont font-bold md:text-2xl">{data.team1}</div>

           </div>
           </div>

           <div className="font-mont font-bold text-2xl">vs</div>

           <div className="flex flex-col-reverse justify-between md:pt-4 w-72 md:flex-row items-center">
             <div className='flex flex-col justify-center items-center'>
             <div className="font-mont font-bold md:text-2xl">{data.team2}</div>
            
           </div>
             <img className="w-20 md:w-36 h-16"src={logos[data.team2]} alt="" />
           </div>


         </div>
         <div className=" my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown md:w-auto">
  Toss Prediction
            </div>

            <div className='flex py-4'>
              <div >
             <img className="w-20 md:w-36 h-16" src={logos[data.tossWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-2xl font-mont' >
                  {full_names[data.tossWinner]}
                </div>

               <div className='text-gray-500 tracking-widest'>
                 will win the toss
               </div>

               <div className='font-mont text-gray-500 font-bold text-sm'>
                  Last Updated: 24th april, 06:00 PM
               </div>
              </div>
            </div>

            <div className=" my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown md:w-auto">
  Match Prediction
            </div>

            <div className='flex flex-row-reverse py-4'>
              <div >
             <img className="w-20 md:w-36 h-16" src={logos[data.matchWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-2xl font-mont'>
                  {full_names[data.matchWinner]}
                </div>

               <div className='text-gray-500 tracking-widest'>
                 will win the match
               </div>

               <div className='font-mont text-gray-500 font-bold text-sm'>
                  Last Updated: 24th april, 06:00 PM
               </div>
              </div>
            </div>
       </div>

      
            
     </div>
   </div>
 </div>
 </>
);
}

export default Prediction_Page;
