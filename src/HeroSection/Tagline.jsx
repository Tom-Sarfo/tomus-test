import Button  from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../HeroSection/HeroSection.css";

export default function Tagline() {
	return (
		<div className="Tagline">
			<Typography variant="h4" component="h2">
				<b>
					Craft <br />
					that <br />
					fit your lifestyle
				</b>
			</Typography>
			<br />
			<Button
				variant="contained"
				href="#contained-buttons"
				className="HeroBtn"
				sx={{ bgcolor: "white", color: "#904B88" }}
			>
				Find your fit
			</Button>
		</div>
	);
}
