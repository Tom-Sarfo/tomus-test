import HeroLargeScreen1 from "./Hero/HeroLargeScreen1";
import HeroLargeScreen from "./Hero/HeroLargeScreen";
import {data} from "../Common/Tagline/TaglineData"
import "./HeroSection.css";
import Tagline from "../Common/Tagline/Tagline";
export default function MainSection() {
	return (
		<div className="LargeScreenBanner">
			<HeroLargeScreen1 />
			<div className="TaglineWrapperLScreen">
				<Tagline section={data.Banner}/>
			</div>
			<HeroLargeScreen />
		</div>
	);
}
