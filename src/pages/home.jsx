import React from "react";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {RepairSlidingImg} from '../everestdata/RepairData';
import { Box, Grid } from "@mui/material";
import {servicesData} from "../everestdata/servicesData"

export function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative flex h-[80vh] content-center items-center justify-center pt-16 pb-32 pt-30">
        {/* Background Image */}
        <img
          src="https://www.pngarts.com/files/3/Everest-PNG-High-Quality-Image.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="max-w-8xl container relative mx-auto z-20" style={{paddingTop:"30px"}}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Image on the Left */}
            <Grid item md={6} xs={12} className="flex justify-center" sx='display:"none"'>
              <img
                // src="http://clipart-library.com/images_k/water-png-transparent/water-png-transparent-21.png"
                src="https://www.pngmart.com/files/16/Plastic-Water-Bottle-PNG-Clipart.png"
                alt="Water"
                className="w-full max-w-md rounded-lg shadow-lg"
                width="70%"
              />
            </Grid>

            {/* Text on the Right */}
            <Grid item md={6} xs={12} className="text-center lg:text-left">
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
               New Look
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl"
              >
                Himali Water
              </Typography>
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Naturally Filtered <br/>
                Perfectly Balanced
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-lg md:text-xl">
                Everest Multi Tech is the answer to all your technology issues. From cracked screens to broken charging ports, a malfunctioning game console to broken printers, we will service it all and get you back up and running!
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


            <Grid item md={6} sm={12} className="flex justify-center">
                <img src="https://pngimg.com/uploads/water_bottle/water_bottle_PNG98954.png"
                width="70%"
                />
            </Grid>


        </Grid>
      </Box>

      <section className="px-10 py-20 bg-gray-50">
      <Grid container spacing={6} alignItems="center">
        <Grid item md={6} xs={12} className="flex justify-center">
          <img
            src="/img/everest_logo1.png"
            alt="Everest Logo"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Grid container spacing={4} direction="column">
            <Grid item>
              <Typography style={{fontSize:"24px", fontWeight:"700", color:"#747686"}}>
                Himali was established in 1995 and has gone on to gain popularity as the number one 
                bottled water brand in Nepal. The brand is the most preferred choice of Nepali, 
                because it delivers quality that is rich in natural nutrients essential for healthy 
                growth.
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{fontSize:"24px", fontWeight:"700", color:"#747686"}}>
                Himali Natural Mineral Water offers quality in different pack sizes (500ml, 750ml, 1.5L, and 19.5L) 
                to meet the day-to-day preference and convenience of consumers. It is ISO and HCCAP certified 
                and is bottled at source from a natural aquifer 60 meters underground.
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