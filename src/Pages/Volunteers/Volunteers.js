import React from "react";
import useVolunteers from "../../hooks/useVolunteers";
import Volunteer from "../Volunteer/Volunteer";
import "./volunteers.css";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useVolunteers();
  console.log(volunteers);
  return (
    <div className="container">
      <h1>all volunteers {volunteers.length}</h1>
      <div className="vols-container ">
        {volunteers.map((volunteer, index) => (
          <Volunteer {...volunteer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
