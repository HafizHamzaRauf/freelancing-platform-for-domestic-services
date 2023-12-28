import { Box, Button, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import FilterButton from "../../ManageProjectsComponents/FilterButton";
import AddIcon from "@mui/icons-material/Add";
import { buttonFilters, dummyProjects } from "../../../Utils/constants";
import FilterButtonGroup from "../../ManageProjectsComponents/FilterButtonGroup";
import ProjectCard from "../../ManageProjectsComponents/ProjectCard";
import MobileProjectCard from "../../ManageProjectsComponents/MobileProjectCard";
import { useNavigate } from "react-router-dom";

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
  desktopFilterButtonBox: {
    display: "inline-block",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  buttonFiltersOuterBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", sm: "row" },
  },
  newProjectButton: {
    justifyContent: "space-around",
    display: { xs: "none", md: "flex" },
    m: "2rem 0",
  },
  projectList: {
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    gap: "1rem",
  },
  mobileProjectList: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    mt: 4,
    display: { xs: "flex", md: "none" },
  },
  paginationBox: {
    mt: 3,
    display: "flex",
    justifyContent: "center",
  },
};

const itemsPerPage = 8;
const FreelancerManageProjectsMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
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
      </Box>
      <Box sx={ManageProjectsStyling.buttonFiltersOuterBox}>
        <Box sx={ManageProjectsStyling.desktopFilterButtonBox}>
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
      </Box>
      <Box sx={ManageProjectsStyling.newProjectButton}>
        <Typography variant="h6" sx={{ pr: "4rem" }}>
          Project
        </Typography>
        <Typography variant="h6">Freelancer</Typography>
        <Typography variant="h6">Status</Typography>

        <Typography variant="h6">Completed Date</Typography>
      </Box>
      <Box sx={ManageProjectsStyling.projectList}>
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
      <Box sx={ManageProjectsStyling.mobileProjectList}>
        {currentProjects.map((project) => (
          <MobileProjectCard
            key={project.id}
            projectId={project.id}
            Title={project.title}
            Description={project.description}
          />
        ))}
      </Box>
      <Box sx={ManageProjectsStyling.paginationBox}>
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

export default FreelancerManageProjectsMain;
