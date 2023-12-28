import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserTypeContext } from "../../../Store/UserTypeProvider";
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

const ProjectCardStyling = {
  projectCardBox: {
    backgroundColor: "aliceblue",
    p: "1rem 0",
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "5px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative", // Add relative positioning to the container
    "&:hover": { cursor: "pointer" },
  },
  projectCardTop: { display: "flex", flexDirection: "column" },
  statusBox: {
    position: "relative",
  },
  status: {
    width: "8px",
    height: "8px",
    position: "absolute",
    top: "20%",
    left: "-20%",
    borderRadius: "50%",
  },
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
  const userTypeState = useContext(UserTypeContext);
  // Truncate the title to 16 characters
  const truncatedTitle = Title.length > 16 ? `${Title.slice(0, 16)}...` : Title;

  // Truncate the description to 16 characters
  const truncatedDescription =
    Description.length > 16 ? `${Description.slice(0, 16)}...` : Description;

  // Truncate the freelancer to 10 characters
  const truncatedFreelancer =
    freelancer.length > 10 ? `${freelancer.slice(0, 10)}...` : freelancer;

  const projectClickHandler = () => {
    if (userTypeState.isFreelancer) {
      navigate("/freelancer/projects/" + projectId?.toString());
    } else {
      navigate("/projects/" + projectId?.toString());
    }
  };

  const cancelProjectHandler = (event) => {
    event.stopPropagation();
    console.log("cancel project");
  };

  return (
    <Box
      onClick={projectClickHandler}
      key={projectId}
      sx={ProjectCardStyling.projectCardBox}
    >
      <Box sx={ProjectCardStyling.projectCardTop}>
        <Typography variant="p">{truncatedTitle}</Typography>
        <Typography variant="p">{truncatedDescription}</Typography>
      </Box>
      <Typography variant="p">{truncatedFreelancer}</Typography>
      <Box sx={ProjectCardStyling.statusBox}>
        {/* Show a small dot with different color based on the status */}
        <Box
          sx={{
            ...ProjectCardStyling.status,
            backgroundColor: getStatusColor(status),
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
