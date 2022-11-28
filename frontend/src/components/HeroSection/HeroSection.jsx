import { Box } from "@mui/system";
import React from "react";
import heroImage from "../../assets/care.avif";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { Button } from "@mui/material";

function SignUpButton() {
  const clerk = useClerk();
  return (
    <Button variant="contained" onClick={() => clerk.openSignUp({})}>
      SignUp
    </Button>
  );
}

function SignInButton() {
  const clerk = useClerk();
  return (
    <Button variant="contained" onClick={() => clerk.openSignIn({})}>
      Log In
    </Button>
  );
}

function HeroSection() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: ` url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
      <SignedOut>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SignUpButton />
          <SignInButton />
        </Box>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}

export default HeroSection;

//linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
