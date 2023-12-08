import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "green";
    case "Active":
      return "blue";
    case "Cancelled":
      return "red";
    default:
      return "gray";
  }
};

const ProjectCard = ({
  projectId,
  Title,
  Description,
  freelancer,
  status,
  date,
}) => {
  const navigate = useNavigate();
  // Truncate the title to 16 characters
  const truncatedTitle = Title.length > 16 ? `${Title.slice(0, 16)}...` : Title;

  // Truncate the description to 16 characters
  const truncatedDescription =
    Description.length > 16 ? `${Description.slice(0, 16)}...` : Description;

  // Truncate the freelancer to 10 characters
  const truncatedFreelancer =
    freelancer.length > 10 ? `${freelancer.slice(0, 10)}...` : freelancer;

  const projectClickHandler = () => {
    navigate("/projects/" + projectId?.toString());
  };

  const cancelProjectHandler = (event) => {
    event.stopPropagation();
    console.log("cancel project");
  };

  return (
    <Box
      onClick={projectClickHandler}
      key={projectId}
      sx={{
        backgroundColor: "aliceblue",
        p: "1rem 0",
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "5px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative", // Add relative positioning to the container
        "&:hover": { cursor: "pointer" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="p">{truncatedTitle}</Typography>
        <Typography variant="p">{truncatedDescription}</Typography>
      </Box>
      <Typography variant="p">{truncatedFreelancer}</Typography>
      <Box
        sx={{
          position: "relative",
        }}
      >
        {/* Show a small dot with different color based on the status */}
        <Box
          sx={{
            width: "8px",
            height: "8px",
            backgroundColor: getStatusColor(status),
            position: "absolute",
            top: "20%",
            left: "-20%",
            borderRadius: "50%",
          }}
        />

        <Typography variant="p">{status}</Typography>
      </Box>
      {status.toLowerCase() === "completed" ||
      status.toLowerCase() === "cancelled" ? (
        <Typography variant="p">{date}</Typography>
      ) : (
        <Button variant="outlined" onClick={cancelProjectHandler}>
          Cancel
        </Button>
      )}
    </Box>
  );
};

export default ProjectCard;
