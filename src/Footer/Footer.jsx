import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
export default function Footer() {
  return (
    <footer className="Footer pb-11">
      <div className="Icons">
        <Stack direction="row" spacing={6}>
          <Link
            href="https://instagram.com/_tomusbirk"
            target="_blank"
            sx={{ "&:hover": { color: "secondary" } }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://facebook.com/tomusbirk"
            target="_blank"
            sx={{ "&:hover": { color: "secondary" } }}
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://x.com/tomusfootwear"
            target="_blank"
            sx={{ "&:hover": { color: "secondary" } }}
          >
            <TwitterIcon />
          </Link>
        </Stack>
      </div>
      <div className="CopyRight">
        <p>&copy; 2023 Tomus Footwear</p>
      </div>
    </footer>
  );
}
