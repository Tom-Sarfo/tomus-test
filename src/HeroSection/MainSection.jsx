import Stories from "./Stories/Stories";
import Hero from "./Hero/Hero";
import { Stack } from "@mui/material";

import "./HeroSection.css"
export default function MainSection() {
	return (
		<div className="MainSection">
			<Stack spacing={1}>
				<Stories />
				<Hero />
			</Stack>
		</div>
	);
}
