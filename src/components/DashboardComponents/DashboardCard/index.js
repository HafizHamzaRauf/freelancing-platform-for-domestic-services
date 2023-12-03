import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CountUp from "react-countup";

const DashboardCard = ({ Title, Value }) => {
  return (
    <Grid sx={{}} item xs={12} sm={6} md={6} lg={6}>
      <Card sx={{ backgroundColor: "aliceblue", p: 1 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {Title}
          </Typography>
          <Typography variant="p" sx={{ fontSize: "1.5rem" }}>
            <CountUp end={Value} duration={2} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DashboardCard;
