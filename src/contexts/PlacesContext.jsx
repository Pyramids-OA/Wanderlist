import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlacesContext = createContext();

export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState([]);
  const [categoryType, setCategoryType] = useState("all");
  let cancelAxios;

  useEffect(() => {
   
    axios.get("https://69cd38b5ddc3cabb7bd2599a.mockapi.io/api/v1/places/Places", {
      cancelToken: new axios.CancelToken(c => (cancelAxios = c)),
    })
      .then(res => setPlaces(res.data))
      .catch(err => console.log(err));

    return () => {
      if (cancelAxios) cancelAxios();
    };
  }, []);

  return (
    <PlacesContext.Provider value={{ places, setPlaces, categoryType, setCategoryType }}>
      {children}
    </PlacesContext.Provider>
  );
}