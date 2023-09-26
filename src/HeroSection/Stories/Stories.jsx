import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./Stories.css";

export default function Stories() {
	// let length = [1,2,3,4,5,6];
	return (
		<div className="Stories">
			<Box
				mt={2}
				sx={{
					width: 900,
					height: 50,
					display: "flex",
					// backgroundColor: "grey",
				}}
			>
				<Stack direction="row" spacing={2}>
					<Box
						sx={{
							width: 60,
							height: 60,
							backgroundColor: "white",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "2px solid #872EB0",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg"
							sx={{ width: 50, height: 50 }}
						/>
					</Box>
					<Box
						sx={{
							width: 60,
							height: 60,
							backgroundColor: "white",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "2px solid #872EB0",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="https://cdn.pixabay.com/photo/2016/10/15/23/52/foot-1744044_1280.jpg"
							sx={{ width: 50, height: 50 }}
						/>
					</Box>
					<Box
						sx={{
							width: 60,
							height: 60,
							backgroundColor: "white",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "2px solid #872EB0",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_1280.jpg"
							sx={{ width: 50, height: 50 }}
						/>
					</Box>
					<Box
						sx={{
							width: 60,
							height: 60,
							backgroundColor: "white",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "2px solid #872EB0",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="https://cdn.pixabay.com/photo/2016/10/16/13/44/young-woman-1745173_1280.jpg"
							sx={{ width: 50, height: 50 }}
						/>
					</Box>
					<Box
						sx={{
							width: 60,
							height: 60,
							backgroundColor: "white",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "2px solid #872EB0",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 50, height: 50 }}
						/>
					</Box>
					<Button variant="contained" sx={{ bgcolor: "#872EB0"}}>Share your experience</Button>
				</Stack>
			</Box>
		</div>
	);
}
