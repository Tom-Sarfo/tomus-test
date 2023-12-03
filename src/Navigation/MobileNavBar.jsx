import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button"
import { styled, useTheme } from "@mui/material/styles";

import Menu from "@mui/material/Menu";

import "./Styles/Navigation.css";

export default function MobileNavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				className="MobileAppBar"
				sx={{ bgcolor: "white" }}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						// color="inherit"

						aria-label="menu"
						sx={{ mr: 2, color: "#872EB0"}}
						onClick={showDrawer}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ flexGrow: 1 }} />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#872EB0" }}>
						Tomus
					</Typography>
					{auth && (
						<div>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								// onClick={handleMenu}
								sx={{color: "#872EB0"}}
							>
								<Button variant="contained" color="secondary" href="https://tomuswear.company.site/products">view store</Button>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
