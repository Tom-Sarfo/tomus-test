import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";

import "./Styles/Navigation.css";

export default function MobileNavBar({ openDrawer, setOpenDrawer }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="MobileAppBar"
        sx={{ bgcolor: "white" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"

            aria-label="menu"
            sx={{ mr: 2, color: "#872EB0" }}
            onClick={showDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#872EB0" }}
          >
            Tomus
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                sx={{ color: "#872EB0" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ "&:hover": {color: "white", bgcolor: "secondary"} }}
                  href="https://tomuswear.company.site/products"
                >
                  view store
                </Button>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
