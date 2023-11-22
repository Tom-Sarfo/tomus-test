import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ItemData } from "./Common/ItemCard/ItemCardData";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function Favourite({ data }) {
  const [item, setItem] = useState(data);
  const [cookies, setCookie, removeCookie] = useCookies(["Fav"]);

  const cookieName = data.productName;
  const nameCook = `${cookieName}`;

  function setFav() {
    const prodCookie = setCookie(`${cookieName}`, cookieName, {
      path: "/",
    });

    setItem({
      ...item,
      fav: true,
    });
	console.log(cookies.nameCook)
  }

  function removeFav() {
    const prodCookie = removeCookie(`${cookieName}`, cookieName, {
      path: "/",
    });
    setItem({
      ...item,
      fav: false,
    });
  }

//   console.log(cookies.fav);
  return (
    <div className="Favourite">
      {cookies.Gyinaso ? (
        <FavoriteIcon onClick={removeFav} />
      ) : (
        <FavoriteBorderOutlinedIcon onClick={setFav} />
      )}
    </div>
  );
}
