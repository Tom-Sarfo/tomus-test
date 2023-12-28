import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import useCartStore from "../store/cartStore";

import Menu from "@mui/material/Menu";

import "./Styles/Navigation.css";
import { Link } from "react-router-dom";

export default function MobileNavBar({ openDrawer, setOpenDrawer }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const cartItems = useCartStore((state) => state.cart);
  const cartCount = cartItems.length;
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
            <Link to="/">Tomus</Link>
          </Typography>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <Link to="/cart">
                  <Badge badgeContent={cartCount} color="secondary">
                    <LocalMallIcon sx={{ color: "#872EB0" }} />
                  </Badge>
                </Link>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
