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
          <Link to={`/product/${data.prod_id}`}>
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

// import { Image } from "@mui/icons-material";
// import React from "react";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import {CardActionArea} from "@mui/material";
// import "../App.css"

// export default function ProductCard({ data }) {
//   return (
//     <div>
//       {/* className="flex flex-col bg-white rounded-xl" */}
//       <Card className="prodCard">
//         <CardActionArea>
//         <CardMedia
//           component="img"
//           height={250}
//           image={data.imgUrl[0]}
//           alt={data.productName}
//         />
//         <CardContent>
//           <div className="flex justify-between p-2 items-center">
//             <div>
//               <p className="text-black">{data.productName}</p>
//               <p className="text-black font-bold">${data.produtPrice}</p>
//             </div>

//             <div className="flex items-center">
//               <ThumbUpIcon sx={{ color: "#872eb0" }} />
//               <span className="text-black">50</span>
//             </div>
//           </div>
//         </CardContent>
//         </CardActionArea>
//       </Card>
//     </div>
//   );
// }
