import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid"; 
import img5 from "../assets/img5.jpeg"

const InfoSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        py: 4,
        borderTop: "1px solid #ddd",
        width: "100%",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Image */}
          <Grid item xs={12} md={6}>
            <img
              src={img5} 
              alt="Employee Administration"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>

          {/* Right Side - Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              About Employee Administration System
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Employee administration that uses coaching to motivate and build
              trust with workers can unlock enormous human potential. Yet,
              communication tactics alone may fall short in the face of
              multi-generational workforces, rising numbers of freelance
              workers, and complex regulations.
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
              Technology, whether it’s workforce administration software or a
              human capital administration solution, can help business leaders
              maintain productivity more effectively in rapidly changing
              environments.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InfoSection;
