import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CategoryCard from "./CategoryCard";
import "./Category.css"

export default function Category() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

    console.log(value)

	return (
		<Box sx={{ width: "30%", bgcolor: "background.paper" }} className="Category">
			<Tabs value={value} onChange={handleChange} >
				<Tab label="Beads" />
				<Tab label="Men " />
				<Tab label="Ladies" />
			</Tabs>
			<CategoryCard />
		</Box>
	);
}
