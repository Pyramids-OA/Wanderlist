import LocationCard from "./LocationCard";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Navbar from "./Navbar";
import AddDialog from "./AddDialog";
import Pagination from "@mui/material/Pagination";
import { useState, useContext, useEffect } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";
import SearchBar from "./SearchBar";
import { useSnackbar } from "../../contexts/SnackbarContext";

export default function Home() {
  const { showSnackbar } = useSnackbar();
  const { darkMode, setDarkMode, favorites } = useContext(PlacesContext);
  const {
    places,
    setPlaces,
    categoryType,
    displayLocation,
    rating,
    categoryFillter,
  } = useContext(PlacesContext);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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

  let filteredPlaces = [];

  if (categoryFillter === "CategoryFillter") {
    filteredPlaces = places.filter((place) => {
      if (displayLocation === "all") return true;
      if (displayLocation === "Category") {
        return place.category === categoryType || categoryType === "all";
      }
      if (displayLocation === "Rating") {
        return Math.round(place.rating) === rating;
      }
      if (displayLocation === "Search") {
        return place.name.toLowerCase().includes(locationName.toLowerCase());
      }
      if (displayLocation === "Favorites") {
        return favorites.includes(place.id.toString());
      }
      return false;
    });
  } else if (categoryFillter === "SortFillter") {
    filteredPlaces = [...places].sort((a, b) => a.name.localeCompare(b.name));
  } else if (categoryFillter === "SortRating") {
    filteredPlaces = [...places].sort((a, b) => b.rating - a.rating);
  }

  // PAGINATION: بنقص الجزء يلي يخص الصفحة الحالية بس
  const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPlaces = filteredPlaces.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFillter, categoryType, displayLocation, rating, locationName]);

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
      showSnackbar("Please fill in all fields", "error");
      return;
    }
    setPlaces((prev) => {
      const nextId =
        prev.length > 0
          ? Math.max(...prev.map((p) => Number(p.id) || 0)) + 1
          : 1;
      return [...prev, { ...inputAddDialog, id: nextId }];
    });
    setShowAddDialog(false);
    showSnackbar("Location added successfully", "success");
  }
  function changeMode() {
    setDarkMode(!darkMode);
    showSnackbar(
      !darkMode ? "Dark mode enabled" : "Light mode enabled",
      "info",
    );
  }

  return (
    <div
      className={`h-auto pb-50 ${darkMode ? "bg-slate-800" : "bg-gray-200"}`}
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

      <div className="grid grid-cols-3 gap-3 px-8 mt-8">
        {paginatedPlaces.map((place) => (
          <LocationCard
            key={place.id}
            id={place.id}
            name={place.name}
            desc={place.description}
            image={place.image}
            rating={place.rating}
            category={place.category}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center my-8 ">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
            sx={{
              background: darkMode
                ? "oklch(92.8% 0.006 264.531)"
                : "oklch(44.6% 0.043 257.281)",
              borderRadius: "9999px",
              px: 2,
              py: 0.5,
              boxShadow: darkMode
                ? "0 2px 8px rgba(0,0,0,0.4)"
                : "0 2px 8px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      )}

      <div className="flex flex-col justify-center items-center my-20 ">
        {(() => {
          if (filteredPlaces.length === 0) {
            return (
              <>
                <h1 className="text-3xl font-bold text-red-700 mb-10">
                  There are none any Location
                </h1>
                <h3 className="text-xl font-bold text-blue-700">
                  Do you want add new One ?
                </h3>
              </>
            );
          }
        })()}
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
              color: darkMode
                ? " oklch(92.8% 0.006 264.531)"
                : "oklch(44.6% 0.043 257.281)",
              transition: "all 0.3s ease",

              "&:hover": {
                color: darkMode
                  ? " oklch(92.8% 0.006 264.531)"
                  : "oklch(27.9% 0.041 260.031)",
                transform: "scale(1.1)",
              },
            }}
          />
          <span
            className="opacity-0 translate-y-2 text-md text-slate-700 font-bold transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
            style={{
              color: darkMode
                ? " oklch(92.8% 0.006 264.531)"
                : "oklch(37.2% 0.044 257.287)",
            }}
          >
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
