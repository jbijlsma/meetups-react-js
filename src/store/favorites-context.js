import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {
    return false;
  },
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setFavorites((prev) => prev.concat(meetup));
  };

  const removeFavoriteHandler = (meetupId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== meetupId));
  };

  const isFavoriteHandler = (meetupId) => {
    return favorites.some((item) => item.id === meetupId);
  };

  const context = {
    favorites: favorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
