import ExploreIcon from "@mui/icons-material/Explore";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TuneIcon from "@mui/icons-material/Tune";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { useContext, useState } from "react";

import { LoginInputContext } from "../../contexts/LoginFormInputContext";
import { PlacesContext } from "../../contexts/PlacesContext";

import SideDrawer from "./SideDrawer";

export default function Navbar({ changeMode }) {
  const { darkMode, favorites, setDisplayLocation } = useContext(PlacesContext);
  const { userName } = useContext(LoginInputContext);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex items-center h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500">
      <div className="flex flex-start items-center ml-6 text-blue-200 text-3xl">
        <ExploreIcon sx={{ fontSize: "40px" }} />
        <h1
          onClick={() => (window.location.href = "/Home")}
          className="font-bold cursor-pointer"
        >
          Wanderlist
        </h1>
      </div>
      <div className="flex justify-center items-center ml-10 font-bold text-blue-200 text-xl">
        <h1> Welcome {userName}</h1>
        <WavingHandIcon sx={{ fontSize: "50px", marginLeft: "10px" }} />
      </div>
      <div className="flex justify-end items-center ml-auto mr-6 text-blue-200 text-xl">
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="Favorite"
            sx={{ position: "relative" }}
            onClick={() => {
              setDisplayLocation("Favorites");
            }}
          >
            <FavoriteBorderIcon
              className={
                favorites.length > 0 ? "text-red-500" : "text-blue-200"
              }
              sx={{
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
            {favorites.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  background: "#ef4444",
                  color: "white",
                  borderRadius: "50%",
                  width: 16,
                  height: 16,
                  fontSize: 10,
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {favorites.length}
              </span>
            )}
          </IconButton>
          <IconButton
            aria-label="DarkMode"
            value={darkMode}
            onClick={changeMode}
          >
            {darkMode ? (
              <SunnyIcon
                className="text-yellow-400"
                sx={{
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              />
            ) : (
              <DarkModeIcon
                className="text-black"
                sx={{
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              />
            )}
          </IconButton>
          <IconButton aria-label="SideMenu" onClick={toggleDrawer(true)}>
            <TuneIcon
              className="text-white"
              sx={{
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
          </IconButton>
        </Stack>
      </div>
      <SideDrawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}
