import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "./Hero.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

import React, { useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const dataSlider =[
  {text: "MEN" , link :"src/assets/images/banner-15.jpg"},
  {text: "WOMEN" , link :"src/assets/images/banner-25.jpg"},
]




export default function Hero() {
  const theme = useTheme();
  return (
    <>
      <Container className="hero" maxWidth={false}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          loop={true}
        >
{dataSlider.map((item) =>{
  return(
    <SwiperSlide style={{ position: "relative" }} className="parent-slider" key={item.link}>
    <img src={item.link} alt="" />
    <Stack sx={{[theme.breakpoints.up('sm')]: {
    position: "absolute" , transform: "translateY(-50%)" , top: "50%" , left: "11%",color: "#283445" , textAlign: "start"
    },
     [theme.breakpoints.down('sm')]: {  pt:4, pb:6 ,alignItems:"center",bgcolor:"#fff",color: "#283445" 
  },
}}>
  <Typography variant="caption" sx={{ fontSize: "27px" }}>
        LIFESTYLE COLLECTION
      </Typography>
      <Typography
        variant="h6"
        className="photo-desc"
        sx={{ mt: 2, lineHeight: "16px", fontSize: "50px" }}
      >
        {item.text}
      </Typography>

      <Stack direction={"row"} sx={{ textAlign: "center", mt: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "30px", marginRight: "5px" }}
        >
          SALE UP TO
        </Typography>
        <Typography sx={{ fontSize: "30px", color: "red" }}>
          30% OFF
        </Typography>
      </Stack>
      <Typography
        variant="h6"
        className="photo-desc"
        sx={{ mt: 2, lineHeight: "16px", fontSize: "16px" }}
      >
        GET FREE SHOPPING ON ORDERS OVER $99.00
      </Typography>
      <Button
        sx={{
          width: "10rem",
          mt: 4,
          padding: "5px 10px ",
          bgcolor: theme.palette.myColor.main,
          color: theme.palette.text.primary,
        }}
      >
        Shop Now
      </Button>
    </Stack>
  </SwiperSlide>



  )
})}
        </Swiper>
        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.6%" }}>
          <Box sx={{ position: "relative" , display:"flex" }}>
            <img src="src/assets/images/banner-17.jpg" alt="" width={"100%"} />
            <Stack className="hero-photo-text">
              <Typography variant="caption" sx={{ fontSize: "18px" }}>
                New Arrivals
              </Typography>
              <Typography
                variant="h6"
                className="photo-desc"
                sx={{ mt: 1, lineHeight: "16px" }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6">SALE 20% OFF</Typography>
              <Link
                className="photo-link"
                href="#"
                underline="none"
                sx={{ mt: 1 }}
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "16px", marginTop: "3px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" , display:"flex" , marginTop:"10px"}}>
            <img src="src/assets/images/banner-16.jpg" alt="" width={"100%"} />
            <Stack className="hero-photo-text">
              <Typography variant="caption" sx={{ fontSize: "18px" }}>
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                className="photo-desc"
                sx={{ mt: 1, lineHeight: "16px" }}
              >
                DESKTOPS &
              </Typography>
              <Typography variant="h6">LAPTOPS</Typography>
              <Link
                className="photo-link"
                href="#"
                underline="none"
                sx={{ mt: 1 }}
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "16px", marginTop: "3px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}
