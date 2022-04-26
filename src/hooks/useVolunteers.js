import { useEffect, useState } from "react";
const axios = require("axios");

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:5000/volunteers");
      setVolunteers(result.data);
    };
    getData();
  }, []);
  return [volunteers, setVolunteers];
};

export default useVolunteers;
