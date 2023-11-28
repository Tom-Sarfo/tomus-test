import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import "./Navigation/Styles/SwitchScreen.css";
import HeroMediumScreen from "./HeroSection/Hero/HeroMediumScreen";

import DesktopNavBar from "./Navigation/DesktopNavBar";
import MobileNavbar from "./Navigation/MobileNavBar";
import MainSection from "./HeroSection/MainSection";
import Hero from "./HeroSectionMobileSmall/Hero/BannerMobileSmall";
import MainCatalog from "./Catalog/MainCatalog";
import FirstDiscovery from "./Discovery/FirstDiscovery";
import SecondDiscovery from "./Discovery/SecondDiscovery";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Footer from "./Footer/Footer";
import Drawer from "./Navigation/Menu/Drawer";
import { useState } from "react";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <nav>
        <div className="DesktopNavBar">
          <DesktopNavBar />
        </div>

        <div className="MobileNavBar">
          <MobileNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
      </nav>
      {/* <MenuDrawer/> */}
      {openDrawer && <Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />}
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
        </Typography>
        <MainCatalog />
      </section>

      <Stack spacing={4}>
        <section className="FirstDiscovery">
          <FirstDiscovery />
        </section>
        <section className="SecondDiscovery">
          <SecondDiscovery />
        </section>
      </Stack>

      <Footer />
    </>
  );
}

export default App;
