export default function Heading(props) {
  let heading = props.heading
    return (
      <div className="flex justify-center"> {/* Center the content horizontally */}
        <div className= "mb-4 font-mont font-extrabold text-4xl text-customRed pt-12 md:pt-16">{heading}</div>
      </div>
    );
  }
  