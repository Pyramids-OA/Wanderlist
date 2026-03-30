import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/HomePage/Home";
import Login from "./Home/LoginPage/Login";
import { LoginInputContext } from "./contexts/LoginFormInputContext";
import { useState } from "react";
function App() {
  const [loginForm, setLoginForm] = useState({
    username: localStorage.getItem("username"),
    password: "",
  });
  return (
    <>
      <LoginInputContext.Provider value={{ loginForm, setLoginForm }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LoginInputContext.Provider>
    </>
  );
}

export default App;
