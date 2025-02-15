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
      <div className="relative flex h-[80vh] content-center items-center justify-center pt-16 pb-32">
        {/* Background Image */}
        <img
          src="https://iesmariagaliana.es/wp-content/uploads/2017/01/Fondo_agua_800.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="max-w-8xl container relative mx-auto z-20">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Image on the Left */}
            <Grid item md={6} xs={12} className="flex justify-center">
              <img
                src="http://clipart-library.com/images_k/water-png-transparent/water-png-transparent-21.png"
                alt="Water"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </Grid>

            {/* Text on the Right */}
            <Grid item md={6} xs={12} className="text-center lg:text-left">
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Welcome to
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl"
              >
                EVEREST MULTI TECH
              </Typography>
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Repair and Printing
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-lg md:text-xl">
                Everest Multi Tech is the answer to all your technology issues. From cracked screens to broken charging ports, a malfunctioning game console to broken printers, we will service it all and get you back up and running!
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Services Section */}
      <section className="px-2.5 pt-20 pb-48 bg-gray-50">
        <div className="container mx-auto">
          <PageTitle section="Our Services" heading="Here are our Services">
            At Everest Multi Tech Co LLC, we are your one-stop shop for a wide range of services 
            designed to meet your personal and business needs. Whether you need custom printing, 
            phone repairs, IT support, or remittance services, we’ve got you covered. Explore our 
            full list of offerings below, and trust us to deliver the highest quality service 
            every time.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {servicesData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;