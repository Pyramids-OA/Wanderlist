import LocationCard from "./LocationCard";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Navbar from "./Navbar";
import AddDialog from "./AddDialog";
import { useState, useContext } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";
import SearchBar from "./SearchBar";

export default function Home() {
  const { darkMode, setDarkMode } = useContext(PlacesContext);
  const { places, setPlaces, categoryType, displayLocation, rating } =
    useContext(PlacesContext);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [locationName, setLocationName] = useState("");
  let count = 0;
  const [inputAddDialog, setInputAddDialog] = useState({
    name: "",
    rating: "",
    category: "",
    openingHours: "",
    entryFee: "",
    description: "",
    details: "",
    image: "",
    imageDetails: "",
  });

  function handleAddDialogClose() {
    setShowAddDialog(false);
  }
  function openShowDialog() {
    setShowAddDialog(true);
  }
  function handelAddDialog() {
    const {
      name,
      rating,
      category,
      openingHours,
      entryFee,
      description,
      details,
      image,
      imageDetails,
    } = inputAddDialog;
    if (
      !name ||
      !rating ||
      !category ||
      !openingHours ||
      !entryFee ||
      !description ||
      !details ||
      !image ||
      !imageDetails
    ) {
      return;
    }
    setPlaces((prev) => [
      ...prev,
      {
        ...inputAddDialog,
        id: prev.length + 1,
      },
    ]);

    setShowAddDialog(false);
  }
  function changeMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`h-auto pb-50 ${
        darkMode
          ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
          : "bg-gradient-to-r from-blue-300 to-blue-400"
      }`}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "linear-gradient(to right, #93c5fd, #60a5fa)",
        }}
      >
        <Navbar changeMode={changeMode} />
      </div>

      {/* SEARCR BAR */}
      <SearchBar
        locationName={locationName}
        setLocationName={setLocationName}
      />
      {/*=== SEARCH BAR ===*/}

      <div className="grid grid-cols-4 gap-4 ml-8 mt-8">
        {places.map((place) => {
          if (displayLocation === "all") {
            count++;
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
          } else if (displayLocation === "Category") {
            if (place.category === categoryType) {
              count++;
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
              count++;
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
          }
          if (displayLocation === "Rating") {
            if (Math.round(place.rating) === rating) {
              count++;
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
          }
          if (displayLocation === "Search") {
            if (place.name.toLowerCase().includes(locationName.toLowerCase())) {
              count++;
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
          }
        })}
      </div>
      <div className="flex flex-col justify-center items-center my-20 ">
        {count === 0 && (
          <>
            <h1 className="text-3xl font-bold text-red-700 mb-10">
              There are none any Location
            </h1>
            <h3 className="text-xl font-bold text-blue-700">
              Do you want add new One ?
            </h3>
          </>
        )}
      </div>
      <div className="flex justify-center items-center mt-20">
        <button
          className="group flex flex-col items-center cursor-pointer"
          onClick={openShowDialog}
        >
          <ControlPointIcon
            sx={{
              fontSize: 120,
              m: 1,
              color: "rgb(37 99 235 / var(--tw-text-opacity, 1))",
              transition: "all 0.3s ease",

              "&:hover": {
                color: "rgb(29 78 216)",
                transform: "scale(1.1)",
                filter: "drop-shadow(0 0 8px rgba(37,99,235,0.6))",
              },
            }}
          />
          <span className="opacity-0 translate-y-2 text-md text-blue-600 font-bold transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Add New Location
          </span>
        </button>
        <AddDialog
          showAddDialog={showAddDialog}
          handleAddDialogClose={handleAddDialogClose}
          inputAddDialog={inputAddDialog}
          setInputAddDialog={setInputAddDialog}
          handelAddDialog={handelAddDialog}
        />
      </div>
    </div>
  );
}
