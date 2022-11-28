import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import patients from "../../patients";
// import "./TestResults.css";
import NavBar from "../NavBar/NavBar";

function TestResults() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          p: 5,
          m: 7,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Test Results
        </Typography>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {patients.map((patient) => {
            const { testDate, availableDate, testResult } = patient;
            const resultRef = useRef(null);
            const handleChange = (panel) => (event, newExpanded) => {
              setExpanded(newExpanded ? panel : false);
              resultRef.current.style.backgroundColor = "#c3d7eb";
              console.log(resultRef.current.key);
            };
            return (
              <Accordion
                id={patient.id}
                expanded={expanded === `panel${patient.id}`}
                onChange={handleChange(`panel${patient.id}`)}
                key={patient.id}
                ref={resultRef}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Monospace",
                      letterSpacing: 6,
                    }}
                  >{`Collected on: ${testDate}`}</Typography>
                </AccordionSummary>
                <AccordionDetails color="#fff">
                  <Typography>
                    {`Result available on: ${availableDate}`}
                    <br />
                    {`Test Result: ${testResult}`}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default TestResults;
