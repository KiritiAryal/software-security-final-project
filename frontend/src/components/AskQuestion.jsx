import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function AskQuestion() {
  return (
    <Box>
      <TextField
        id="outlined-multiline-static"
        label="Type your Question"
        multiline
        rows={8}
        defaultValue=""
        sx={{ width: "92.3%" }}
      />
    </Box>
  );
}

export default AskQuestion;
