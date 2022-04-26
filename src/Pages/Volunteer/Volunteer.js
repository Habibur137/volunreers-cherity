import React from "react";
import "./volunteer.css";

const Volunteer = ({ title, img }) => {
  return (
    <div className="vol-container">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <button className="btn">See Details</button>
    </div>
  );
};

export default Volunteer;
