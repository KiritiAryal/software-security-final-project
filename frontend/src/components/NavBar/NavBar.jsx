import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";

function NavBar() {
  return (
    <div>
      <AppBar component="nav" color="navbarcolor">
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
            <Button color="buttoncolor">
              <Typography variant="h6">Home</Typography>
            </Button>
            <Button color="buttoncolor">
              <Typography variant="h6">About</Typography>
            </Button>
            <Button color="buttoncolor">
              <Typography variant="h6">Contact</Typography>
            </Button>
            <Button color="buttoncolor">
              <Typography variant="h6">Ask a Doctor</Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
