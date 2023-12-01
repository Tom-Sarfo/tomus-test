import React from "react";
import { ItemData } from "../../Common/ItemCard/ItemCardData";
import SearchSuggested from "./SearchSuggested";

export default function Search({
  searchTerm,
  setSearchTerm,
  filteredData,
  setFilteredData,
}) {
  const searchFilter = (searchTerm) => {
    const search = ItemData.filter((item) => {
      const searchKey = searchTerm?.toLowerCase();
      return item.productName.toLowerCase().includes(searchKey);
    });
    setFilteredData(search);
    console.log(search);
  };
  return (
    <div>
      {filteredData?.map((term) => (
        <SearchSuggested />
      ))}
    </div>
  );
}

