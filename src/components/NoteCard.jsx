import { Typography, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="block w-full min-h-[220px] p-6 sm:p-7 border-2 border-[#F87B1B]/30 
                 rounded-2xl bg-[#F5E5E1] text-[#F87B1B] shadow-md 
                 hover:shadow-xl hover:-translate-y-1 hover:bg-[#f7b6a5]/70 
                 transition-all duration-300 ease-in-out"
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4 gap-3">
        <Typography
          variant="h6"
          sx={{
            fontWeight: "700",
            color: "#F87B1B",
            fontSize: { xs: "1.3rem", sm: "1.4rem" },
            lineHeight: 1.4,
          }}
        >
          {note.title.length > 30 ? note.title.slice(0, 30) + "..." : note.title}
        </Typography>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <IconButton
            size="small"
            className="hover:bg-[#f7b6a5] text-[#F87B1B]"
            onClick={(e) => e.preventDefault()}
          >
            <IoCreateOutline size={18} />
          </IconButton>

          <IconButton
            size="small"
            className="hover:bg-[#f7b6a5] text-[#F87B1B]"
            onClick={(e) => e.preventDefault()}
          >
            <FaRegTrashCan size={16} />
          </IconButton>
        </div>
      </div>

      {/* Content */}
      <Typography
        variant="body2"
        sx={{
          color: "#b84d0f",
          fontSize: { xs: "1rem", sm: "1.05rem" },
          lineHeight: 1.7,
        }}
      >
        {note.content.length > 120
          ? note.content.slice(0, 120) + "..."
          : note.content}
      </Typography>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center text-sm text-[#a55a2b]">
        <span className="italic">
          {new Date(note.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span className="px-3 py-1 bg-[#F87B1B]/20 text-[#F87B1B] rounded-full text-xs font-medium">
          Note
        </span>
      </div>
    </Link>
  );
};

export default NoteCard;
