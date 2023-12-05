import { Box, Button, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import FilterButton from "../FilterButton";
import AddIcon from "@mui/icons-material/Add";
import { buttonFilters } from "../../../Utils/constants";
import FilterButtonGroup from "../FilterButtonGroup";
import ProjectCard from "../ProjectCard";
import MobileProjectCard from "../MobileProjectCard";

const ManageProjectsMainStyles = {
  makeInlineBlock: { display: "inline-block" },
};

const dummyProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    freelancer: "John Doe",
    status: "Active",
    date: "10/12/2021",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description 2",
    freelancer: "Jane Smith",
    status: "Completed",
    date: "12/05/2022",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description 3",
    freelancer: "Alice Johnson",
    status: "Cancelled",
    date: "05/20/2021",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description 4",
    freelancer: "Bob Williams",
    status: "Active",
    date: "08/15/2021",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description 5",
    freelancer: "Charlie Brown",
    status: "Completed",
    date: "04/02/2022",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description 6",
    freelancer: "David Wilson",
    status: "Active",
    date: "11/30/2022",
  },
  {
    id: 7,
    title: "Project 7",
    description: "Description 7",
    freelancer: "Eva Davis",
    status: "Cancelled",
    date: "07/10/2021",
  },
  {
    id: 8,
    title: "Project 8",
    description: "Description 8",
    freelancer: "Frank Moore",
    status: "Active",
    date: "09/25/2022",
  },
  {
    id: 9,
    title: "Project 9",
    description: "Description 9",
    freelancer: "Grace Taylor",
    status: "Completed",
    date: "02/18/2023",
  },
  {
    id: 10,
    title: "Project 10",
    description: "Description 10",
    freelancer: "Harry Anderson",
    status: "Active",
    date: "06/14/2021",
  },
  {
    id: 11,
    title: "Project 10",
    description: "Description 10",
    freelancer: "Harry Anderson",
    status: "Active",
    date: "06/14/2021",
  },
  // Add more projects as needed
];

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
    <Box sx={{ m: { xs: "3rem 1.5rem", sm: "3rem" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="h5">My Projects</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon></AddIcon>}
          sx={{
            display: { xs: "block", sm: "none" },
            borderRadius: "10px",
          }}
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

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 0.5,
            }}
          >
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
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            Title={project.title}
            Description={project.description}
            freelancer={project.freelancer}
            status={project.status}
            date={project.date}
          />
        ))}
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
