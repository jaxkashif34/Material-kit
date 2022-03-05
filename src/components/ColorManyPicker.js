import React from "react";
import { Box, Checkbox } from "@mui/material";
import Iconify from "./Iconify";

function IconColor({ sx, ...other }) {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        display: "flex",
        borderRadius: "50%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "currentColor",
        transition: (theme) => {
          theme.transitions.create("all", {
            duration: theme.transitions.duration.shortest,
          });
        },
        ...sx,
      }}
    >
      <Iconify icon="eva:checkmark-fill" />
    </Box>
  );
}

export default function ColorManyPicker({ colors, onChecked, sx, ...other }) {
  return (
    <Box sx={sx}>
      {colors.map((color, index) => {
        const isWhite = color === "#FFFFFF" || color === "white";
        return (
          <Checkbox
            key={index}
            size="small"
            value={color}
            color="default"
            checked={onChecked(color)}
            icon={
              <IconColor
                sx={{
                  ...(isWhite && {
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }),
                }}
              />
            }
            checkedIcon={
              <IconColor
                sx={{
                  transform: `scale(1.5)`,
                  "&:before": {
                    opacity: 0.48,
                    width: "100%",
                    content: "''",
                    height: "100%",
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: "4px 4px 8px 0 currentColor",
                  },
                  "& svg": { width: 12, height: 12, color: "common.white" },
                  ...(isWhite && {
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    boxShadow: (theme) =>
                      `4px 4px 8px 0 ${theme.palette.grey[500_24]}`,
                    "& svg": { width: 12, height: 12, color: "common.black" },
                  }),
                }}
              />
            }
            sx={{
              color,
              "&:hover": { opacity: 0.72 },
            }}
            {...other}
          />
        );
      })}
    </Box>
  );
}
