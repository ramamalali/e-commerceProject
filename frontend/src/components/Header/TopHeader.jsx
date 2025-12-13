import * as React from 'react';
import   { useContext , useState } from "react";
import { ColorModeContext } from "../../Theme";
import { IconButton, useTheme } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import "./TopHeader.css"

/* mui */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';


const options = [
  'EN',
  'AR',
];


export default function TopHeader() {

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
  <>
<Box  >
<Container className="TopHeader-container" maxWidth={false} >
 <Stack direction={"row"} className="TopHeader-title">
  <Typography className="TopHeader-hot" variant="body2">Hot</Typography>
  <Typography className="TopHeader-text" variant="body2">Free Express Shipping</Typography>
 </Stack>

<Box flexGrow={1}></Box> 
<Stack direction={"row"}className="TopHeader-title" >
 {theme.palette.mode === "light" ? (
 <IconButton sx={{color:"white"}}
 onClick={() => {
 localStorage.setItem( "mode", theme.palette.mode === "dark" ? "light" : "dark" );
 colorMode.toggleColorMode();
   }}
 color="inherit" >
 <LightModeOutlinedIcon  sx={{fontSize : "19px"}} />
 </IconButton>
    ) : (
      <IconButton
      sx={{color:"white"}}
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
    <DarkModeOutlinedIcon sx={{fontSize : "19px"}}/> 
      </IconButton>
    )}

<List
        component="nav"
        aria-label="Device settings"
        sx={{padding : "0" ,margin :"0"}}
      >
        <ListItemButton
        sx={{ padding : "0"}}
        className="TopHeader-list"
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText sx={{".MuiTypography-root" : {color:"white"}  ,marginBottom : "0"}}
            secondary={options[selectedIndex]}
          />
          <ExpandMoreIcon sx={{color:"white"}} />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>


<FacebookOutlinedIcon sx={{color:"white"  , fontSize:"19px" }}/>
<InstagramIcon sx={{color:"white" , fontSize:"19px" }}/>
<XIcon sx={{color:"white" , fontSize:"16px" }}/>

</Stack>
</Container>
</Box>

    </>
    );
  }
  