import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function FirstDiscovery() {
	return (
		<div className="FirstDiscovery">
			<section className="FirstDisc1">
				<img
					src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355513267.jpg"
					alt="Tomus footwear"
				/>
			</section>

			<section className="FirstDisc2">
				{/* use reusable components instead */}
				<div className="FirstDisc2tagline">
					<Typography variant="h2" component="h2">
						<b>
							Your <br />
							Smile is our <br />
							KPI
						</b>
					</Typography>
					<br />
					<Button
						variant="contained"
						href="#contained-buttons"
						className="HeroBtn"
						sx={{ bgcolor: "white", color: "#904B88" }}
					>
						Shop Now
					</Button>
				</div>
			</section>
		</div>
	);
}
