import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import "./Navigation/Styles/SwitchScreen.css";
import DesktopNavBar from "./Navigation/DesktopNavBar";
import MobileNavbar from "./Navigation/MobileNavBar";
import Footer from "./Footer/Footer";
import Drawer from "./Navigation/Menu/Drawer";
import { useState } from "react";
import SearchSuggested from "./Navigation/Search/SearchSuggested";
import { ItemData } from "./Common/ItemCard/ItemCardData";
import { Outlet } from "react-router-dom";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    searchFilter(searchTerm);
  }

  const searchFilter = (searchTerm) => {
    const search = ItemData.filter((item) => {
      const searchKey = searchTerm?.toLowerCase();
      return item.productName.toLowerCase().includes(searchKey);
    });
    setFilteredData(search);
  };
  console.log(filteredData);

  return (
    <div style={{ position: "relative" }}>
      <nav>
        <div className="DesktopNavBar">
          <DesktopNavBar searchTerm={searchTerm} handleChange={handleChange} />
        </div>
        <div className="MobileNavBar">
          <MobileNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
      </nav>
      {filteredData.length !== 0 && searchTerm !== "" ? (
        <SearchSuggested filteredData={filteredData} />
      ) : null}

      {/* <MenuDrawer/> */}
      {openDrawer && (
        <Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      )}

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
