import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tagline from "../Common/Tagline/Tagline";
import { data } from "../Common/Tagline/TaglineData";

export default function FirstDiscovery() {
	return (
		<div className="FirstDiscovery">
			<section className="FirstDisc1">
				<img
					src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355513267.jpg"
					alt="Tomus footwear"
				/>
			</section>

			<section className="FirstDisc2">
				<Tagline section={data.FirstDiscovery}/>
			</section>
		</div>
	);
}
