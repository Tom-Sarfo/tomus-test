import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import "../App.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function DesktopNavBar({ searchTerm, handleChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const cartItems = useCartStore((state) => state.cart);
  const cartCount = cartItems.length;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <LocalMallIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FavoriteIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{ bgcolor: "white", display:"flex", justifyContent: "space-between" }}>
        <Toolbar sx={{display:"flex", justifyContent: "space-between" }}>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block", color: "#872EB0" } }}
            >
              Tomus
            </Typography>
          </Link>

          <Search sx={{ color: "#872EB0" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </Search>
          <Box sx={{ flexGrow: 3 }} className="menuForLargeScreen">
            <Stack direction="row" spacing={4}>
              <Link to="/products/birks" className="myItem">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#872EB0",
                    fontSize: "19px",
                    "&:hover": { color: "secondary" },
                  }}
                >
                  Birks
                </Typography>
              </Link>
              <Link to="/products/beads">
                <Typography
                  variant="h6"
                  sx={{ color: "#872EB0", "&:hover": { color: "secondary" } }}
                >
                  Beads
                </Typography>
              </Link>
            </Stack>
          </Box>
          {/* <Box sx={{ flexGrow: 3 }} className="menuForMediumScreen">
            <Stack direction="row" spacing={3}>
              <Link href="#" underline="none">
                <Typography
                  variant="h6"
                  sx={{ color: "#872EB0", fontSize: "15px" }}
                >
                  Men{" "}
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography
                  variant="h6"
                  sx={{ color: "#872EB0", fontSize: "15px" }}
                >
                  Ladies
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography
                  variant="h6"
                  sx={{ color: "#872EB0", fontSize: "15px" }}
                >
                  Beads
                </Typography>
              </Link>
            </Stack>
          </Box> */}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            {/* <Tooltip title="visit our store">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <LocalMallIcon />
              </IconButton>
            </Tooltip> */}
            <div className="flex justify-between mr-0">
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
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ "&:hover": { color: "white", bgcolor: "secondary" } }}
                  href="https://tomuswear.company.site/products"
                >
                  store
                </Button>
              </IconButton>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
