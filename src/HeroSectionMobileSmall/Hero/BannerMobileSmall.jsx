import CardMedia from "@mui/material/CardMedia";
import "../HeroSection.css";
import Card from "@mui/material/Card";

export default function Hero() {
	return (
		<div className="banner">
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
						borderBottomLeftRadius: "0px"
					}}
				/>
			</Card>
		</div>
	);
}
