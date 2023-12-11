import React from "react";
import TextField from "@mui/material/TextField";

export default function MultiLineInput() {
  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        label="Address"
        multiline
        rows={4}
        placeholder="eg. St: Nsoubri st      State: Greater Accra   City:  Dansoman (Karikari) LandMark(optional): Adjacent Karikari Park
        "
      />
    </div>
  );
}
