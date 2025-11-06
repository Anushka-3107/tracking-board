import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import RateLimitUI from "../components/RateLimitUI";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const[notes,setNotes] = useState([]);
  const[loading,setLoading] = useState(true);


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        // const data = await res.json();
        console.log(res.data);
      } catch (error) {
        console.log("error fetching notes", error)
      }
    }
  
  
    fetchNotes();
  }, [])

  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar height */}
      <Box sx={{ height: "80px" }} />

      {/* Rate Limit UI centered below navbar */}
      {isRateLimited && (<RateLimitUI />)}
    </Box>
  );
};

export default HomePage;
