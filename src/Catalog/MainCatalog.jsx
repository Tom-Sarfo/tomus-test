import { ItemData } from "../Common/ItemCard/ItemCardData";
import ProductCard from "../ProductCollection/ProductCard";

export default function MainCatalog() {
  return (
    <div className="product">
      {ItemData?.map((data) => (
        <ProductCard key={data.prod_id} data={data} />
      ))}
    </div>
  );
}
