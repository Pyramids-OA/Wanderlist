import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PublicIcon from "@mui/icons-material/Public";
import CastleIcon from "@mui/icons-material/Castle";
import ParkIcon from "@mui/icons-material/Park";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import HotelClassIcon from "@mui/icons-material/HotelClass";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";

export default function SideDrawer({ open, toggleDrawer }) {
  const {
    categoryType,
    setCategoryType,
    setDisplayLocation,
    setRating,
    rating,
    setCategoryFillter,
  } = useContext(PlacesContext);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography sx={{ fontWeight: "bold", m: 2 }}>
        🌍 Category Type
      </Typography>

      <List>
        <FormControl sx={{ width: "90%", ml: 1.5 }}>
          <InputLabel>Category</InputLabel>
          <Select value={categoryType} label="Category">
            {["All Places", "Historical", "Natural", "Entertainment"].map(
              (text) => (
                <MenuItem
                  key={text}
                  onClick={() => {
                    setCategoryType(text === "All Places" ? "all" : text);
                    setDisplayLocation("Category");
                    setCategoryFillter("CategoryFillter");
                  }}
                >
                  <ListItemIcon>
                    {text === "All Places" && (
                      <PublicIcon
                        sx={{
                          color: "#10b981",
                          transition: "0.3s",
                          "&:hover": { transform: "scale(1.1)" },
                        }}
                      />
                    )}
                    {text === "Historical" && (
                      <CastleIcon
                        sx={{
                          color: "#92400e",
                          transition: "0.3s",
                          "&:hover": { transform: "scale(1.1)" },
                        }}
                      />
                    )}
                    {text === "Natural" && (
                      <ParkIcon
                        sx={{
                          color: "#22c55e",
                          transition: "0.3s",
                          "&:hover": { transform: "scale(1.1)" },
                        }}
                      />
                    )}
                    {text === "Entertainment" && (
                      <TheaterComedyIcon
                        sx={{
                          color: "#2563eb",
                          transition: "0.3s",
                          "&:hover": { transform: "scale(1.1)" },
                        }}
                      />
                    )}
                  </ListItemIcon>
                  {text}
                </MenuItem>
              ),
            )}
          </Select>
        </FormControl>
      </List>

      <Divider />

      <Typography sx={{ fontWeight: "bold", m: 2 }}>
        ⭐ Rating Filter
      </Typography>

      <List>
        <FormControl sx={{ width: "90%", ml: 1.5 }}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} label="Rating">
            {[5, 4, 3, 2, 1].map((num) => (
              <MenuItem
                key={num}
                onClick={() => {
                  setRating(num);
                  setDisplayLocation("Rating");
                  setCategoryFillter("CategoryFillter");
                }}
              >
                {"⭐".repeat(num)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </List>
      <Divider sx={{ marginTop: 5 }} />

      <MenuItem
        onClick={() => {
          setCategoryFillter("SortFillter");
        }}
        sx={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: "10px",
          margin: "7px",
          fontWeight: "bold",
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgba(6, 184, 0, 0.1)",
            transform: "translateX(5px)",
          },
        }}
      >
        <SortByAlphaIcon sx={{ color: "#077404" }} />
        Sort From A to Z
      </MenuItem>
      <div className="my-8">
        <Divider />
        <MenuItem
          onClick={() => {
            setCategoryFillter("SortRating");
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderRadius: "10px",
            margin: "7px",
            fontWeight: "bold",
            backgroundColor: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(10px)",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 0, 0.2)",
              transform: "translateX(5px)",
            },
          }}
        >
          <HotelClassIcon sx={{ color: "#eece02" }} />
          Sort by rating
        </MenuItem>
      </div>
      <Divider />
      <MenuItem
        onClick={() => {
          setDisplayLocation("Favorites");
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: "10px",
          margin: "7px",
          fontWeight: "bold",
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgba(255,0,0,0.1)",
            transform: "translateX(5px)",
          },
        }}
      >
        <FavoriteIcon sx={{ color: "#ef4444" }} />
        Favorites
      </MenuItem>
    </Box>
  );

  return (
    <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
