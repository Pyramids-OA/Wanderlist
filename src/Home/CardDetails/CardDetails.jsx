import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";

import { PlacesContext } from "../../contexts/PlacesContext";

//MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
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
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function CardDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [inputUpdateDialog, setInputUpdateDialog] = useState({
    rating: "",
    entryFee: "",
    openHours: "",
  });
  const { places, setPlaces } = useContext(PlacesContext);

  const placeDetails = places.find((p) => Number(p.id) === Number(id)) || {};

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

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 ">
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
      <Dialog
        style={{ direction: "ltr" }}
        open={showDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete the site?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot undo a deletion once it has benn completed
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Close</Button>
          <Button color="error" onClick={handleDeleteDialog}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/*=== DELETE DIALOG ===*/}

      {/* UPDATE DIALOG */}
      <Dialog
        open={showUpdateDialog}
        onClose={handleUpdateDialogClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>Edit Information</DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={1} alignItems="center">
            <TextField
              label="Rating Site "
              name="rating"
              fullWidth
              value={inputUpdateDialog.rating}
              onChange={(e) => {
                setInputUpdateDialog({
                  ...inputUpdateDialog,
                  rating: e.target.value,
                });
              }}
            />

            <TextField
              label="Entry Fee (USD)"
              name="entryFee"
              type="number"
              fullWidth
              value={inputUpdateDialog.entryFee}
              onChange={(e) => {
                setInputUpdateDialog({
                  ...inputUpdateDialog,
                  entryFee: e.target.value,
                });
              }}
            />

            <TextField
              label="Opening Hours"
              name="openHours"
              fullWidth
              value={inputUpdateDialog.openHours}
              onChange={(e) => {
                setInputUpdateDialog({
                  ...inputUpdateDialog,
                  openHours: e.target.value,
                });
              }}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleUpdateDialogClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleUpdateDialog}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      {/*=== UPDATE DIALOG ===*/}
    </div>
  );
}
