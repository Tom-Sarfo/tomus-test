import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Favourite from "../../Favourite";
import { Link } from "react-router-dom";

export default function ItemCard({ data }) {
  return (
    <Card className="ItemCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={data.imgUrl[0]}
          alt="green iguana"
          className="CardImage"
        />
        <Favourite data={data} />
        <CardContent>
          <Typography height={30} variant="body2" color="text.secondary">
            <div className="caption">
              <Typography>
                <b>{data.productName}</b>
              </Typography>
              <Typography>¢{data.productPrice}</Typography>
            </div>
          </Typography>
        </CardContent>
        <center>
          <Link to={`/product/${data.prod_id}`}>
            <Button
              variant="outlined"
              sx={{
                marginBottom: "0.5rem",
                color: "#872EB0",
                "&:hover": { color: "primary", outlineColor: "secondary" },
              }}
            >
              shop now
            </Button>
          </Link>
        </center>
      </CardActionArea>
    </Card>
  );
}
