import React from "react";
import { TextField, MenuItem } from "@mui/material";

const SORT_OPTTIONS = [
  { value: "latest", label: "Latest" },
  { value: "poular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

export default function BlogPostsSort() {
  return (
    <TextField select size="small" value="latest">
      {SORT_OPTTIONS.map((option, index) => {
        return (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
