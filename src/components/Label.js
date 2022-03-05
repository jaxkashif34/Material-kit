import React from "react";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";

const RootStyles = styled("span")(({ theme, ownerState }) => {
  const { color, variant } = ownerState;
  const StyledFilled = (color) => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
  });

  const StyledOutlined = (color) => ({
    color: theme.palette[color].main,
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette[color].main}`,
  });

  const styledGhost = (color) => ({
    color: theme.palette[color].dark,
    backgroundColor: alpha(theme.palette[color].main, 0.16),
  });
  return {
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 8,
    cursor: "default",
    alignItems: "center",
    whiteSpace: "nowrap",
    display: "inline-flex",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,
    ...(color !== "default"
      ? {
          ...(variant === "filled" && { ...StyledFilled(color) }),
          ...(variant === "outlined" && { ...StyledOutlined(color) }),
          ...(variant === "ghost" && { ...styledGhost(color) }),
        }
      : {
          ...(variant === "outlined" && {
            backgroundColor: "transparent",
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.grey[500_32]}`,
          }),
          ...(variant === "ghost" && {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.grey[500_16],
          }),
        }),
  };
});

export default function Label({
  color = "default",
  variant = "ghost",
  children,
  ...other
}) {
  // console.log(color);
  return (
    <RootStyles ownerState={{ color, variant }} {...other}>
      {children}
    </RootStyles>
  );
}

Label.prototype = {
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "error",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
  children: PropTypes.node,
};
