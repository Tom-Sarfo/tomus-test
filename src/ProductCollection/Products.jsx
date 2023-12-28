import React from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import { ItemData } from "../Common/ItemCard/ItemCardData";
import { Link } from "react-router-dom";

export default function products() {
  return (
    <div className="">
      <FilterBar />
      <div className="product">
        {ItemData.map((data, index) => (
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
