import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Tagline({ section }) {
  return (
    <div className={section[3].className}>
      <Typography variant={section[1].typoVariant} component="h2">
        <b>
          {section[0].title[0].firstline} <br />
          {section[0].title[1].secondline} <br />
          {section[0].title[2].thirdline}
        </b>
      </Typography>
      <br />
      <Link to="/products">
        <Button
          variant="contained"
          href="/"
          className="HeroBtn"
          sx={section[4]}
        >
          {section[2].btnText}
        </Button>
      </Link>
    </div>
  );
}
