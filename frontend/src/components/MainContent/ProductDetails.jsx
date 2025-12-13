import {useState} from "react"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";



export default function productDetails({itemClicked}){
 const [selectedImg, setSelectedImg] = useState(0);
 const [alignment, setAlignment] = useState('left');

 const handleAlignment = (event, newValue) => {
  if(newValue !== null){
   setAlignment(newValue);
    }}
 return(
  <>
 <Box display={"flex"}   sx={{".css-vk9kdq" : { overflow :"hidden" } ,flexDirection : {xs:"column" , sm:"row"}}}>
 <Box width={"50%"} >
   <img src={`${itemClicked.productImg[selectedImg].url}`} style={{width:"100%" , height:"100%"}} alt=""/></Box>
 <Box sx={{margin:"20px" , mt:"46px" , textAlign : {xs:"center" , sm:"left"}}}>

    <Typography sx={{fontSize:"2rem"}}>{itemClicked.productCategory}'S FASHION</Typography>
    <Typography my={0.4} color={"error"} variant="h5">{itemClicked.productPrice}$</Typography>
    <Typography>{itemClicked.productDesc}</Typography>

    <Stack direction={"row"} gap={1} my={2} sx={{ justifyContent : {xs:"center" , sm:"left"}}}>
      <ToggleButtonGroup
        sx={{ display: "flex", gap: 2 , ".Mui-selected" :{
        opacity:"1"
         } }}
         value={selectedImg}
         exclusive
         onChange={handleAlignment}
         aria-label="text alignment"
            >
        {itemClicked.productImg.map((item , index) =>{
  return(
    <ToggleButton
      key={item.id}
      sx={{ opacity :"0.5" , p:"0" , mx:"1"}}
      value={index}
      aria-label="left aligned"
              >
         <img
          onClick={() =>{
          setSelectedImg(index)
          }}
          src={item.url}  height={100} width={"82px"} alt="" style={{borderRadius:3}}/>
     </ToggleButton>
   
) })}
    
    </ToggleButtonGroup>
    </Stack>
<Button sx={{bgcolor:"#2448b2" , color:"#fff" , textTransform: "capitalize" , mt:2}}><AddShoppingCartIcon sx={{mr:1 , fontSize:"16px"}}/>Buy Now</Button>
</Box>
</Box>
        </>
    )
}