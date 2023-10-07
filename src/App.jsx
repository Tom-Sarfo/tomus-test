import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import "./Navigation/Styles/SwitchScreen.css";
import { Paper } from "@mui/material";

import DesktopNavBar from "./Navigation/DesktopNavBar";
import MobileNavbar from "./Navigation/MobileNavBar";
import Category from "./HeroSection/CategorySection/Category";
import MainSection from "./HeroSection/MainSection";
import Hero from "./HeroSectionMobileSmall/Hero/BannerMobileSmall";
import MainCatalog from "./Catalog/MainCatalog";
import FirstDiscovery from "./Discovery/FirstDiscovery";
import Typography from "@mui/material/Typography";

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
				<Paper elevation={1} className="HeroPaper">
					<Category />
					<MainSection />
				</Paper>
				<Hero />
			</section>

			<section className="CatalogSection">
				<Typography className="catalogTitle">Explore <b><i>collections</i></b></Typography>
				<MainCatalog />
			</section>
			<section className="FirstDiscovery">
				<FirstDiscovery />
			</section>

			<div>Tomus is back</div>
			{/* <Button type="primary">Add</Button> */}
		</>
	);
}

export default App;
