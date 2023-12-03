import { Typography } from "@mui/material";
import ItemCard from "../Common/ItemCard/ItemCard";
import Stack from "@mui/material/Stack";
import { ItemData } from "../Common/ItemCard/ItemCardData";
import "./Catalog.css";

export default function MainCatalog() {
  return (
    <div className="MainCatalog">
      {/* <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      > */}
        {ItemData?.map((data) => (
          <ItemCard key={data.prod_id} data={data} />
        ))}
      {/* </Stack> */}
    </div>
  );
}
