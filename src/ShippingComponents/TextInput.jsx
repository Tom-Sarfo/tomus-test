import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextInput({fieldName}) {
  return <TextField label={fieldName} size="small" sx={{marginBottom: "1rem",}} />;
}
