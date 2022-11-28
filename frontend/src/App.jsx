import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Questions from "./components/Questions/Questions";
import TestResults from "./components/TestResults/TestResults";
import PayBill from "./components/PayBill/PayBill";
import RequestRefills from "./components/RequestRefills/RequestRefills";
import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <div className="App">
      <ClerkProvider frontendApi={"clerk.sought.grub-7.lcl.dev"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/testResults" element={<TestResults />} />
            <Route path="/payBill" element={<PayBill />} />
            <Route path="/refills" element={<RequestRefills />} />
          </Routes>
        </BrowserRouter>
      </ClerkProvider>
    </div>
  );
}

export default App;
