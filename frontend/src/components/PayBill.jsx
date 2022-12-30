import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Divider,
  Modal,
  Stack,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  width: 400,
  bgcolor: "#000000",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function PayBill() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCancel = () => setOpen(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    setShowAlert(true);
    setOpen(false);
  };

  const confirmRef = useRef(null);

  const formValidation = Yup.object().shape({
    cardNumber: Yup.string()
      .length(16, "Enter valid card number")
      .matches(/[0-9]+/gi, "Must only contain numbers 0-9")
      .required("Card Number is required"),
    expiration: Yup.string()
      .length(5, "Enter valid expiration")
      .matches(/[0-9]+/gi, "Must only contain numbers 0-9")
      .required("Expiration Date is required"),
    securityCode: Yup.string()
      .length(3, "Please enter a valid CVV")
      .matches(/[0-9]+/gi, "Must only contain numbers 0-9")
      .required("Security Code is required"),
  });
  const myForm = useFormik({
    initialValues: {
      cardNumber: "",
      expiration: "",
      securityCode: "",
    },
    validateOnChange: true,
    validationSchema: formValidation,
    onSubmit: () => {
      handleOpen();
      confirmRef.current.scrollIntoView({ behavior: "smooth" });
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  alignItems: "center",
                  border: "10px solid black",
                }}
              >
                <Typography variant="h6" component="h2">
                  Confirm Submission?
                </Typography>
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleSubmit}
                    sx={{ width: "100px" }}
                  >
                    Submit
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
          <br />
          <br />
          <br />
          <br />
          {showAlert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert onClose={() => setShowAlert(false)}>
                Your confirmation number is {confirmationMessage}
              </Alert>
            </Stack>
          )}
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
            <Typography color="text.secondary">Name: </Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              {patientName}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">Pharmacy:</Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              ${pharmacy}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">
              Emergency Call Services:
            </Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              ${emergency}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">Labaratory Services:</Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              ${labaratory}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">
              Billed/Total Charges:
            </Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              ${subtotal}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography color="text.secondary">Insurance Payments:</Typography>
            <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
              ${insurancePayment}
            </Typography>
          </Box>
          <Divider variant="fullWidth" />

          <br />
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography sx={{ fontWeight: 500 }}>Amount Due:</Typography>
            <Typography sx={{ marginLeft: "auto", fontWeight: 500 }}>
              ${total}
            </Typography>
          </Box>
        </Card>
      </Box>
      <Box
        ref={confirmRef}
        sx={{ height: "10vh", display: "flex", justifyContent: "center" }}
      ></Box>
    </>
  );
}
const patients = [
  "Carter Smith",
  "Mary Poppins",
  "John Smith",
  "Martha Stewart",
];
function getRandomInt(min, ...max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const confirmationMessage =
  String(getRandomInt(9)) +
  "" +
  String(getRandomInt(15)) +
  "" +
  String(getRandomInt(20)) +
  "" +
  String(getRandomInt(999));

const patientName = patients[getRandomInt(4)];

const pharmacy = getRandomInt(3000, 5000);
const labaratory = getRandomInt(800, 2000);
const emergency = getRandomInt(2500, 3000);
const subtotal = pharmacy + labaratory + emergency;
const insurancePayment = Math.floor(0.8 * subtotal);
const total = subtotal - insurancePayment;
export default PayBill;
