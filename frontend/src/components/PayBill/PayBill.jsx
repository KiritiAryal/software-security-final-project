import {
  Box,
  Card,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import NavBar from "../NavBar/NavBar";
function PayBill() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          m: 3,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            pt: 8,
            p: 5,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            width: "40vw",
            gap: 2,
            alignItems: "center",
            overflow: "scroll",
          }}
        >
          <FormControl>
            <InputLabel htmlFor="cardNo">Card Number:</InputLabel>
            <TextField id="cardNo" label="Card Number:" variant="outlined" />
          </FormControl>
        </Card>
      </Box>
    </>
  );
}

export default PayBill;
