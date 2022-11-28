import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";

function NavBar() {
  return (
    <div>
      <AppBar component="nav" color="navbarcolor" position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Stack sx={{ flexDirection: "row", gap: 4 }}>
            <Button color="buttoncolor" href="/">
              <Typography variant="h6">Home</Typography>
            </Button>
            <Button color="buttoncolor" href="/testResults">
              <Typography variant="h6">MyChart</Typography>
            </Button>
            <Button color="buttoncolor" href="/payBill">
              <Typography variant="h6">Pay Bill</Typography>
            </Button>
            <Button color="buttoncolor" href="/questions">
              <Typography variant="h6">Queries</Typography>
            </Button>
            <Button color="buttoncolor" href="/refills">
              <Typography variant="h6">Refills</Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
