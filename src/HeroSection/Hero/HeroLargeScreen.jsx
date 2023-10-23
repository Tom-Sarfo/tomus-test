import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Tagline from "../Tagline";
export default function Hero() {
	return (
		<div className="BannerlargeScreen">
			<div className="TaglineWrapper">{/* <Tagline /> */}</div>
			<Card
				mt={2}
				sx={{
					width: "100%",
				}}
				className="BannerMobileSmall"
			>
				<img
					width="100%"
					src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355513337.jpg"
					alt="Tomus slippers"
				/>
			</Card>
		</div>
	);
}
