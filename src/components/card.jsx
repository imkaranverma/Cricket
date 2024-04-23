export default function Card(data){
    return (
    <>
 <div className="flex pt-24 justify-center items-center ">
    <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg p-8 bg-customRed  "> 
        <div className="font-CustomFont text-customyellow flex flex-col items-center">
            <div className="flex justify-centre">Indian premiere league 2024</div>
            <div>24th March</div>
        </div>
        <div className="bg-white flex flex-col items-center">
            <div>
                  <img src="" alt="Team 1 image" />
                  <div>
                    <div>
                        <div>Team 1 name</div>
                        <div>Team 2 name</div>
                    </div>

                    <div>
                        Date and time
                    </div>
                  </div>
                  <img src="Team 2 image" alt="" />
            </div>

            <div>
               <button>Buy Now</button>
            </div>
        </div>
    </div>
    </div>
   
    </>
    )
}