import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

import React from "react";

export default function Iconify({ icon, sx, ...other }) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other}></Box>;
}

Iconify.propTyper = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};
