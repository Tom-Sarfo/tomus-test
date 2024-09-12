import Box from "@mui/material/Box";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoIcon from "../assets/logoIcon.svg?react";
import Stack from "@mui/material/Stack";
function Navbar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
      }}
    >
      <Stack direction="row" spacing={14} sx={{ alignItems: "center" }}>
        <p
          style={{
            color: "#8531AB",
            fontWeight: "bold",
            fontSize: "26px",
            paddingLeft: "0.5rem",
          }}
        >
          Tomus
        </p>
        <LogoIcon style={{ width: "60px", height: "60px" }} />
        <StorefrontIcon
          sx={{ color: "#8531AB", fontSize: "30px", paddingRight: "0.1rem" }}
        />
      </Stack>
    </Box>
  );
}

export default Navbar;
