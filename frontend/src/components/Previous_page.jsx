import Heading from "./Heading"
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Card from "./card";

export default function Previous(){

    const [previous, setPrevious] = useState([]);

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('http://localhost:3000/prevmatches');
          const data = await response.json();
          setPrevious(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    let previous_heading = "PREVIOUS MATCHES"
    console.log(previous)
    return(
        <>
        <Heading heading={previous_heading}/>
        {previous.map((previous) => (
                <Link key={previous.uniqueId} to={`/events_page/${previous.uniqueId}`}>
                {/* <Event_details  key={events.uniqueId} icon= {imageComponentsArray[Math.floor(Math.random() * imageComponentsArray.length)]} title={events.eventName} des={events.eventCategory} /> */}
                <Card />
        </Link>
      ))}
        </>
    )
    
    
}