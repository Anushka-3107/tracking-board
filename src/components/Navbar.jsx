import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <Box
      sx={{
        backgroundColor: "#F5E5E1", 
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        width: "100vw",
        position:"fixed",
        top:0,
        left:0,
        zIndex: 1100,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)", 
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color:"#F87B1B",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          ThinkBoard
        </Typography>

        <Button
            variant="contained"
            startIcon={<FaPlus />}
            sx={{
              backgroundColor: "#00C853",
              "&:hover": { backgroundColor: "#00E676" },
              borderRadius: "10px",
              fontWeight: "600",
              px: 3,
              py: 1,
              textTransform: "none",
            }}
            onClick={() => navigate("/create")}
          >
            New Note
          </Button> 
      </Box>
    </Box>
  );
};

export default Navbar;
