import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Favourite from "../../Favourite";

export default function ItemCard({ data }) {
  return (
    <Card className="ItemCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={data.imgUrl}
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
          <Button
            variant="outlined"
            sx={{
              marginBottom: "0.5rem",
              color: "#872EB0",
              "&:hover": { color: "primary", outlineColor: "secondary" },
            }}
            href="https://tomuswear.company.site/products"
          >
            shop now
          </Button>
        </center>
      </CardActionArea>
    </Card>
  );
}
