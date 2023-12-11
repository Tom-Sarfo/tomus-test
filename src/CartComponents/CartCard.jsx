import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";

export default function CartCard() {
  return (
    <div className="cartCard">
      <div className="flex-none w-32 py-11 px-12 text-gray-500 bg-gray-300">
        <ImageIcon />
      </div>
      <div className="grow w-48  text-xl text-left px-4 py-2">
        <p className="font-bold text-gray-700">Afro-G</p>
        <div>
          <label for="sizes" className="text-red-500">
            size:{" "}
          </label>
          <select name="sizes" id="sizes">
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </div>

        <div className="flex justify-between my-2">
          <p className="">
            Qty: {" "}
            <input type="number" className="w-6 border-2 rounded" value="1" />
          </p>
          <p className="font-bold text-purple-500">$100 x 1</p>
        </div>
      </div>
      <div className="py-11">
        <button className="flex-none w-7  border-2  h-7 rounded-full bg-red-300">
          <CloseIcon sx={{ fontSize: "12px", marginBottom: "3px" }} />
        </button>
      </div>
    </div>
  );
}
