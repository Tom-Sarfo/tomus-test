import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import "./Navigation/Styles/SwitchScreen.css";

import DesktopNavBar from "./Navigation/desktopNavBar";
import MobileNavbar from "./Navigation/MobileNavBar";

function App() {
	return (
		<>
			<div className="DesktopNavBar">
				<DesktopNavBar />
			</div>

			<div className="MobileNavBar">
				<MobileNavbar />
			</div>
			<div>Tomus is back</div>
		</>
	);
}

export default App;
