import LocationCard from "./LocationCard";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [places, setPlaces] = useState([]);
  let cancelAxios;

  useEffect(() => {
    axios
      .get("https://69cd38b5ddc3cabb7bd2599a.mockapi.io/api/v1/places/Places", {
        cancelToken: new axios.CancelToken((c) => {
          cancelAxios = c;
        }),
      })
      .then(function (response) {
        setPlaces(response.data);
      })
      .catch(function (error) {
        console.log("Error fetching places:", error);
      });

    return () => {
      if (cancelAxios) cancelAxios();
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-400 h-auto pb-50">
      <Navbar />
      <div className="grid grid-cols-4 gap-4 ml-8 mt-8">
        {places.map((place) => (
          <LocationCard
            key={place.id}
            name={place.name}
            desc={place.description}
            image={place.image}
            rating={place.rating}
            category={place.category}
          />
        ))}
      </div>
    </div>
  );
}
