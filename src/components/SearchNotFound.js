import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";

export default function SearchNotFound({ searchQuery = "", ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not Found
      </Typography>
      <Typography variant="body2" align="center">
        No result found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for types or
        using compelte word
      </Typography>
    </Paper>
  );
}

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string,
};
