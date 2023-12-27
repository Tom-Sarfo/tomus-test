import React from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";

export default function products() {
  return (
    <div className="">
      <FilterBar />
      <div className="product">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center items-center text-black mt-6">
        <Link>
          <p>load more</p>
        </Link>
      </div>
    </div>
  );
}
