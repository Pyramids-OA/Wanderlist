import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function LocationCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="src\WhatsApp Image 2026-03-29 at 3.01.29 PM.jpeg"
          alt="green iguana"
        />
        <CardContent sx={{background:'skyblue'}}>
          <Typography gutterBottom variant="h5" component="div">
            هرم حي نزال
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ⭐⭐⭐⭐⭐
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            اسمُه لحاله بعمل سكات. مش كثير حكي، بس إذا حكى الكل بسمع. بحي نزال
            ما حدا بتجاوز حدوده، لأنه الكل عارف مين هو. نظرة منه بتفهمك كل شي
            بدون كلمة. ما بدو مشاكل… بس إذا إجته، هو آخر واحد بتتمناه قدامك.
            هيبته مش من فراغ… من مواقف.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
