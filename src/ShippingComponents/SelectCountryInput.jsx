import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { countryList } from "../Common/CountryList";

export default function SelectCountryInput() {
  return (
    <div>
      <TextField
        id="outlined-select-country"
        select
        label="Country"
        defaultValue="Ghana"
        helperText="Please select your country"
        size="small"
        sx={{width: "235px", marginBottom: "0.5rem"}}
      >
        {countryList.map((country, index) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
