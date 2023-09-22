import Stories from "./Stories/Stories";
import Hero from "./Hero/Hero";
import { Stack } from "@mui/material";
export default function MainSection() {
	return (
		<div>
			<Stack spacing={1}>
				<Stories />
				<Hero />
			</Stack>
		</div>
	);
}
