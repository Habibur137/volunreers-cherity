import React from "react";
import { useParams } from "react-router-dom";
import useSingleVolunteers from "../../hooks/useSingleVolunteers";

const VolunteerDetail = () => {
  const { id } = useParams();
  const [volunteer] = useSingleVolunteers(id);
  const { title, desc, img } = volunteer;

  const volStyle = {
    width: "500px",
    margin: "40px auto",
    backgroundColor: " rgb(232, 61, 118)",
    color: "#fff",
    padding: "30px 0",
    textAlign: "center",
    borderRadius: "10px",
  };
  return (
    <div style={volStyle}>
      <img
        src={img}
        style={{ width: "300px", display: "block", margin: "0 auto" }}
        alt=""
      />
      <h3 style={{ margin: "10px 0" }}>{title}</h3>
      <h5 style={{ margin: "10px 0" }}> Volunteer Id: {id}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default VolunteerDetail;
