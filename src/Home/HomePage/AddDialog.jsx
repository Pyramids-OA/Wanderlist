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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

function ImageUploadField({ label, field, inputId, fileName, onFileChange }) {
  return (
    <FormControl fullWidth required variant="outlined">
      <OutlinedInput
        readOnly
        value={fileName || ""}
        placeholder={label}
        onClick={() => document.getElementById(inputId)?.click()}
        sx={{ cursor: "pointer" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={() => document.getElementById(inputId)?.click()}
            >
              <CloudUploadIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <input
        id={inputId}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => onFileChange(e, field)}
      />
    </FormControl>
  );
}

export default function AddDialog({
  showAddDialog,
  handleAddDialogClose,
  inputAddDialog,
  setInputAddDialog,
  handelAddDialog,
}) {
  const [fileNames, setFileNames] = useState({});

  function handleImageFileChange(e, field) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileNames((prev) => ({ ...prev, [field]: file.name }));
    const reader = new FileReader();
    reader.onload = () => {
      setInputAddDialog({
        ...inputAddDialog,
        [field]: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

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
            <ImageUploadField
              label="Image"
              field="image"
              inputId="image-upload-input"
              fileName={fileNames.image}
              onFileChange={handleImageFileChange}
            />
            <ImageUploadField
              label="Image Details"
              field="imageDetails"
              inputId="imageDetails-upload-input"
              fileName={fileNames.imageDetails}
              onFileChange={handleImageFileChange}
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
