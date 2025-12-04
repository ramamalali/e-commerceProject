import "./DownHeader.css";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Links from "./Links";
/* mui */
import Container from "@mui/material/Container";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WindowIcon from "@mui/icons-material/Window";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Stack from "@mui/material/Stack";

const menuDownheader = [
  { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "Mega Menu", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "full screen Menu", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "pages", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "user account", subLink: ["Link1", "Link2", "Link3"] },
  { mainLink: "vendor account", subLink: ["Link1", "Link2", "Link3"] },
];

export default function DownHeader() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* Drawer */
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Container maxWidth={false} className="DownHeader-container">
        <Box sx={{ display: "flex" }}>
          <Button
            className="Categories-btn"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <WindowIcon sx={{ marginRight: "3px" }} />
            <Typography sx={{ padding: "0", textTransform: "capitalize" }}>
              Categories
            </Typography>
            <Box flexGrow={1} />
            <ChevronRightIcon />
          </Button>
          <Menu
            sx={{
              ".MuiPaper-root": {
                width: "220px",
                bgcolor: theme.palette.myColor.main,
                color: theme.palette.text.primary,
              },
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Bikes</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronics</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

        {useMediaQuery("(min-width:1049px)") && (
          <>
            <Links title={"Home"} />
            <Links title={"Mega Menu"} />
            <Links title={"full screen Menu"} />
            <Links title={"pages"} />
            <Links title={"user account"} />
            <Links title={"vendor account"} />
          </>
        )}
        {useMediaQuery("(max-width:1050px)") && (
          <Button onClick={toggleDrawer("right", true)}>
            <MenuIcon sx={{ color: theme.palette.text.primary }} />
          </Button>
        )}

        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          sx={{ ".MuiPaper-root": { width: "100%" } }}
        >
          <Box sx={{ width: "444px", margin: "auto", marginTop: "90px" , position:"relative" }}>
            <Button onClick={toggleDrawer("right", false)} sx={{position:"absolute" , left:"86%" , bottom:"101%"}}>
              <CloseIcon
                sx={{
                  color: theme.palette.text.primary,
                  "&:hover": { rotate: "180deg", color: "red" },
                }}
              />
            </Button>
            {menuDownheader.map((item) => {
              return (
                <Accordion key={item.mainLink} sx={{ bgcolor: "initial" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{item.mainLink}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {item.subLink.map((item) => {
                        return (
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText primary={item} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Container>
    </>
  );
}
