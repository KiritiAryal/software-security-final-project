import { Button, Card, CardContent, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AskQuestion from "./AskQuestion";
import SelectStaff from "./SelectOption";
import { physicians } from "../physicians";
import { topics } from "../topics";
import NavBar from "./NavBar";
function Questions() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          p: 5,
          m: 5,
        }}
      >
        <Box
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: 3,
          }}
        >
          <Typography variant="h5" textAlign="center">
            Get Medical Advice From Our Best
          </Typography>
          <SelectStaff values={physicians} type="Choose a Physician" />
          <SelectStaff values={topics} type="Choose a Specialty" />
          <AskQuestion />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="contained"
              sx={{ width: "200px", alignSelf: "center" }}
            >
              <Typography variant="h6">Submit</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Questions;
