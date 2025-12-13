import './Footer.css'

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function Footer() {
    return <>
    <Box sx={{py:1 , bgcolor: "#252b32" }} >
      <Typography justifyContent={"center"} className="footer-text"
      display={"flex"} alignItems={"center"} color={"HighlightText"}
       sx={{fontSize:"18" , color:"#fff"}}
      >Designed and Developed by
      <Button className="footer-text" sx={{mx:0.5 , fontSize:"18px" , textTransform:"capitalize" , color:"#ff7790"}} variant="text" color="primary">Rama Al-Ali</Button>
      2025
      </Typography>
    </Box>
    </>;
  }
  