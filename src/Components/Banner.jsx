import Box from "@mui/material/Box";
// import Image from "../common/Image";
// import { bannerMediaObject } from "../MediaObjects";

function Banner() {
  return (
    <Box
      sx={{
        width: "100%",
        // height: "280px",
        // textAlign: "center",
        // padding: "2rem",
        // backgroundColor: "#D9D9D9",
      }}
    >
      <img src="src/assets/Mobile-header.jpg" 
       style={{width: '100%', height: 'auto'}}/>
      {/* <Image mediaObject={bannerMediaObject}/> */}
    </Box>
  );
}

export default Banner;
