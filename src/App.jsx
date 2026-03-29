import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/HomePage/Home";
import Login from "./Home/LoginPage/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
