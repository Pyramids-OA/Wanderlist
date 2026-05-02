import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";

export default function SearchBar({ locationName, setLocationName }) {
  const { setDisplayLocation } = useContext(PlacesContext);
  return (
    <div className="flex justify-center items-center gap-4 max-w-3xl mx-auto mt-6">
      <TextField
        placeholder="Search for places..."
        variant="outlined"
        value={locationName}
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1, color: "#888" }} />,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "#f5f7ff",
          },
        }}
        onChange={(e) => {
          setDisplayLocation("Search")
          setLocationName(e.target.value);
        }}
      />
    </div>
  );
}
