import { FaBeer } from "react-icons/fa";
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import './card.css'



export default function Card(data) {
  return (
    <div> {/* Adjusted padding for smaller devices */}
   
      <div className="w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto"> {/* Centered and adjusted width */}
        <div className="rounded-3xl p-4 md:p-8 bg-gradient-to-r from-customRed to-customBrown">
          <div className="text-center">
            <div className="font-mont font-extrabold text-2xl md:text-3xl text-white"> {/* Adjusted font size */}
              Indian Premiere League 2024
            </div>
            <div className="font-mont text-white text-lg md:text-2xl font-semibold"> {/* Adjusted font size */}
              24th Match
            </div>
          </div>
          <div className="mt-4 md:mt-6 bg-white rounded-b-3xl flex flex-col items-center">
            <div className="font-bold flex flex-row items-center justify-between px-4 md:px-12 py-4 md:py-2 w-full rounded-md">
              <div className="flex flex-col justify-between md:pt-4 w-72 md:flex-row items-center">
                <img className="w-24 md:w-36 h-auto"src={team1} alt="" />
                <div className="font-mont font-bold text-2xl">CSK</div>
              </div>

              <div className="font-mont font-bold text-2xl">vs</div>

              <div className="flex flex-col-reverse justify-between pt-4 w-72 md:flex-row items-center">
                <div className="font-mont font-bold text-2xl">MI</div>
                <img className="w-24 md:w-36 h-auto"src={team2} alt="" />
              </div>


            </div>
            <div className="font-mont font-extrabold text-sm md:text-base mt-2 md:mt-4"> {/* Adjusted font size */}
              Wednesday, 26th April, 06:00 PM
            </div>
            <div>
            <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customBrown to-customRed w-full md:w-auto">
  Buy Now
</button>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


