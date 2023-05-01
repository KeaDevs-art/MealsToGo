/* eslint-disable prettier/prettier */
import React, { createContext, useState } from "react";

export const FavouritesContext = createContext({});

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (restuarant) => {
    setFavourites([...favourites, restuarant]);
  };

  const removeFromFavourites = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
