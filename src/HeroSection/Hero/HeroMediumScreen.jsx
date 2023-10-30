import Card from "@mui/material/Card";
import Tagline from "../../Common/Tagline/Tagline";
import  {data} from "../../Common/Tagline/TaglineData"
export default function Hero() {
	return (
		<div className="BannerlargeScreen">
			<div className="TaglineWrapper">
				<Tagline section={data.SecondDiscovery}/>
			</div>
			<Card
				mt={2}
				sx={{
					width: "767",
				}}
				className="BannerMobileSmall"
			>
				<img
					width="767"
					src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355500594.jpg"
					alt="Tomus slippers"
				/>
			</Card>
		</div>
	);
}
