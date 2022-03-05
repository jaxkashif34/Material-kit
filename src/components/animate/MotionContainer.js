import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { varWrapEnter } from "./variants/Wrap";

MotionContainer.prototype = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
};

export default function MotionContainer({ children, open, ...other }) {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? "animate" : "exit"}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
