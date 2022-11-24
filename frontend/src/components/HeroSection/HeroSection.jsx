import { Box } from "@mui/system";
import React from "react";
import heroImage from "../../assets/care.avif";

function HeroSection() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: ` url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
    </>
  );
}

export default HeroSection;

//linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
