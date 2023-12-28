import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import DiamondIcon from "@mui/icons-material/Diamond";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";

const drawerWidth = 240;
export default function ({ openDrawer, setOpenDrawer }) {
  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div
          style={{ textAlign: "end", padding: "0.5rem" }}
          onClick={closeDrawer}
        >
          <CloseIcon />
        </div>

        <Toolbar />
        <Divider />
        <List>
          {[
            {
              category: "Store",
              link: "/products",
            },
          ].map((menu, index) => (
            <ListItem key={index} disablePadding>
              <Link to={menu.link}>
                <ListItemButton
                  // href={menu.link}
                  sx={{
                    textDecoration: "none",
                    color: "#757575",
                    "&:hover": { color: "primary" },
                  }}
                >
                  <ListItemIcon>
                    {index === 0 && <StorefrontIcon />}
                  </ListItemIcon>
                  <ListItemText primary={menu.category} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
