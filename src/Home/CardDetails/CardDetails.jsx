import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
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
import { AltRouteRounded } from "@mui/icons-material";

export default function CardDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [favorite, setFavorite] = useState(false);
  const { places, setPlaces, darkMode } = useContext(PlacesContext);
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
    setFavorite(!favorite);
  }
  return (
    <div
      className={`h-auto pb-50 ${
        darkMode
          ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
          : "bg-gradient-to-r from-blue-300 to-blue-400"
      }`}
    >
      <Container maxWidth="md" height="">
        <Box
          sx={{
            height: "auto",
            p: 2,
            borderRadius: "30px",
            paddingBottom: 8,
          }}
          className=" bg-white/20 backdrop-blur-xl"
        >
          <div className="mt-1 flex justify-between items-center ">
            <div className="flex items-center">
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/home");
                }}
              >
                <ArrowBackIcon sx={{ marginRight: 1 }} />
                Back
              </Button>
              
              <h1 className="ml-2 font-bold">{placeDetails?.name}</h1>
            </div>

            <div className="flex gap-2">
              <div>
                <IconButton aria-label="Favorite " value={favorite} onClick={handleFavorite} >
                  {favorite ? (
                    <FavoriteIcon className="text-red-600" />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </div>
              <Button variant="contained" onClick={openShowUpdateDialog}>
                <EditIcon sx={{ marginRight: 1 }} />
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={openShowDialog}
              >
                <DeleteIcon sx={{ marginRight: 1 }} />
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
              <AttachMoneyIcon className="text-blue-500" />
              <span className="font-bold">Entry Fee:$</span>
              {placeDetails?.entryFee}
            </h3>
            <h3>
              <HourglassFullIcon className="text-blue-500" />
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
