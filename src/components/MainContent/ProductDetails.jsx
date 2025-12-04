

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function productDetails(){

    return(
        <>
<Box display={"flex"} sx={{flexDirection : {xs:"column" , sm:"row"}}}>
<Box width={"50%"}> <img src="" width={300} alt=""/></Box>
<Box sx={{margin:"20px" , mt:"46px" , textAlign : {xs:"center" , sm:"left"}}}>
    <Typography sx={{fontSize:"2rem"}}>WOMEN'S FASHION</Typography>
    <Typography my={0.4} color={"error"} variant="h5">$12.99</Typography>
    <Typography>Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.</Typography>
    <Stack direction={"row"} gap={1} my={2} sx={{ justifyContent : {xs:"center" , sm:"left"}}}>
    <img src="" height={100} width={70} alt="" style={{borderRadius:3}}/>
    </Stack>
<Button sx={{bgcolor:"#2448b2" , color:"#fff" , textTransform: "capitalize" , mt:2}}><AddShoppingCartIcon sx={{mr:1 , fontSize:"16px"}}/>Buy Now</Button>
</Box>
</Box>
        </>
    )
}