import ExploreIcon from "@mui/icons-material/Explore";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { useContext } from "react";
import { LoginInputContext } from "../../contexts/LoginFormInputContext";

export default function Navbar() {
  const { userName } = useContext(LoginInputContext);

  return (
    <div className="flex items-center h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500">
      <div className="flex flex-start items-center ml-6 text-blue-200 text-3xl">
        <ExploreIcon sx={{ fontSize: "40px" }} />
        <h1> Wanderlist</h1>
      </div>
      <div className="flex justify-end items-center ml-auto mr-6 text-blue-200 text-xl">
        <h1> Welcome {userName}</h1>
        <WavingHandIcon sx={{ fontSize: "50px", marginLeft: "10px" }} />
      </div>
    </div>
  );
}
