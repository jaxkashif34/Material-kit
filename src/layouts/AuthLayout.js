import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Logo from "components/Logo";
const HeadStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  position: "absolute",
  width: "100%",
  // background: "skyblue",
  display: "flex",
  alighItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

export default function AuthLayout({ children }) {
  return (
    <HeadStyle>
      <Logo />
      <Typography
        variant="body2"
        sx={{ display: { xs: "none", sm: "block" }, mt: { md: -2 } }}
      >
        {children}
      </Typography>
    </HeadStyle>
  );
}
