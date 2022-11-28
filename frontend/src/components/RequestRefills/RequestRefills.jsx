import React from "react";
import patients from "../../patients";
import NavBar from "../NavBar/NavBar";
function RequestRefills() {
  return (
    <>
      <NavBar />
      {patients.map((patient) => {
        const { medication, medicationDescription } = patient;
      })}
    </>
  );
}

export default RequestRefills;
