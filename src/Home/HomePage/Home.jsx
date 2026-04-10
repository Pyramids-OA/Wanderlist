import LocationCard from "./LocationCard";
import CategoryType from "./CategoryType";
import Navbar from "./Navbar";
import { useContext } from "react";
import { PlacesContext } from "../../contexts/PlacesContext";

export default function Home() {
  const { places, categoryType } = useContext(PlacesContext);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-400 h-auto pb-50">
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "linear-gradient(to right, #93c5fd, #60a5fa)",
        }}
      >
        <Navbar />
      </div>

      <CategoryType />

      <div className="grid grid-cols-4 gap-4 ml-8 mt-8">
        {places.map((place) => {
          if (place.category === categoryType) {
            return (
              <LocationCard
                key={place.id}
                id={place.id}
                name={place.name}
                desc={place.description}
                image={place.image}
                rating={place.rating}
                category={place.category}
              />
            );
          } else if (categoryType === "all") {
            return (
              <LocationCard
                key={place.id}
                id={place.id}
                name={place.name}
                desc={place.description}
                image={place.image}
                rating={place.rating}
                category={place.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
