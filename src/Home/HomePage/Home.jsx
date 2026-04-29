import LocationCard from "./LocationCard";
import CategoryType from "./CategoryType";
import Navbar from "./Navbar";
import AddDialog from "./AddDialog";
import { useState, useContext } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";

//MUI
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function Home() {
  const { places, setPlaces, categoryType } = useContext(PlacesContext);
  const [showAddDialog, setShowAddDialog] = useState(false);
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
    setPlaces((prev) => [
      ...prev,
      {
        ...inputAddDialog,
        id: prev.length + 1,
      },
    ]);

    setShowAddDialog(false);
  }
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

      <CategoryType />

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
