import ExploreIcon from "@mui/icons-material/Explore";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginInputContext } from "../../contexts/LoginFormInputContext";
import { PlacesContext } from "../../contexts/PlacesContext";

import SideDrawer from "./SideDrawer";

export default function Navbar({ changeMode }) {
  const { darkMode } = useContext(PlacesContext);
  const { userName } = useContext(LoginInputContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex items-center h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500">
      <div className="flex flex-start items-center ml-6 text-blue-200 text-3xl">
        <ExploreIcon sx={{ fontSize: "40px" }} />
        <h1 onClick={() => navigate("/Home")} className="font-bold">
          {" "}
          Wanderlist
        </h1>
      </div>
      <div className="flex justify-center items-center ml-10 font-bold text-blue-200 text-xl">
        <h1> Welcome {userName}</h1>
        <WavingHandIcon sx={{ fontSize: "50px", marginLeft: "10px" }} />
      </div>
      <div className="flex justify-end items-center ml-auto mr-6 text-blue-200 text-xl">
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="Favorite">
            <FavoriteBorderIcon className="text-red-600" />
          </IconButton>
          <IconButton
            aria-label="DarkMode"
            value={darkMode}
            onClick={changeMode}
          >
            {darkMode ? (
              <SunnyIcon className="text-yellow-400" />
            ) : (
              <DarkModeIcon className="text-black" />
            )}
          </IconButton>
          <IconButton aria-label="SideMenu" onClick={toggleDrawer(true)}>
            <MenuIcon className="text-white" />
          </IconButton>
        </Stack>
      </div>
      <SideDrawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}
