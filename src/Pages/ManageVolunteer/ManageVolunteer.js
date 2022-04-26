import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import useVolunteers from "../../hooks/useVolunteers";

const ManageVolunteer = () => {
  const [volunteers, setVolunteers] = useVolunteers();
  const deleteVolunteers = async (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const result = await axios.delete(
        `http://localhost:5000/volunteers/${id}`
      );
      console.log(result);
      if (result.data.deletedCount > 0) {
        const restVolunteers = volunteers.filter((v) => v._id !== id);
        setVolunteers(restVolunteers);
        toast("Volunteer Deleted");
      }
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>
        Manage Volunteers Page
      </h1>
      <ToastContainer />
      <div style={{ width: "500px", margin: "30px auto" }}>
        {volunteers.map((v) => (
          <h4
            style={{
              backgroundColor: "pink",
              color: "#fff",
              padding: "10px 20px",
              width: "350px",
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{v.title}</span>
            <button
              onClick={() => deleteVolunteers(v._id)}
              style={{
                padding: "7px",
                backgroundColor: "#1DCADC",
                border: "0",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default ManageVolunteer;
