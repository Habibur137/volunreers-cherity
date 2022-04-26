import axios from "axios";
import { useEffect, useState } from "react";

const useSingleVolunteers = (id) => {
  const [volunteer, setVolunteer] = useState({});
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:5000/volunteers/${id}`);
      setVolunteer(result.data);
    };
    getData();
  }, [id]);
  return [volunteer, setVolunteer];
};
export default useSingleVolunteers;
