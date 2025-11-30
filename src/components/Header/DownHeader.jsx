import "./DownHeader.css";
import { useTheme } from "@mui/material/styles";

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
import IconButton from "@mui/material/IconButton";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";

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

  return (
    <>
      <Container maxWidth={false} className="DownHeader-container">
        <Box sx={{ display: "flex" }}>
          <Button
            className="Categories-btn"
            sx={{
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
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Container>
    </>
  );
}
