import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
