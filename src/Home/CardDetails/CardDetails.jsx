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

export default function CardDetails() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500">
      <Container maxWidth="md">
        <Box
          sx={{
            height: "100vh",
            p: 2,
            borderRadius: "30px",
          }}
          className=" bg-white/20 backdrop-blur-xl"
        >
          <div className="mt-1 flex justify-between items-center ">
            <div className="flex items-center">
              <Button variant="contained">
                <ArrowBackIcon sx={{ marginRight: 1 }} />
                Back
              </Button>
              <h1 className="ml-2 font-bold">Card Details</h1>
            </div>

            <div className="flex gap-2">
              <Button variant="contained">
                <EditIcon sx={{ marginRight: 1 }} />
                Edit
              </Button>

              <Button variant="contained" color="error">
                <DeleteIcon sx={{ marginRight: 1 }} />
                Delete
              </Button>
            </div>
          </div>

          <div className="mt-2">
            <img src="/paris.jpeg" className="rounded-md" />
            <div className="flex gap-2 mt-1 font-bold">
              <h1>Historical</h1>
              <h1>⭐⭐⭐⭐⭐</h1>
              <h1>4.8</h1>
            </div>
          </div>
          <Card
            sx={{ marginTop: "5px", borderRadius: "10px" }}
            className=" !bg-white/20 backdrop-blur-xl"
          >
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                Eiffel Tower Details
              </Typography>
              <Typography variant="h7" component="div">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                molestias corporis similique vel praesentium! Aspernatur omnis
                beatae sapiente molestias quasi a temporibus vel reprehenderit
                sunt? Quos tempora in quibusdam accusamus!
              </Typography>
            </CardContent>
          </Card>
          <div className="mt-2">
            <h1 className="font-bold">Additional Information</h1>
            <h3>
              <AttachMoneyIcon className="text-blue-500" />
              <span className="font-bold">Entry Fee:</span> $25 for adults,
              discounts availabl for children and seniors
            </h3>
            <h3>
              <HourglassFullIcon className="text-blue-500" />
              <span className="font-bold">Opening Hours:</span> Open daily form
              9:00 AM to 11:45 PM
            </h3>
          </div>
        </Box>
      </Container>
    </div>
  );
}
