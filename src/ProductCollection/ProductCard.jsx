import { Image } from "@mui/icons-material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function ProductCard() {
  return (
    <div className="flex flex-col bg-white rounded-xl">
      <section className="rounded-xl">
        <img
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355477401.jpg"
          alt="birk slipers"
        />
      </section>
      <div className="flex justify-between p-2 items-center">
        <div>
          <p className="text-black">Tonto</p>
          <p className="text-black font-bold">$70</p>
        </div>

        <div className="flex items-center">
          <ThumbUpIcon sx={{ color: "#872eb0" }} />
          <span className="text-black">50</span>
        </div>
      </div>
    </div>
  );
}
