import { Card, CardMedia } from "@mui/material";
import Tagline from "../Common/Tagline/Tagline";
import { data } from "../Common/Tagline/TaglineData";
export default function SecondDiscovery() {
  return (
    
    <div className="SecondDiscovery">
      <section className="SecondDisc2">
        <Tagline section={data.SecondDiscovery} />
      </section>
      <section className="SecondDisc1">
        <img
          src="/images/TOMUS-10.jpg"
          alt="Tomus footwear"
          className="firstDiscImg"
        />
      </section>
    </div>
  );
}
