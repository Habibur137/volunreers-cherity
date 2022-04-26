import React from "react";
import { Link } from "react-router-dom";
import "./volunteer.css";

const Volunteer = ({ title, img, _id }) => {
  return (
    <div className="vol-container">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h3>{title}</h3>
      <Link to={`/details/${_id}`}>
        <button className="btn">See Details</button>
      </Link>
    </div>
  );
};

export default Volunteer;
