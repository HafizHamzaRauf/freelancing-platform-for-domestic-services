import { Box, Button, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import FilterButton from "../FilterButton";
import AddIcon from "@mui/icons-material/Add";
import { buttonFilters, dummyProjects } from "../../../Utils/constants";
import FilterButtonGroup from "../FilterButtonGroup";
import ProjectCard from "../ProjectCard";
import MobileProjectCard from "../MobileProjectCard";

const ManageProjectsStyling = {
  ManageProjectBox: { m: { xs: "3rem 1.5rem", sm: "3rem" } },
  topDescription: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 3,
  },
  addProjectButton: {
    display: { xs: "block", sm: "none" },
    borderRadius: "10px",
  },
  buttonFiltersBox: {
    display: { xs: "none", sm: "flex" },
    gap: 0.5,
  },
};

const ManageProjectsMainStyles = {
  makeInlineBlock: { display: "inline-block" },
};

const itemsPerPage = 8;
const ManageProjectsMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to the first page when changing filters
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const filteredProjects =
    activeFilter?.trim().toLowerCase() === "all"
      ? dummyProjects
      : dummyProjects.filter(
          (project) =>
            project?.status?.toLowerCase() === activeFilter.trim().toLowerCase()
        );

  const numberOfPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <Box sx={ManageProjectsStyling.ManageProjectBox}>
      <Box sx={ManageProjectsStyling.topDescription}>
        <Typography variant="h5">My Projects</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon></AddIcon>}
          sx={ManageProjectsStyling.addProjectButton}
        ></Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            ...ManageProjectsMainStyles.makeInlineBlock,
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Typography variant="p">Filter By:</Typography>
          <FilterButtonGroup
            filters={buttonFilters}
            activeFilter={activeFilter}
            onClick={handleFilterClick}
          />

          <Box sx={ManageProjectsStyling.buttonFiltersBox}>
            {buttonFilters.map((filter) => (
              <FilterButton
                key={filter.value}
                filter={filter.value}
                activeFilter={activeFilter}
                onClick={handleFilterClick}
              >
                {filter.label}
              </FilterButton>
            ))}
          </Box>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon></AddIcon>}
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          New Project
        </Button>
      </Box>
      <Box
        sx={{
          justifyContent: "space-around",
          display: { xs: "none", md: "flex" },
          m: "2rem 0",
        }}
      >
        <Typography variant="h6" sx={{ pr: "4rem" }}>
          Project
        </Typography>
        <Typography variant="h6">Freelancer</Typography>
        <Typography variant="h6">Status</Typography>

        <Typography variant="h6">Completed Date</Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {currentProjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              Title={project.title}
              Description={project.description}
              freelancer={project.freelancer}
              status={project.status}
              date={project.date}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mt: 4,
          display: { xs: "flex", md: "none" },
        }}
      >
        {currentProjects.map((project) => (
          <MobileProjectCard
            key={project.id}
            projectId={project.id}
            Title={project.title}
            Description={project.description}
          />
        ))}
      </Box>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={numberOfPages}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ManageProjectsMain;
