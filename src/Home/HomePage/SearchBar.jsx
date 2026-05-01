import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center gap-4 max-w-3xl mx-auto mt-6">
      <TextField
        placeholder="Search for places..."
        variant="outlined"
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
      />

    </div>
  );
}
