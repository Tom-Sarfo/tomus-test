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
import Link from "@mui/material/Link";

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
              category: "Men",
              link: "https://tomuswear.company.site/products/Gyinaso-p401826931",
            },
            {
              category: "Ladies",
              link: "https://tomuswear.company.site/products/Tonto-Beach-p405556663",
            },
            {
              category: "Beads",
              link: "https://tomuswear.company.site/products/Afro-G-p403124047",
            },
          ].map((menu, index) => (
            <ListItem key={index} disablePadding>
                <ListItemButton href={menu.link} sx={{ textDecoration: "none", color: "#757575", "&:hover": {color: "primary"}}}>
                  <ListItemIcon>
                    {index === 0 && <ManIcon />}
                    {index === 1 && <WomanIcon />}
                    {index === 2 && <DiamondIcon />}
                  </ListItemIcon>
                  <ListItemText primary={menu.category} />
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
