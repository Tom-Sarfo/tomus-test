import HeroMediumScreen from "./Hero/HeroMediumScreen";
import HeroLargeScreen from "./Hero/HeroLargeScreen";

import "./HeroSection.css";
export default function MainSection() {
	return (
		<div className="LargeScreenBanner">
			<HeroMediumScreen />
			<HeroLargeScreen />
		</div>
	);
}
