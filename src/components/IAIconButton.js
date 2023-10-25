import React from "react";
import IconButton from "@mui/material/IconButton";

export default function IAIconButton({ children, label, color, sx, onClick }) {
  return (
    <IconButton aria-label={label} color={color} sx={sx} onClick={onClick}>
      {children}
    </IconButton>
  );
}