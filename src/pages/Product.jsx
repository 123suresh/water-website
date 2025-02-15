import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";

export function Product() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          mx: 4,
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: 'url("http://2.bp.blogspot.com/-jWhPrOCp9Go/T32MgnfjjzI/AAAAAAAABy0/8TeGZipp_J4/s1600/Water+Splash+Wallpapers+4.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            zIndex: 1,
          }}
        />

        <Box position="relative" zIndex={2}>
          <Typography
            variant="h1"
            sx={{ 
              mb: 6, 
              fontWeight: "bold", 
              fontSize: { xs: "2.5rem", md: "4rem" }, 
              color: "white" 
            }}
          >
            Our Product
          </Typography>
          
          <Typography
            variant="subtitle1"
            sx={{ 
              fontSize: { xs: "1.5rem", md: "2rem" }, 
              color: "white",
              paddingLeft:"80px",
              paddingRight:"80px"
            }}
          >
            Himali Water – Pure, refreshing, and enriched with essential minerals for perfect hydration. Stay healthy with every sip!
          </Typography>
        </Box>
      </Box>

      <Box py="60px">
        <Grid container sapcing={4} alignItems="center">
            <Grid item md={6} sm={12}>
                <img src="https://pngimg.com/uploads/water_bottle/water_bottle_PNG98954.png"
                width="70%"
                />
            </Grid>
            <Grid item md={6} sm={12}>


            <Typography
                variant="h4"
                // color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
               New Look
              </Typography>
              <Typography
                variant="h1"
                // color="white"
                className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl"
              >
                Himali Water
              </Typography>
              <Typography
                variant="h4"
                // color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Naturally Filtered <br/>
                Perfectly Balanced
              </Typography>
              <Typography variant="lead"  className="opacity-80 text-lg md:text-xl">
                Everest Multi Tech is the answer to all your technology issues. From cracked screens to broken charging ports, a malfunctioning game console to broken printers, we will service it all and get you back up and running!
              </Typography>


            </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Product;