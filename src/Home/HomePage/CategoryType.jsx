import {  useContext } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";

//MUI
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CastleIcon from "@mui/icons-material/Castle";
import ForestIcon from "@mui/icons-material/Forest";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function CategoryType() {

const {categoryType,setCategoryType} = useContext(PlacesContext)

  return (
    <ToggleButtonGroup
      aria-label="text formatting"
      value={categoryType}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <ToggleButton
        onClick={() => {
          setCategoryType("all");
        }}
        value="all"
        aria-label="All"
        sx={{
          padding: 1.5,
          borderRadius: "20px",
          border: "2px solid ",
        }}
      >
        <FormatListBulletedIcon
          sx={{
            fontSize: "2.5rem",
            color: " rgb(203 213 225 / var(--tw-text-opacity, 1))",
          }}
        />
        <p
          style={{
            fontSize: "20px",
            marginLeft: "8px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          All
        </p>
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          setCategoryType("Historical");
        }}
        value="Historical"
        aria-label="Historical"
        sx={{ padding: 1.5, border: "2px solid " }}
      >
        <CastleIcon
          sx={{
            fontSize: "2.5rem",
            color: "rgb(124 45 18 / var(--tw-text-opacity, 1))",
          }}
        />
        <p
          style={{
            fontSize: "20px",
            marginLeft: "8px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Historical
        </p>
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          setCategoryType("Natural");
        }}
        value="Natural"
        aria-label="Natural"
        sx={{ padding: 1.5, border: "2px solid " }}
      >
        <ForestIcon sx={{ fontSize: "2.5rem", color: "green" }} />
        <p
          style={{
            fontSize: "20px",
            marginLeft: "8px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Natural
        </p>
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          setCategoryType("Entertainment");
        }}
        value="Entertainment"
        aria-label="Entertainment"
        sx={{
          padding: 1.5,
          borderRadius: "20px",
          border: "2px solid  ",
        }}
      >
        <ParaglidingIcon
          sx={{
            fontSize: "2.5rem",
            color: "rgb(37 99 235 / var(--tw-text-opacity, 1))",
          }}
        />
        <p
          style={{
            fontSize: "20px",
            marginLeft: "8px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Entertainment
        </p>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
