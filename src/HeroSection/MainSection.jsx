import HeroLargeScreen1 from "./Hero/HeroLargeScreen1";
import HeroLargeScreen from "./Hero/HeroLargeScreen";

import "./HeroSection.css";
import Tagline from "./Tagline";
export default function MainSection() {
	return (
		<div className="LargeScreenBanner">
			<HeroLargeScreen1 />
			<div className="TaglineWrapperLScreen">
				<Tagline />
			</div>
			<HeroLargeScreen />
		</div>
	);
}
