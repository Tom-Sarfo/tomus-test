import { Typography } from "@mui/material";
import ItemCard from "../Common/ItemCard/ItemCard";
import { ItemData } from "../Common/ItemCard/ItemCardData";
import "./Catalog.css";

export default function MainCatalog() {
  return (
    <div className="MainCatalog">
		{ ItemData?.map(data => (
 			<ItemCard key={data.prod_id} data={data} />
		))} 
     
      {/* <ItemCard imgUrl={ItemData[0].imgUrl} />
      <ItemCard imgUrl={ItemData[1].imgUrl} />
      <ItemCard imgUrl={ItemData[0].imgUrl} /> */}
    </div>
  );
}
