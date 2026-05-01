import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function AddDialog({
  showAddDialog,
  handleAddDialogClose,
  inputAddDialog,
  setInputAddDialog,
  handelAddDialog,
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
            sx: { backdropFilter: "b  lur(5px)" },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Add New Lociton Form</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1} alignItems="left">
            <div className="grid grid-cols-2 gap-3">
              <TextField
                required
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
                required
                type="number"
                label="Rating"
                value={inputAddDialog.rating}
                onChange={(e) =>
                  setInputAddDialog({
                    ...inputAddDialog,
                    rating: e.target.value,
                  })
                }
                inputProps={{ min: 1, max: 5 }}
              />

              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>

                <Select
                  required
                  labelId="category-label"
                  id="category-select"
                  value={inputAddDialog.category}
                  label="Category"
                  onChange={(e) => {
                    setInputAddDialog({
                      ...inputAddDialog,
                      category: e.target.value,
                    });
                  }}
                >
                  <MenuItem value="Historical">Historical</MenuItem>
                  <MenuItem value="Natural">Natural</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                </Select>
              </FormControl>

              <TextField
                required
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
              required
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
              required
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
              required
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
              required
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
              required
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
          <Button variant="contained" onClick={handelAddDialog}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
