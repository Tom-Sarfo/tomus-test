import CardMedia from "@mui/material/CardMedia";
import "../HeroSection.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "antd";

export default function Hero() {
	return (
		<div className="banner">
			<Typography variant="h4" component="h2" className="Tagline">
				<b>Craft <br />that <br />fit your lifestyle</b>
			</Typography>
			<Card
				sx={{
					width: "100%",
					height: 450,
					backgroundColor: "grey",
				}}
				className="BannerMobileSmall"
			>
				<CardMedia
					component="img"
					height="450"
					width="100%"
					image="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355487565.jpg"
					alt="Paella dish"
					sx={{
						borderBottomRightRadius: "0px",
						borderBottomLeftRadius: "0px",
					}}
				/>
			</Card>
			<Button variant="primary">Window shopping</Button>
		</div>
	);
}
