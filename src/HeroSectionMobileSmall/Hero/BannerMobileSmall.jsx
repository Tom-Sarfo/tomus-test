import CardMedia from "@mui/material/CardMedia";
import "../HeroSection.css";
import Card from "@mui/material/Card";
import Tagline from "../../Common/Tagline/Tagline";
import {data} from "../../Common/Tagline/TaglineData";


export default function Hero() {
	return (
		<div className="banner">
			<Tagline section={data.SecondDiscovery}/>
			<Card
				sx={{
					width: "100%",
					height: 600,
					backgroundColor: "grey",
				}}
				className="BannerMobileSmall"
			>
				<CardMedia
					component="img"
					height="600"
					width="100%"
					image="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355487565.jpg"
					alt="Paella dish"
					sx={{
						borderBottomRightRadius: "0px",
						borderBottomLeftRadius: "0px",
					}}
				/>
			</Card>
		</div>
	);
}
