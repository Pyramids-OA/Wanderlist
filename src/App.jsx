import Home from "./Home/HomePage/Home";
import Login from "./Home/LoginPage/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginInputProvider } from "./contexts/LoginFormInputContext";
import { PlacesProvider } from "./contexts/PlacesContext";
import CardDetails from "./Home/CardDetails/CardDetails";

function App() {
  return (
    <>
      <LoginInputProvider>
        <PlacesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/home/details/:id" element={<CardDetails />} />
            </Routes>
          </BrowserRouter>
        </PlacesProvider>
      </LoginInputProvider>
    </>
  );
}

export default App;
