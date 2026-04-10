import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function DeleteDialog({
  showDeleteDialog,
  handleDeleteDialogClose,
  handleDeleteDialog,
}) {
  return (
    <>
      <Dialog
        style={{ direction: "ltr" }}
        open={showDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        slotProps={{
          backdrop: {
            sx: { backdropFilter: "blur(5px)" },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this Location card?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot undo a deletion once it has been completed
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Close</Button>
          <Button color="error" onClick={handleDeleteDialog}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
