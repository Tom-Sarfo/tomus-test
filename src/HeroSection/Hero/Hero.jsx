import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card"
export default function Hero() {
	return <div>
        <Card
				mt={2}
				sx={{
					width: "100%",
					height: 320,
					backgroundColor: "grey",
				}}
				className="BannerMobileSmall"
			>
				<CardMedia
					component="img"
					height="320"
					image="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355415646.jpg"
					alt="Paella dish"
				/>
			</Card>
    </div>;
}
