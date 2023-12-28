import React from "react";
import { ItemData } from "../Common/ItemCard/ItemCardData";
import { Link } from "react-router-dom";

export default function FilterBar() {
  return (
    <div className="filter">
      <Link to="/products/all">
        <button className="filterBtn">All</button>
      </Link>

      <Link to="/products/birks"><button className="filterBtn">Birks</button></Link>
      <Link to="/products/beads"><button className="filterBtn">Beads</button></Link>
    </div>
  );
}
