import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Favourite from "../Favourite";
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  return (
    <Card className="ProdCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={data.imgUrl[0]}
          alt="green iguana"
          srcSet=""
          className="CardImage"
        />
        <Favourite data={data} />
        <CardContent className="cardContent">
          <Typography height={30} variant="body2" color="text.secondary">
            <div className="maxs:flex maxs:justify-between">
              <Typography>
                <b>{data.productName}</b>
              </Typography>
              <Typography>¢{data.productPrice}</Typography>
            </div>
          </Typography>
          {/* use to be /product/data.prod_id */}
          <Link to={data.productUrl}>
            <Button
              variant="outlined"
              sx={{
                color: "#872EB0",
                "&:hover": { color: "primary", outlineColor: "secondary" },
              }}
            >
              shop now
            </Button>
          </Link>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}
