import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

export default function Logo({ sx }) {
  return (
    <RouterLink to="/">
      <Box
        component="img"
        src="/static/logo.svg"
        sx={{ width: 40, height: 40, ...sx }}
      ></Box>
    </RouterLink>
  );
}
