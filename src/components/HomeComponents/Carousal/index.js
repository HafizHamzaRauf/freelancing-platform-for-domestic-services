import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
const Carousal = () => {
  const carouselData = [
    {
      title: "Professional Painter",
      image: "/CarousalImages/carpenter.jpg",
      quote: "Transforming spaces with a stroke of excellence.",
    },
    {
      title: "Skilled Electrician",
      image: "/CarousalImages/electrician1.jpg",
      quote: "Powering up your life with precision and safety.",
    },
    {
      title: "Expert Mechanic",
      image: "/CarousalImages/mechanic1.jpg",
      quote: "Keeping your wheels turning smoothly.",
    },
    // Add more items as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
  };
  const theme = useTheme();
  const isSmOrBelow = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  console.log(isSmOrBelow);
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                display: "flex",
                height: isSmOrBelow ? "400px" : "600px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white", // Set text color to be visible on the images
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography variant="h5">{item.quote}</Typography>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
