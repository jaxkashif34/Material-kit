import React from "react";
import { Box } from "@mui/material";

export default function SvgIconStyle({ src, color = "inherit", sx }) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: `${color}.main`,
        ...(color === "inherit" && { bgcolor: "currentcolor" }),
        ...(color === "action" && { bgcolor: "action.active" }),
        ...(color === "disabled" && { bgcolor: "action.disabled" }),
        ...(color === "paper" && { bgcolor: "background.paper" }),
        ...sx,
      }}
    />
  );
}
