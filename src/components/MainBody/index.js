import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import {
  heroSectionDescription,
  heroSectionHeading,
  heroSectionHeading1,
  heroSectionHeading2,
} from "../../Utils/constants";
import HeroImage from "../../Assets/heroimage.png";
import theme from "../../Utils/theme";
import Reviews from "./Reviews";
import { useNavigate } from "react-router-dom";

// **********************       Main Body Styles **************************//
const MainBodyStyles = {
  MainBodyBox: {
    color: "black",
    display: "flex",
    m: { xs: "2.5rem 1rem", md: "6rem 4rem" },
    gap: "8rem",
  },
  HeroSectionDescription: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    p: "2rem",
  },
  HeroSectionheading: {
    display: "inline-block",
    color: "black",
    fontWeight: "bold",
    fontSize: { xs: "2rem", md: "3rem", xl: "4rem" },
  },
  HeroSectionButton: {
    backgroundColor: theme.palette.secondary.main,
    alignSelf: "start",
  },
  HeroSectionImageBox: { display: { xs: "none", md: "block" } },

  HeroSectionImage: { width: "25rem", height: "25rem", borderRadius: "2rem" },
};

// **********************       Main Body Component **************************//

const MainBody = () => {
  const navigate = useNavigate();
  const getStartedHandler = () => {
    navigate("/signup");
  };
  return (
    <Box sx={MainBodyStyles.MainBodyBox}>
      <Box sx={MainBodyStyles.HeroSectionDescription}>
        <Box>
          <Typography
            variant="h2"
            component="h2"
            sx={MainBodyStyles.HeroSectionheading}
          >
            {heroSectionHeading1}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              ...MainBodyStyles.HeroSectionheading,
              color: theme.palette.secondary.main,
              whiteSpace: "pre-wrap",
            }}
          >
            {" Local Talent ,"}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={MainBodyStyles.HeroSectionheading}
          >
            {heroSectionHeading2}
          </Typography>
        </Box>
        <Typography variant="h6" component="h6" sx={{}}>
          {heroSectionDescription}
        </Typography>
        <Button
          sx={MainBodyStyles.HeroSectionButton}
          variant="contained"
          onClick={getStartedHandler}
        >
          Get Started
        </Button>
        <Reviews></Reviews>
      </Box>
      <Box sx={MainBodyStyles.HeroSectionImageBox}>
        <img src={HeroImage} style={MainBodyStyles.HeroSectionImage} />
      </Box>
    </Box>
  );
};

export default MainBody;
