import Stories from "./Stories/StoriesMobileSmall";
import Hero from "./Hero/BannerMobileSmall";
import { Paper, Stack } from "@mui/material";

import "./HeroSection.css"
export default function MainSection() {
	return (
		// <Paper className="MainSection" sx={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}>
			<Stack spacing={1}>
				<Stories />
				<Hero />
			</Stack>
		// </Paper>
	);
}
