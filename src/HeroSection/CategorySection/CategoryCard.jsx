import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Category.css"

export default function CategoryCard() {
	return (
		<Card sx={{ maxWidth: 320, padding: "0.5rem", color: ""}}>
			<CardMedia
				sx={{ height: 300 }}
				image="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355464877.jpg"
				title="green iguana"
			/>
			<CardActions className="CardAction">
				<Button size="large" variant="outlined">Shop Now</Button>
			</CardActions>
		</Card>
	);
}
