// MUI
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-r from-blue-400 to-blue-500  h-screen">
      <Container
        maxWidth="sm"
        className="p-10  shadow-xl rounded-xl flex justify-center items-center flex-col bg-white/20 backdrop-blur-xl"
      >
        <AccountCircleIcon style={{ fontSize: "50px", color: "white" }} />
        <h1 className="text-white text-4xl p-4 font-bold ">User Login</h1>

        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          className="!m-2 w-80 hover:scale-105 transition"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          className="!m-2 w-80 hover:scale-105 transition"
        />

        <Button
          variant="contained"
          className="w-80 py-2 mt-5 rounded-full 
          bg-gradient-to-r from-blue-500 to-blue-400 
        text-white shadow-lg 
          hover:scale-105 transition"
        >
          Login
        </Button>
      </Container>
    </div>
  );
}
