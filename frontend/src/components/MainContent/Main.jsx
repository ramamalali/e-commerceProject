import Hero from "../Hero/Hero";
import IconsSection from "../IconsSection/IconsSection";
import ProductDetails from "./ProductDetails";
import "./Main.css";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useGetProductsQuery } from "../../services/Product";
import { motion } from "motion/react"

/* mui */
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from '@mui/material/CircularProgress';

export default function Main() {
  const [open, setOpen] = useState(false);
  const [itemClicked, setItemClicked] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  const allProductsAPI = "products?populate=*";
  const menCategoryAPI ="products?populate=*&filters[productCategory][$eq]=men";
  const womenCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=women";
  const [myData, setMyData] = useState(allProductsAPI);
  const [alignment, setAlignment] = useState(allProductsAPI);

  const handleAlignment = (event, newValue) => {
    if(newValue !== null){
    setAlignment(newValue);
    setMyData(newValue);
    }

  };
  const { data, error, isLoading } = useGetProductsQuery(myData);

  if (isLoading) {
    return (
      <Container maxWidth={false} sx={{p:11 , textAlign :"center"}}>
      <Box>
      <CircularProgress />
    </Box>
    </Container>
    );
  }
  if (error) {
    return (
      <Container maxWidth={false} sx={{p:11 , textAlign :"center"}}>
        <Typography variant="h6">{error.error}</Typography>
        <Typography variant="h6">please try again later</Typography>
      </Container>
    );
  }
 
    return (
      <>
        <Container
          maxWidth={false}
          sx={{ bgcolor: theme.palette.bgcolor.main, pt: 0.3, mt: 1 }}
        >
          <Hero />
          <IconsSection />

          <Stack
            direction={"row"}
            className="main-header-icons"
          >
            <Box>
              <Typography variant="h5">Selected Products</Typography>
              <Typography
              className="main-product-description"
                variant="content"
              >
                All our new arrival in a exclusive brand selection
              </Typography>
            </Box>
            <ToggleButtonGroup
              color="error"
              sx={{ display: "flex", gap: 2 }}
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton
                className="main-toolbar-btn"
                sx={{ color: theme.palette.text.primary }}
                value={allProductsAPI}
                aria-label="left aligned"
              >
                All Products
              </ToggleButton>
              <ToggleButton
                className="main-toolbar-btn"
                sx={{ color: theme.palette.text.primary }}
                value={menCategoryAPI}
                aria-label="centered"
              >
                MEN Category
              </ToggleButton>
              <ToggleButton
                className="main-toolbar-btn"
                sx={{ color: theme.palette.text.primary }}
                value={womenCategoryAPI}
                aria-label="right aligned"
              >
                WOMEN Category
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack
          className="main-card-container"
            sx={{ mt: 4  }}
            direction={"row"}
            flexWrap={"wrap"}
          >
            {data.data.map((item) => {
                return (
                  <Card
                    key={item.id}
                   component={motion.div}
                   layout
                   initial={{transform : "scale(0)"}}
                   animate={{transform : "scale(1)"}}
                   transition={{duration : 0.6}}
                    sx={{
                    width:"370px !important",
                    paddingBottom:"15px",
                      ":hover .MuiCardMedia-root": { scale: "1.1" },
                      transition: "0.2s",
                      mb: 6,
                    }}
                  >
                    <CardMedia
                      sx={{ height: 277 , width:"100%" }}
                      image={`${item.productImg[0].url}`}
                      title="product"
                    />
                    <CardContent>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {item.productTitle}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.productPrice}$
                        </Typography>
                      </Stack>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.productDesc}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <Button
                        onClick={() =>{
                          handleClickOpen()
                          setItemClicked(item)
                        }}
                        sx={{ textTransform: "capitalize" }}
                        size="large"
                      >
                        <AddShoppingCartIcon sx={{ mr: 1, fontSize: "13px" }} />
                        Add to cart
                      </Button>
                      <Rating
                        name="read-only"
                        value={item.productRating}
                        precision={0.5}
                        readOnly
                      />
                    </CardActions>
                  </Card>
                );
              })}
          </Stack>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          >
            <Button
              sx={{
                mt: 2,
                width: "43px",
                height: "30px",
                position: "absolute",
                top: 0,
                right: 0,
              }}
              onClick={handleClose}
            >
              <CloseIcon
                sx={{
                  color: theme.palette.text.primary,
                  ":hover": {
                    rotate: "180deg",
                    color: "red",
                    transition: "0.2s",
                  },
                }}
              />
            </Button>
            <ProductDetails itemClicked={itemClicked} />
          </Dialog>
        </Container>
      </>
    );
  }

