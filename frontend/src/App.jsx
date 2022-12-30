import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import Questions from "./components/Questions";
import TestResults from "./components/TestResults";
import PayBill from "./components/PayBill";
import RequestRefills from "./components/RequestRefills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/testResults" element={<TestResults />} />
          <Route path="/payBill" element={<PayBill />} />
          <Route path="/refills" element={<RequestRefills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
