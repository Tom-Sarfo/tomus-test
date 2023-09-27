import { Box } from "@mui/material";
import "../HeroSection.css";

export default function Hero() {
	return (
		<div>
			<Box
				mt={2}
				sx={{
					width: "100%",
					height: 320,
					backgroundColor: "grey",
				}}
				className="BannerMobileSmall"
			></Box>
		</div>
	);
}
