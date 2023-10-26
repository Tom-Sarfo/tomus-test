import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import "./Navigation/Styles/SwitchScreen.css";
import HeroMediumScreen from "./HeroSection/Hero/HeroMediumScreen";

import DesktopNavBar from "./Navigation/DesktopNavBar";
import CallToAction from "./CallToAction";
import MobileNavbar from "./Navigation/MobileNavBar";
import MainSection from "./HeroSection/MainSection";
import Hero from "./HeroSectionMobileSmall/Hero/BannerMobileSmall";
import MainCatalog from "./Catalog/MainCatalog";
import FirstDiscovery from "./Discovery/FirstDiscovery";
import SecondDiscovery from "./Discovery/SecondDiscovery";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function App() {
	return (
		<>
			<nav>
				<div className="DesktopNavBar">
					<DesktopNavBar />
				</div>

				<div className="MobileNavBar">
					<MobileNavbar />
				</div>
			</nav>
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
					<CallToAction />
				</section>
			</Stack>

			<div>Tomus is back</div>
			{/* <Button type="primary">Add</Button> */}
		</>
	);
}

export default App;
