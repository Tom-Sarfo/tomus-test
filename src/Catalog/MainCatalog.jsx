import { Link } from "react-router-dom";
import { ItemData } from "../Common/ItemCard/ItemCardData";
import ProductCard from "../ProductCollection/ProductCard";

export default function MainCatalog() {
  return (
    <div className="product">
      {ItemData?.map((data) => (
        <Link to={data.productUrl}>
          <ProductCard key={data.prod_id} data={data} />
        </Link>
      ))}
    </div>
  );
}
