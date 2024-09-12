import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import Stories from "react-insta-stories";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Category() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const stories = [
    "https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/4507785974.webp",
    "https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/4507799781.jpg",
    "https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/4507502323.webp",
  ];

  return (
    <Box>
      <p style={{ padding: "0.5rem" }}>Shop by category</p>
      <div style={{}}>
        {/* <Button onClick={toggleDrawer(true)}>view category</Button> */}
        <Stack direction="row" spacing={3} sx={{ justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="circle" onClick={toggleDrawer(true)}>
              <Avatar
                alt="Birk"
                src={
                  "https://res.cloudinary.com/dki2r1gnf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,q_auto,f_auto/v1724763980/sf7eqmuj9uspigykb8fd.jpg"
                }
                sx={{
                  width: 76,
                  height: 76,
                  placeItems: "center",
                  inset: "4px 4px 4px 4px",
                }}
              />
              
            </div>
            <p>Birks</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="circle" onClick={toggleDrawer(true)}>
              <Avatar
                alt="Slippers"
                src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/4507799781.jpg"
                sx={{ width: 76, height: 76, inset: "4px 4px 4px 4px" }}
              />
            </div>
            <p>Beads</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="circle" onClick={toggleDrawer(true)}>
              <Avatar
                alt="Birk"
                src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/4507502323.webp"
                sx={{ width: 76, height: 76, inset: "4px 4px 4px 4px" }}
              />
            </div>
            <p>Slippers</p>
          </div>
        </Stack>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Stories
          stories={stories}
          defaultInterval={1500}
          width={432}
          height={768}
        />
        <center>
          <Button
            variant="contained"
            sx={{
              width: "200px",
              textTransform: "capitalize",
              margin: "10px",
              backgroundColor: "#8531AB",
            }}
            onClick={toggleDrawer(false)}
          >
            Close story
          </Button>
        </center>
      </Drawer>
    </Box>
  );
}

export default Category;
