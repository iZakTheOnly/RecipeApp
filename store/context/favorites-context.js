import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => {
      let newFavs = [...currentFavIds, id];
      console.log(newFavs);
      return newFavs;
    });
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => {
      let newFavs = currentFavIds.filter((mealId) => mealId !== id);
      console.log(newFavs);
      return newFavs;
    });
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
