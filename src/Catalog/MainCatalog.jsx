import { Typography } from "@mui/material";
import ItemCard from "../ItemCard";
import "./Catalog.css"

export default function MainCatalog() {
    const imgUrl1 = 'https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355464877.jpg';
    const imgUrl2 = 'https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355477328.jpg'
	return (
		<div className="MainCatalog">
			<ItemCard imgUrl={imgUrl1}/>
			<ItemCard imgUrl={imgUrl2}/>
            <ItemCard imgUrl={imgUrl1}/>
			<ItemCard imgUrl={imgUrl2}/>
		</div>
	);
}
