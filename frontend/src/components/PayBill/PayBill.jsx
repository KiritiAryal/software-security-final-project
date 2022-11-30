import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import NavBar from "../NavBar/NavBar";
function PayBill() {
  const formValidation = Yup.object().shape({
    cardNumber: Yup.string().required("Card Number is required"),
    expiration: Yup.string().required("Expiration Date is required"),
    securityCode: Yup.string().required("CVV is required"),
  });
  const myForm = useFormik({
    initialValues: {
      cardNumber: "",
      expiration: "",
      securityCode: "",
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      alert(values.name);
    },
  });
  return (
    <>
      <NavBar />
      <Box
        sx={{
          m: 3,
          mt: 8,
          pt: 10,
          pl: 20,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            width: "40vw",
            gap: 2,
            alignItems: "center",
            overflow: "scroll",
          }}
        >
          <TextField
            required
            fullWidth
            label="Card Number"
            margin="dense"
            name="cardNumber"
            value={myForm.values.cardNumber}
            onChange={myForm.handleChange}
            error={!!myForm.errors.cardNumber}
            helperText={myForm.errors.cardNumber}
          />
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextField
              required
              label="MM / YY"
              margin="dense"
              name="expiration"
              value={myForm.values.expiration}
              onChange={myForm.handleChange}
              error={!!myForm.errors.expiration}
              helperText={myForm.errors.expiration}
              sx={{ width: "15vw" }}
            />
            <TextField
              required
              label="CVV"
              margin="dense"
              name="securityCode"
              value={myForm.values.securityCode}
              onChange={myForm.handleChange}
              error={!!myForm.errors.securityCode}
              helperText={myForm.errors.securityCode}
              sx={{ width: "15vw" }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            All card information is fully encrypted, secure and protected. We
            never store your actual credit card information.
          </Typography>
          <Button
            disabled={!myForm.isValid}
            onClick={myForm.submitForm}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
        <Card
          sx={{
            p: 5,
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            width: "30vw",
            overflow: "scroll",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Summary of Patient Bill
          </Typography>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">Patient Name:</Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              Kiriti Aryal
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">Pharmacy:</Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              $5000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">
              Emergency Call Services:
            </Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              $7000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">Labaratory Services:</Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              $4000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">
              Billed/Total Charges:
            </Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              $16000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">Insurance Payments:</Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              $12000
            </Typography>
          </Box>
          <Divider variant="fullWidth" />

          <br />
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography sx={{ fontWeight: 500 }}>Amount Due:</Typography>
            <Typography sx={{ marginLeft: "auto", fontWeight: 500 }}>
              $4000
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default PayBill;
