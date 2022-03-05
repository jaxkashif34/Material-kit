import React from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Iconify from "components/Iconify";

const RootStyle = styled("div")(({ theme }) => ({
  "& .MuiAutocomplete-root": {
    width: 200,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      width: 240,
      "& .MuiAutocomplete-inputRoot": {
        boxShadow: theme.customShadows.z12,
      },
    },
  },
  "& .MuiAutocomplete-inputRoot": {
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  },
  "& .MuiAutocomplete-option": {
    "&:not(:last-child)": {
      borderBottom: `solid 1px ${theme.palette.divider}`,
    },
  },
}));

export default function BlogPostsSearch({ posts }) {
  return (
    <RootStyle>
      <Autocomplete
        size="small"
        disablePortal
        popupIcon={false}
        options={posts}
        getOptionLabel={(post) => post.title}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              palceholder="Search post..."
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <InputAdornment position="start">
                      <Iconify
                        icon="eva:search-fill"
                        sx={{
                          width: 20,
                          height: 20,
                          ml: 1,
                          color: "text.disabled",
                        }}
                      />
                    </InputAdornment>
                  </>
                ),
              }}
            />
          );
        }}
      />
    </RootStyle>
  );
}
