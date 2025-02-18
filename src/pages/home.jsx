import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Box, Grid } from "@mui/material";

export function Home() {
  return (
    <>
      <div className="relative flex h-[80vh] content-center items-center justify-center">
        <img
          src="/img/homepagebg.png"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{backgroundColor:"#3AAFA9"}}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <div className="max-w-8xl container relative mx-auto z-20" style={{ paddingTop: "30px" }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item md={6} xs={12} className="hidden sm:flex justify-center">
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                    <img src="/img/himaliwater1.png" alt="Water" width="150%" />
              </Box>
            </Grid>

            <Grid item md={6} xs={12} className="text-center lg:text-left" sx={{color:"#FEFFFF"}}>
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
                Naturally Filtered <br />
                Perfectly Balanced
              </Typography>
              <Typography variant="lead" className="opacity-80 text-lg md:text-xl">
                Pure, refreshing, and enriched with essential minerals, Himali Water is the perfect
                choice for healthy hydration. Sourced from nature and carefully purified, it delivers
                crisp taste and nourishment in every sip!
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>

      <Box py="60px" px="60px">
        <Grid container sapcing={4} alignItems="center">

          <Grid item md={6} sm={12}>

            <Typography
              variant="h1"
              className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl"
            >
              Himali Water
            </Typography>
            <Typography
              variant="h4"
              className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
            >
              Expertly purified & <br />
              Mineral Rich
            </Typography>
            <Typography variant="lead" className="opacity-80 text-lg md:text-xl">
              Himali Water – Expertly purified & mineral-rich, delivering crisp, refreshing
              hydration for a healthier you. Sourced from nature and carefully balanced,
              it provides essential minerals to keep you revitalized every day!
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} className="flex justify-center">
            <img src="/img/productimg2.png"
              width="90%"
            />
          </Grid>
        </Grid>
      </Box>

      <section className="px-10 py-20 bg-gray-50">
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6} xs={12} className="flex justify-center">
            <img
              src="/img/Himali-Water.png"
              alt="Everest Logo"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <Grid container spacing={4} direction="column">
              <Grid item>
                <Typography style={{ fontSize: "24px", fontWeight: "700", color: "#747686" }}>
                  Himali was established in 2024 and has gone on to gain popularity as the number one
                  bottled water brand in USA. The brand is the most preferred choice of USA,
                  because it delivers quality that is rich in natural nutrients essential for healthy
                  growth.
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ fontSize: "24px", fontWeight: "700", color: "#747686" }}>
                  Himali Natural Mineral Water offers quality in different pack sizes (500ml, 750ml, 1.5L, and 19.5L)
                  to meet the day-to-day preference and convenience of consumers. It is ISO certified.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>

    </>
  );
}

export default Home;