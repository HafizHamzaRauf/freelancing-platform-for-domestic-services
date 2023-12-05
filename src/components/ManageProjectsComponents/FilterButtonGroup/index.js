// FilterButtonGroup.jsx
import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuItem,
  MenuList,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const FilterButtonGroupStyles = {
  responsiveness: {
    display: { xs: "block", sm: "none" },
  },
};
const FilterButtonGroup = ({ filters, activeFilter, onClick }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        sx={FilterButtonGroupStyles.responsiveness}
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleToggle}>{activeFilter}</Button>
        <Button size="medium" onClick={handleToggle}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={FilterButtonGroupStyles.responsiveness}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {filters.map((filter) => (
                    <MenuItem
                      key={filter.value}
                      selected={activeFilter === filter.value}
                      onClick={(e) => {
                        onClick(filter.value);
                        handleClose(e);
                      }}
                    >
                      {filter.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default FilterButtonGroup;
