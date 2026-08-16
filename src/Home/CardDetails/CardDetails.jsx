import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { useSnackbar } from "../../contexts/SnackbarContext";
import { PlacesContext } from "../../contexts/PlacesContext";
import DeleteDialog from "./DeleteDialog";

//MUI
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import Typography from "@mui/material/Typography";
import UpdateDialog from "./UpdateDialog";
import { AltRouteRounded, Message } from "@mui/icons-material";


export default function CardDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { showSnackbar } = useSnackbar();
  const { places, setPlaces, darkMode, favorites, setFavorites } =
    useContext(PlacesContext);

  const placeDetails = places.find((p) => Number(p.id) === Number(id)) || {};
  const [inputUpdateDialog, setInputUpdateDialog] = useState({
    rating: placeDetails?.rating || "",
    entryFee: placeDetails?.entryFee || "",
    openHours: placeDetails?.openingHours || "",
  });

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);


  function handelRating(r) {
    if (Math.round(r) === 5) {
      return "🌟🌟🌟🌟🌟";
    } else if (Math.round(r) === 4) {
      return "🌟🌟🌟🌟";
    } else if (Math.round(r) === 3) {
      return "⭐⭐⭐";
    } else if (Math.round(r) === 2) {
      return "⭐⭐";
    } else if (Math.round(r) === 1) {
      return "⭐";
    } else {
      return "No rating";
    }
  }
  // FUNCTION UPDATE

  
  function openShowUpdateDialog() {
    setShowUpdateDialog(true);
  }
  function handleUpdateDialogClose() {
    setShowUpdateDialog(false);
  }
  function handleUpdateDialog() {
    const updatedPlaces = places.map((p) => {
      if (Number(p.id) === Number(id)) {
        return {
          ...p,
          rating: inputUpdateDialog.rating,
          entryFee: inputUpdateDialog.entryFee,
          openingHours: inputUpdateDialog.openHours,
        };
      }
      return p;
    });
    setPlaces(updatedPlaces);
    setShowUpdateDialog(false);
    navigate(`/home/details/${id}`);
    showSnackbar("Location updated successfully", "success");
  }
  // FUNCTION DELETE
  function openShowDialog() {
    setShowDeleteDialog(true);
  }
  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }
  function handleDeleteDialog() {
    const updatedPlaces = places.filter((p) => {
      return p.id != id;
    });
    setPlaces(updatedPlaces);
    setShowDeleteDialog(false);
    navigate("/home");
  }
  function handleFavorite() {
    const isFavorite = favorites.includes(id);
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
    showSnackbar(
      isFavorite ? "Removed from favorites" : "Added to favorites",
      "info",
    );
  }
  return (
    <div className={`h-auto pb-50 ${darkMode ? "bg-gray-800" : "bg-gray-400"}`}>
      <Container maxWidth="md" height="">
        <Box
          sx={{
            height: "auto",
            p: 2,
            borderRadius: "30px",
            paddingBottom: 8,
            background: darkMode
              ? "oklch(70.7% 0.022 261.325)"
              : "oklch(92.8% 0.006 264.531)",
          }}
          className=" backdrop-blur-xl"
        >
          <div className="mt-1 flex justify-between items-center ">
            <div className="flex items-center">
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/home");
                }}
                sx={{ background: "oklch(44.6% 0.043 257.281)" }}
              >
                <ArrowBackIcon sx={{ marginRight: 1 }} />
                Back
              </Button>

              <h1 className="ml-2 font-bold">{placeDetails?.name}</h1>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleFavorite}
                aria-label="favorite"
                className="p-2 rounded-full bg-transparent
             transition duration-200
             hover:bg-gray-200/20
             hover:scale-105
             active:bg-gray-300/50
             active:scale-95"
              >
                {(() => {
                  if (favorites.includes(id)) {
                    return (
                      <FavoriteIcon
                        className="text-red-600"
                        sx={{ fontSize: 27 }}
                      />
                    );
                  } else {
                    return (
                      <FavoriteBorderIcon
                        className="text-gray-600/80"
                        sx={{ fontSize: 27 }}
                      />
                    );
                  }
                })()}
              </button>
              <Button
                variant="contained"
                onClick={openShowUpdateDialog}
                sx={{ background: "oklch(44.6% 0.043 257.281)" }}
              >
                <EditIcon sx={{ marginRight: 1 }} />
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={openShowDialog}
                sx={{ backgroundcolor: "oklch(58.6% 0.253 17.585)" }}
              >
                <DeleteIcon sx={{ marginRight: 1, color: "white" }} />
                Delete
              </Button>
            </div>
          </div>

          <div className="mt-2">
            <img src={placeDetails?.imageDetails} className="rounded-md" />
            <div className="flex gap-2 mt-1 font-bold">
              <h1>{placeDetails?.category}</h1>
              <h1>{handelRating(placeDetails?.rating)}</h1>
              <h1>{placeDetails?.rating}</h1>
            </div>
          </div>
          <Card
            sx={{ marginTop: "5px", borderRadius: "10px" }}
            className=" !bg-white/20 backdrop-blur-xl"
          >
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                {placeDetails?.name} Details
              </Typography>
              <Typography variant="h7" component="div">
                {placeDetails?.details}
              </Typography>
            </CardContent>
          </Card>
          <div className="mt-2">
            <h1 className="font-bold">Additional Information</h1>
            <h3>
              <AttachMoneyIcon className="text-slate-600" />
              <span className="font-bold">Entry Fee:$</span>
              {placeDetails?.entryFee}
            </h3>
            <h3>
              <HourglassFullIcon className="text-slate-600" />
              <span className="font-bold">Opening Hours:</span>
              {placeDetails?.openingHours}
            </h3>
          </div>
        </Box>
      </Container>
      {/* DELETE DIALOG */}
      <DeleteDialog
        showDeleteDialog={showDeleteDialog}
        handleDeleteDialogClose={handleDeleteDialogClose}
        handleDeleteDialog={handleDeleteDialog}
      />
      {/*=== DELETE DIALOG ===*/}

      {/* UPDATE DIALOG */}
      <UpdateDialog
        showUpdateDialog={showUpdateDialog}
        handleUpdateDialogClose={handleUpdateDialogClose}
        handleUpdateDialog={handleUpdateDialog}
        inputUpdateDialog={inputUpdateDialog}
        setInputUpdateDialog={setInputUpdateDialog}
        placeDetails={placeDetails}
      />
      {/*=== UPDATE DIALOG ===*/}

    </div>
  );
}
