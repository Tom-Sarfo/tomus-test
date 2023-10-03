import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ItemCard({ imgUrl }) {
	return (
		<Card sx={{ maxWidth: 130 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="160"
					image={imgUrl}
					alt="green iguana"
				/>
				<CardContent>
					{/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
					<Typography height={30} variant="body2" color="text.secondary">
						<div className="caption">
							<Typography><b>Afro-G</b></Typography>
							<Typography>¢200</Typography>
						</div>
					</Typography>
				</CardContent>
				<center><Button sx={{marginBottom: "0.5rem", color: "#872EB0" }}>shop now</Button></center>
			</CardActionArea>
		</Card>
	);
}

// https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355464877.jpg
// https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355477328.jpg
