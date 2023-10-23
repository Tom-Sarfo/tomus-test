import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
export default function Hero() {
	return (
		<div className="BannerlargeScreen" > 
			<Card
				mt={2}
				sx={{
					width: "767",
				}}
				className="BannerMobileSmall"
			>
				<img
					width="767"
					src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3346646609.jpg"
					alt="Tomus slippers"
				/>
			</Card>
		</div>
	);
}
