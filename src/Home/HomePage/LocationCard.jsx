import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function LocationCard({ image, name, category, rating, desc }) {
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
    <Card sx={{ maxWidth: 345, maxHeight: 1000, background: "skyblue" }}>
      <CardActionArea
        onClick={() => {
          console.log("hi");
        }}
      >
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{}}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            sx={{ fontSize: "13px" }}
          >
            {category}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {handelRating(rating)}
          </Typography>
          <Typography
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
      </CardActionArea>
    </Card>
  );
}
