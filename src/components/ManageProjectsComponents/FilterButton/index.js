import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const FilterButton = ({ filter, activeFilter, onClick, children }) => (
  <Button
    sx={{ borderRadius: "12px" }}
    variant={activeFilter === filter ? "contained" : "outlined"}
    color="secondary"
    onClick={() => onClick(filter)}
  >
    {children}
  </Button>
);

export default FilterButton;
