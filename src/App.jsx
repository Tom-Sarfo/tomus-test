import { Box, Stack } from "@mui/material";
import "./App.css";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      {/* <Stack
        direction=""
        gap={2}
        sx={{ padding: "0.5rem", marginTop: "2rem" }} */}
      {/* > */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "4px",
          padding: "10px",
        }}
      >
        <ProductCard productName="Nsaa" price="$500.00" />
        <ProductCard productName="Nsaa" price="$500.00" />
        <ProductCard productName="Nsaa" price="$500.00" />
        <ProductCard productName="Nsaa" price="$500.00" />
      </Box>
      {/* </Stack> */}
    </>
  );
}

export default App;
