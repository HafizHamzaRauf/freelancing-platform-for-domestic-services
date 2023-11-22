import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import { heroSectionReviewsAboutPlatform } from "../../Utils/constants";
import Image1 from "../../Assets/ReviewImages/img1.jpg";
import Image2 from "../../Assets/ReviewImages/img2.jpg";
import Image3 from "../../Assets/ReviewImages/img3.jpg";
import Image4 from "../../Assets/ReviewImages/img4.jpg";

const Reviews = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant="p" component="p" sx={{ fontWeight: "bold" }}>
        {heroSectionReviewsAboutPlatform}
      </Typography>
      <AvatarGroup total={24} sx={{ alignSelf: "flex-start" }}>
        <Avatar alt="Remy Sharp" src={Image1} />
        <Avatar alt="Travis Howard" src={Image2} />
        <Avatar alt="Agnes Walker" src={Image3} />
        <Avatar alt="Trevor Henderson" src={Image4} />
      </AvatarGroup>
    </Box>
  );
};

export default Reviews;
