import React from 'react';
import { Grid, Box } from '@mui/material';
import { Typography } from "@material-tailwind/react";

function Contact() {
    return (
        <div className="pl-10 pr-10" style={{backgroundColor:"#f6f5f5", color:"#5f5757"}}>
            <Box
                sx={{
                    textAlign: "center",
                    py: 10,
                    px: 4,
                    mx: 4,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div>
                    <Typography
                        variant="h1"
                        className="mb-6"
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        className="text-2xl font-normal"
                    >
                        We encourage you to reach out with any concerns or inputs into how we can better serve you!
                    </Typography>
                </div>
            </Box>

            <Box>
                <Grid container spacing={3} alignItems="center" justifyContent="space-evenly">
                    <Grid item>
                        <Typography className="text-2xl font-normal">
                           Send us an email
                        </Typography>
                        <Typography className="text-2xl font-normal">
                           himaliwater@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className="text-2xl font-normal">
                           Call Us
                        </Typography>
                        <Typography className="text-2xl font-normal">
                           571 344 8969
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Contact;