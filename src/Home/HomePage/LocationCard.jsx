import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";

export default function LocationCard({
  image,
  name,
  category,
  rating,
  desc,
  id,
}) {
  const navigate = useNavigate();
  const { darkMode } = useContext(PlacesContext);

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

  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 1000,
        background: darkMode
          ? "oklch(37.3% 0.034 259.733)"
          : "oklch(96.7% 0.003 264.542)",
        transition: "scale 0.3s",
        "&:hover": {
          scale: 1.05,
        },
      }}
    >
      <CardActionArea
        onClick={() => {
          navigate(`/home/details/${id}`);
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent sx={{}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: darkMode ? "oklch(92.8% 0.006 264.531)" : "" }}
        >
          {name}
        </Typography>
        <Typography
        style={{ color: darkMode ? "oklch(92.8% 0.006 264.531)" : "" }}
          gutterBottom
          variant="h7"
          component="div"
          sx={{ fontSize: "13px" }}
        >
          {category}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ color: darkMode ? "oklch(92.8% 0.006 264.531)" : "" }}
        >
          {handelRating(rating)}
        </Typography>
        <Typography
          style={{ color: darkMode ? "oklch(92.8% 0.006 264.531)" : "" }}
          variant="body2"
          sx={{
            color: "text.secondary",
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
