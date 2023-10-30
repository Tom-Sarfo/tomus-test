import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
export default function Footer() {
	return (
		<footer className="Footer">
			<div className="Icons">
				<Stack direction="row" spacing={6}>
					<InstagramIcon />
					<FacebookIcon />
					<TwitterIcon />
				</Stack>
			</div>
			<div className="CopyRight">
        <p>&copy; 2023 Tomus Footwear</p>
      </div>
		</footer>
	);
}
