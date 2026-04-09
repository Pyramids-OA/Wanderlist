import LocationCard from "./LocationCard";
import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PlacesContext } from "../../contexts/PlacesContext";

// MUI
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CastleIcon from "@mui/icons-material/Castle";
import ForestIcon from "@mui/icons-material/Forest";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Home() {
 
  const { places, setPlaces } = useContext(PlacesContext);
  const [categoryType, setCategoryType] = useState("all");
  let cancelAxios;

  useEffect(() => {
    if (places.length === 0){
    axios
      .get("https://69cd38b5ddc3cabb7bd2599a.mockapi.io/api/v1/places/Places", {
        cancelToken: new axios.CancelToken((c) => {
          cancelAxios = c;
        }),
      })
      .then(function (response) {
        setPlaces(response.data);
      })
      .catch(function (error) {
        console.log("Error fetching places:", error);
      });

    return () => {
      if (cancelAxios) cancelAxios();
    };
}}, []);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-400 h-auto pb-50">
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "linear-gradient(to right, #93c5fd, #60a5fa)",
        }}
      >
        <Navbar />
      </div>

      <ToggleButtonGroup
        aria-label="text formatting"
        value={categoryType}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <ToggleButton
          onClick={() => {
            setCategoryType("all");
          }}
          value="all"
          aria-label="All"
          sx={{
            padding: 1.5,
            borderRadius: "20px",
            border: "2px solid ",
          }}
        >
          <FormatListBulletedIcon
            sx={{
              fontSize: "2.5rem",
              color: " rgb(203 213 225 / var(--tw-text-opacity, 1))",
            }}
          />
          <p
            style={{
              fontSize: "20px",
              marginLeft: "8px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            All
          </p>
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setCategoryType("Historical");
          }}
          value="Historical"
          aria-label="Historical"
          sx={{ padding: 1.5, border: "2px solid " }}
        >
          <CastleIcon
            sx={{
              fontSize: "2.5rem",
              color: "rgb(124 45 18 / var(--tw-text-opacity, 1))",
            }}
          />
          <p
            style={{
              fontSize: "20px",
              marginLeft: "8px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Historical
          </p>
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setCategoryType("Natural");
          }}
          value="Natural"
          aria-label="Natural"
          sx={{ padding: 1.5, border: "2px solid " }}
        >
          <ForestIcon sx={{ fontSize: "2.5rem", color: "green" }} />
          <p
            style={{
              fontSize: "20px",
              marginLeft: "8px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Natural
          </p>
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setCategoryType("Entertainment");
          }}
          value="Entertainment"
          aria-label="Entertainment"
          sx={{
            padding: 1.5,
            borderRadius: "20px",
            border: "2px solid  ",
          }}
        >
          <ParaglidingIcon
            sx={{
              fontSize: "2.5rem",
              color: "rgb(37 99 235 / var(--tw-text-opacity, 1))",
            }}
          />
          <p
            style={{
              fontSize: "20px",
              marginLeft: "8px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Entertainment
          </p>
        </ToggleButton>
      </ToggleButtonGroup>

      <div className="grid grid-cols-4 gap-4 ml-8 mt-8">
        {places.map((place) => {
          if (place.category === categoryType) {
            return (
              <LocationCard
                key={place.id}
                id={place.id}
                name={place.name}
                desc={place.description}
                image={place.image}
                rating={place.rating}
                category={place.category}
              />
            );
          } else if (categoryType === "all") {
            return (
              <LocationCard
                key={place.id}
                id={place.id}
                name={place.name}
                desc={place.description}
                image={place.image}
                rating={place.rating}
                category={place.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
