import Hero from "../Hero/Hero"
import IconsSection from "../IconsSection/IconsSection"
import ProductDetails from './ProductDetails'
import './Main.css'
import { useTheme } from "@mui/material/styles";
import {useState} from "react"

/* mui */
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import CloseIcon from "@mui/icons-material/Close";


export default function Main() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





  const theme = useTheme();
  const [value, setValue] = useState(2);
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

    return (
    <>
    <Container maxWidth={false} sx={{ bgcolor: theme.palette.bgcolor.main , pt:0.3 , mt:1 }}>
      <Hero/>
      <IconsSection/>

      <Stack direction={"row"} sx={{mt:7 ,paddingInline :"21px", alignItems:"center" , justifyContent:"space-between" , flexWrap :"wrap" , gap:1}}>
        <Box >
          <Typography variant="h5">Selected Products</Typography>
          <Typography variant="content">All  our new arrival in a exclusive brand selection</Typography>
        </Box>
        <ToggleButtonGroup
        color="error"
        sx={{display:"flex" , gap:2 }}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton className="main-toolbar-btn" sx={{color: theme.palette.text.primary}}value="left" aria-label="left aligned">
      All Products
      </ToggleButton>
      <ToggleButton className="main-toolbar-btn"sx={{color: theme.palette.text.primary}} value="center" aria-label="centered">
      MEN Category
      </ToggleButton>
      <ToggleButton className="main-toolbar-btn" sx={{color: theme.palette.text.primary}}value="right" aria-label="right aligned">
      WOMEN Category
      </ToggleButton>
      </ToggleButtonGroup>
      </Stack>
   
   <Stack sx={{mt:4, paddingInline :"21px"}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
    {["m" , "r" , "h"].map((item) =>{
      return(
<Card key={item} sx={{ maxWidth: 333 , ":hover .MuiCardMedia-root" : {scale :"1.1"} , transition :"0.2s" , mb:6 }}>
      <CardMedia
        sx={{ height: 277 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="product"
      />
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          price
        </Typography>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
        <Button  onClick={handleClickOpen} sx={{textTransform: "capitalize"}}size="large"><AddShoppingCartIcon sx={{mr:1 , fontSize:"13px"}}/>Add to cart</Button>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
      </CardActions>
    </Card>
      )
    })}
   
   </Stack>
    





   <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{".MuiPaper-root" : {minWidth : {xs : "100%" , md: 800}, }}}
      >
       <Button  sx={{mt:2 , width:"43px" , height:"30px" , position:"absolute" , top:0 , right:0  }} onClick={handleClose}>
              <CloseIcon
                sx={{
                  color: theme.palette.text.primary,
                  ":hover": { rotate: "180deg", color: "red" , transition:"0.2s" },
                }}
              />
            </Button>
            <ProductDetails/>
      </Dialog>
    </Container>
    
    </>
    );
  }
  