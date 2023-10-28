import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Tagline({ section }) {
	return (
		<div className={section[3].className}>
			<Typography variant={section[1].typoVariant} component="h2">
				<b>
					{section[0].title[0].firstline} <br />
					{section[0].title[1].secondline} <br />
					{section[0].title[2].thirdline}
				</b>
			</Typography>
			<br />
			<Button
				variant="contained"
				href="#contained-buttons"
				className="HeroBtn"
				sx={section[4]}
			>
				{section[2].btnText}
			</Button>
		</div>
	);
}
