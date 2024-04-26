export default function Heading(props) {
  let heading = props.heading
    return (
      <div className="mt-20 md:mt-12 mb-4 flex justify-center items-center"> {/* Center the content horizontally */}
      <div className="flex justif-center items-center">
      <div className="border-2 border-customRed w-24 md:w-72 mr-4 md:m-12 h-1 rounded-full"></div>
      </div>
        <div className= "font-mont font-extrabold text-2xl md:text-3xl text-black ">{heading}</div>
      <div className="border-2 border-solid border-customRed ml-4 w-24 md:w-72 md:m-12 h-1 rounded-2xl"></div>
      </div>
    );
  }
  