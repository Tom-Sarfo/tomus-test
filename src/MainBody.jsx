import React from "react";
import MainSection from "./HeroSection/MainSection";
import Hero from "./HeroSectionMobileSmall/Hero/BannerMobileSmall";
import MainCatalog from "./Catalog/MainCatalog";
import FirstDiscovery from "./Discovery/FirstDiscovery";
import SecondDiscovery from "./Discovery/SecondDiscovery";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import HeroMediumScreen from "./HeroSection/Hero/HeroMediumScreen";

export default function MainBody() {
  return (
    <div>
      <section className="HeroSection">
        <MainSection />
        <div className="MediumScreen">
          <HeroMediumScreen />
        </div>
        <Hero />
      </section>

      <section className="CatalogSection">
        <Typography className="catalogTitle">
          Explore{" "}
          <b>
            <i>collections</i>
          </b>
          <br />
        </Typography>
        <MainCatalog />
      </section>

      <Stack spacing={4}>
        <section className="FirstDiscovery">
          <FirstDiscovery />
        </section>
        {/* SecondDiscovery is disabled */}
        {/* <section className="SecondDiscovery">
          <SecondDiscovery />
        </section> */}
      </Stack>
    </div>
  );
}
