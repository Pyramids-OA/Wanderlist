import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function AddDialog({
  showAddDialog,
  handleAddDialogClose,
  inputAddDialog,
  setInputAddDialog,
  handelAddDialog
}) {
  return (
    <>
      <Dialog
        style={{ direction: "ltr" }}
        open={showAddDialog}
        onClose={handleAddDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        slotProps={{
          backdrop: {
            sx: { backdropFilter: "blur(5px)" },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Add New Lociton Form</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1} alignItems="left">
            <div className="grid grid-cols-2 gap-3">
              <TextField
                label="Name"
                value={inputAddDialog.name}
                onChange={(e) =>
                  setInputAddDialog({
                    ...inputAddDialog,
                    name: e.target.value,
                  })
                }
              />
              <TextField
                label="Rating"
                value={inputAddDialog.rating}
                onChange={(e) =>
                  setInputAddDialog({
                    ...inputAddDialog,
                    rating: e.target.value,
                  })
                }
              />
              <TextField
                label="Category"
                value={inputAddDialog.category}
                onChange={(e) =>
                  setInputAddDialog({
                    ...inputAddDialog,
                    category: e.target.value,
                  })
                }
              />
              <TextField
                label="Opening Hours"
                value={inputAddDialog.openingHours}
                onChange={(e) =>
                  setInputAddDialog({
                    ...inputAddDialog,
                    openingHours: e.target.value,
                  })
                }
              />
            </div>
            <TextField
              label="Entry Fee"
              value={inputAddDialog.entryFee}
              onChange={(e) =>
                setInputAddDialog({
                  ...inputAddDialog,
                  entryFee: e.target.value,
                })
              }
            />
            <TextField
              multiline
              maxRows={4}
              label="Description"
              value={inputAddDialog.description}
              onChange={(e) =>
                setInputAddDialog({
                  ...inputAddDialog,
                  description: e.target.value,
                })
              }
            />
            <TextField
              multiline
              maxRows={4}
              label="Details"
              value={inputAddDialog.details}
              onChange={(e) =>
                setInputAddDialog({
                  ...inputAddDialog,
                  details: e.target.value,
                })
              }
            />
            <TextField
              label="Image Link"
              value={inputAddDialog.image}
              onChange={(e) =>
                setInputAddDialog({
                  ...inputAddDialog,
                  image: e.target.value,
                })
              }
            />
            <TextField
              label="Image Details Link"
              value={inputAddDialog.imageDetails}
              onChange={(e) =>
                setInputAddDialog({
                  ...inputAddDialog,
                  imageDetails: e.target.value,
                })
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ marginRight: 1 }}
            variant="contained"
            color="error"
            onClick={handleAddDialogClose}
          >
            Close
          </Button>
          <Button variant="contained" onClick={handelAddDialog}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
