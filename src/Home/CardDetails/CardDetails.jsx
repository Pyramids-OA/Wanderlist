import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//MUI
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
  const navigate = useNavigate();
  const { id } = useParams();
  const [placeDetails, setPlacesDetails] = useState({});

  let cancelAxios;

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

  useEffect(() => {
    axios
      .get(`https://69cd38b5ddc3cabb7bd2599a.mockapi.io/api/v1/places/Places`, {
        cancelToken: new axios.CancelToken((c) => {
          cancelAxios = c;
        }),
      })
      .then(function (response) {
        const place = response.data.find((p) => p.id === Number(id));
        setPlacesDetails(place);
      })
      .catch(function (error) {
        if (axios.isCancel(error)) return;
        console.log("Error fetching places:", error);
      });

    return () => {
      if (cancelAxios) cancelAxios();
    };
  }, [id]);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 ">
      <Container maxWidth="md" height="">
        <Box
          sx={{
            height: "auto",
            p: 2,
            borderRadius: "30px",
            paddingBottom: 10,
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
              <span className="font-bold">Entry Fee:</span>
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
    </div>
  );
}
