import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlacesContext = createContext();

export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState(() => {
    const saved = localStorage.getItem("places");
    return saved ? JSON.parse(saved) : [];
  });
  const [categoryType, setCategoryType] = useState("all");
  const [displayLocation, setDisplayLocation] = useState("all");
  const [rating, setRating] = useState(0);
  const [categoryFillter, setCategoryFillter] = useState("CategoryFillter");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  const [favorite, setFavorite] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  let cancelAxios;

  useEffect(() => {
    const saved = localStorage.getItem("places");
    if (saved) {
      const parsedPlaces = JSON.parse(saved);
      if (parsedPlaces.length > 0) {
        return;
      }
    }
    axios
      .get("https://69cd38b5ddc3cabb7bd2599a.mockapi.io/api/v1/places/Places", {
        cancelToken: new axios.CancelToken((c) => (cancelAxios = c)),
      })
      .then((res) => setPlaces(res.data))
      .catch((err) => console.log(err));

    return () => {
      if (cancelAxios) cancelAxios();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("places", JSON.stringify(places));
  }, [places]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <PlacesContext.Provider
      value={{
        places,
        setPlaces,
        categoryType,
        setCategoryType,
        darkMode,
        setDarkMode,
        displayLocation,
        setDisplayLocation,
        rating,
        setRating,
        categoryFillter,
        setCategoryFillter,
        favorite,
        setFavorite,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
}
