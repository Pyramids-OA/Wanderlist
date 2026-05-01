import { useEffect } from "react";

//MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function UpdateDialog({
  showUpdateDialog,
  handleUpdateDialogClose,
  handleUpdateDialog,
  inputUpdateDialog,
  setInputUpdateDialog,
  placeDetails,
}) {
  useEffect(() => {
    if (showUpdateDialog && placeDetails) {
      setInputUpdateDialog({
        rating: placeDetails?.rating || "",
        entryFee: placeDetails?.entryFee || "",
        openHours: placeDetails?.openingHours || "",
      });
    }
  }, [showUpdateDialog]);

  return (
    <Dialog
      open={showUpdateDialog}
      onClose={handleUpdateDialogClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: {
          sx: { backdropFilter: "blur(5px)" },
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold" }}>Edit Information</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1} alignItems="center">
          <TextField
            type="number"
            label="Rating Site"
            name="rating"
            fullWidth
            value={inputUpdateDialog.rating}
            onChange={(e) =>
              setInputUpdateDialog({
                ...inputUpdateDialog,
                rating: e.target.value,
              })
            }
            inputProps={{ min: 1, max: 5 }}
          />
          <TextField
            label="Entry Fee (USD)"
            name="entryFee"
            fullWidth
            value={inputUpdateDialog.entryFee}
            onChange={(e) =>
              setInputUpdateDialog({
                ...inputUpdateDialog,
                entryFee: e.target.value,
              })
            }
          />
          <TextField
            label="Opening Hours"
            name="openHours"
            fullWidth
            value={inputUpdateDialog.openHours}
            onChange={(e) =>
              setInputUpdateDialog({
                ...inputUpdateDialog,
                openHours: e.target.value,
              })
            }
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
  );
}
