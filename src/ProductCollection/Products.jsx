import React from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import { ItemData } from "../Common/ItemCard/ItemCardData";
import { Link, useParams} from "react-router-dom";

export default function products() {
  const type = useParams();
  
  //filter items
  const items = ItemData.filter((item) => {
    if (type.design === "beads") {
      return item.type === "beads";
    } else if(type.design === "birks"){
      return item.type === "birks"
    } else {
      return ItemData;
    } 
  });

  return (
    <div className="">
      <FilterBar />
      <div className="product">
        {items.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
      <div className="flex justify-center items-center text-black mt-6">
        <Link>
          <p>load more</p>
        </Link>
      </div>
    </div>
  );
}
