import Carousel from "./heroSection"
// import vid from "/smiling.mp4"

const slides = [
  "./p1.png",
  "./p2.png",
  "./p3.png",
//   "./4.jpg",
]


function Hero() {

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-[100%] h-auto">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            <img src={s} />
          )), 
        //   <video src={vid} autoPlay muted loop />
          ]}
        </Carousel>

      </div>
    </div>
  )
}

export default Hero