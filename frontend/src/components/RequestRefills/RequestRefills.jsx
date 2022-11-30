import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import patients from "../../patients";
import NavBar from "../NavBar/NavBar";

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

function RequestRefills() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCancel = () => setOpen(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    setShowAlert(true);
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(
      setShowAlert((state) => (state = false)),
      1000
    );
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          m: 5,
          p: 4,
          pb: 6,
        }}
      >
        <NavBar />
        <Typography variant="h4">Your Medications</Typography>
        <Card
          sx={{
            p: 5,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            width: "80vw",
            gap: 5,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
            background: "#DBE2E9",
            overflow: "scroll",
            borderRadius: 3,
          }}
        >
          {patients.map((patient) => {
            const [prescription, setPrescription] = useState("");
            const handleChange = (event) => {
              setPrescription(event.target.value);
            };
            const { id, medication, medicationDescription } = patient;
            return (
              <Card
                key={id}
                sx={{
                  height: "200px",
                  display: "flex",
                  width: "250px",
                  flexDirection: "column",
                  background: "#fff",
                  borderRadius: 3,
                }}
              >
                <CardContent
                  sx={{
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {medication}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {medicationDescription}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <CardActions>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Request Refill
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={prescription}
                        label="prescription"
                        onChange={handleChange}
                        sx={{ width: "10vw" }}
                      >
                        <MenuItem value={1}>1-month refill</MenuItem>
                        <MenuItem value={3}>3-months refill</MenuItem>
                        <MenuItem value={6}>6-months refill</MenuItem>
                      </Select>
                    </FormControl>
                  </CardActions>
                </Box>
              </Card>
            );
          })}
        </Card>

        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ width: "200px" }}
        >
          <Typography variant="h5">Submit</Typography>
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
        {console.log(showAlert)}
        {showAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert onClose={() => setShowAlert(false)}>
              Prescription Refill Request Received!
            </Alert>
          </Stack>
        )}
      </Box>
    </>
  );
}

export default RequestRefills;
