import { Button, Card, CardContent, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AskQuestion from "../AskQuestion/AskQuestion";
import SelectStaff from "../../SelectOption/SelectOption";
import { doctors } from "../../doctors";
import { topics } from "../../topics";
import patients from "../../patients";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
function Questions() {
  const [showQueries, setShowQueries] = useState(false);
  const handleClick = () => {
    setShowQueries((state) => !state);
  };
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
          <SelectStaff values={doctors} type="Choose a Physician" />
          <SelectStaff values={topics} type="Choose a Specialty" />
          <AskQuestion />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="contained"
              sx={{ width: "200px", alignSelf: "center" }}
            >
              <Typography variant="h6">Submit</Typography>
            </Button>
            <Link
              component="button"
              underline="always"
              onClick={handleClick}
              sx={{
                alignSelf: "center",
              }}
            >
              <Typography>
                {showQueries
                  ? `${"Hide"} Previous Questions`
                  : `${"View"} Previous Questions`}
              </Typography>
            </Link>
          </Box>
          {showQueries ? (
            <>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Your Previous Questions
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  gap: 6,
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                {patients.map((question) => {
                  return (
                    <Card
                      key={question.id}
                      sx={{ width: "30%", backgroundColor: "#3E758A" }}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          gutterBottom
                        >
                          {`Topic: ${question.topic}`}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          {`Physician: ${question.physician}`}
                        </Typography>
                        <Typography variant="body2">
                          <br />
                          {question.issue}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Questions;
