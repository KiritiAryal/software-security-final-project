import { createSlice } from "@reduxjs/toolkit";
import patients from "../../patients";

// console.log(questions);
const initialState = { patients: patients };
console.log(initialState);
const questionSlice = createSlice({
  name: "patients",
  initialState,
});

export default questionSlice.reducer;
