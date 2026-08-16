// MUI
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// REACT
import { useContext, useState } from "react";
import { LoginInputContext } from "../../contexts/LoginFormInputContext";

export default function Login() {
  const { loginForm, setLoginForm, setUser } = useContext(LoginInputContext);

  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    if (loginForm.username == "" && loginForm.password == "") {
      setMessageError("Please fill out the form");
    } else if (loginForm.username == "") {
      setMessageError("Please enter your username");
    } else if (loginForm.username.length < 3) {
      setMessageError("Username must be at least 3 characters");
    } else if (loginForm.password == "") {
      setMessageError("Please enter your password");
    } else if (loginForm.password.length < 8) {
      setMessageError("Password must be at least 8");
    } else {
      setMessageError("");

      setUser(loginForm.username);

      navigate("/home");
    }
  }

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 h-screen">
      <Container
        maxWidth="sm"
        className="p-10 shadow-xl rounded-xl flex justify-center items-center flex-col bg-indigo-200 backdrop-blur-xl"
      >
        <AccountCircleIcon
          style={{
            fontSize: "50px",
            color: "oklch(44.6% 0.043 257.281)",
          }}
        />
        <h1
          className="text-white text-4xl p-4 font-bold"
          style={{ color: "oklch(44.6% 0.043 257.281)" }}
        >
          User Login
        </h1>

        <TextField
          label="Username"
          className="!m-2 w-80 hover:scale-105 transition"
          value={loginForm.username}
          onChange={(e) =>
            setLoginForm({ ...loginForm, username: e.target.value })
          }
        />

        <TextField
          label="Password"
          type="password"
          className="!m-2 w-80 hover:scale-105 transition"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
        />

        <h2 className="m-2 text-red-500">{messageError}</h2>

        <Button
          variant="contained"
          className="w-80 py-2 mt-5 bg-gradient-to-r from-blue-500 to-blue-400  shadow-lg hover:scale-105 transition !rounded-full"
          style={{
            background: "oklch(44.6% 0.043 257.281)",
          }}
          onClick={handleClick}
        >
          Login
        </Button>
      </Container>
    </div>
  );
}
