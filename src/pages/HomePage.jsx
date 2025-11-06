import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import RateLimitUI from "../components/RateLimitUI";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        setNotes(res.data);
        setIsRateLimited(false);
        console.log(res.data);
      } catch (error) {
        console.log("error fetching notes", error);
        console.log(error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load toast");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar height */}
      <Box sx={{ height: "80px" }} />

      {/* Rate Limit UI centered below navbar */}
      {isRateLimited && <RateLimitUI />}

      <Box className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <Box className="text-center text-primary py-10">Loading Notes..</Box>
        )}

        {notes.length > 0 && !isRateLimited && (
          <Box>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} />   
              ))}
            </div>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
