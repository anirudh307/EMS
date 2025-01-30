import React from "react";
import { Box, Container, Typography } from "@mui/material";

const MainFooter = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4, py: 2, backgroundColor: "black" }}>
      <Container>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          © {new Date().getFullYear()} Employee Administration System
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          Delivering efficient employee management solutions.
        </Typography>
      </Container>
    </Box>
  );
};

export default MainFooter;
