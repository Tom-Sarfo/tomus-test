import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";

export default function ({ filteredData }) {
  return (
    <div>
      <Box
        sx={{
          width: "500px",
          maxHeight: "200px",
          overflowY: "scroll",
          backgroundColor: "white",
          position: "absolute",
          zIndex: 10,
          marginLeft: "5rem",
          marginTop: "4rem",
          color: "black",
        }}
      >
        {filteredData?.map((item) => (
          <ListItem key={item.prod_id} disablePadding>
            <ListItemButton
              component="a"
              href={item.productUrl}
              sx={{ "&:hover": { color: "primary" } }}
            >
              <ListItemText primary={item.productName} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </div>
  );
}
