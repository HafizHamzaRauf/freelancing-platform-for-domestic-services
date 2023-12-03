import React from "react";
import BoxLayout from "../../Layout/BoxLayout";
import CenterLayout from "../../Layout/CenterLayout";
import { Button, TextField, Typography } from "@mui/material";
import AppIcon from "../UtilComponents/AppIcon";
import theme from "../../Utils/theme";

const PostProjectForm = () => {
  return (
    <CenterLayout>
      <BoxLayout customStyles={{ width: "25rem" }}>
        <AppIcon></AppIcon>
        <Typography variant="h6" sx={{ m: "1rem 0" }}>
          Post a Project
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <TextField
            type="text"
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Project Title"
            variant="outlined"
          />
          <TextField
            type="text"
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Project Description"
            multiline
            rows={4}
          />
          <TextField
            type="number"
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Project Budget"
            variant="outlined"
          />
          <TextField
            type="number"
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Duration (no of days)"
            variant="outlined"
          />
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              alignSelf: "flex-start",
            }}
            variant="contained"
          >
            Post
          </Button>
        </form>
      </BoxLayout>
    </CenterLayout>
  );
};

export default PostProjectForm;
