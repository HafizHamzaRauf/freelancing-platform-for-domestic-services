import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import category1 from "../../../Assets/CategoriesImages/icon1.png";
import category2 from "../../../Assets/CategoriesImages/icon2.png";
import category3 from "../../../Assets/CategoriesImages/icon3.png";
import category4 from "../../../Assets/CategoriesImages/icon4.png";
import category5 from "../../../Assets/CategoriesImages/icon5.png";

const Categories = () => {
  const categoryImages = [
    { id: 2, src: category2, alt: "Home Maintenance" },
    { id: 1, src: category1, alt: "Cleaning" },
    { id: 3, src: category3, alt: "Appliance Repair" },
    { id: 4, src: category4, alt: "Event Planning" },
    { id: 5, src: category5, alt: "Gardening" },
  ];

  return (
    <Box
      sx={{
        p: "4rem",
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        pb: "6rem",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Diverse Service Offerings
      </Typography>
      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
        {categoryImages.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} lg={4}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "150px", borderRadius: "10px" }}
                src={category.src}
                alt={category.alt}
              />
              <Typography variant="h5">{category.alt}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
