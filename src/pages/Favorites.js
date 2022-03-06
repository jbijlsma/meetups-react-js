import { useContext } from "react";

import MeetupList from "Components/meetups/MeetupList";
import FavoritesContext from "store/favorites-context";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorites Page</h1>
      <MeetupList meetups={favoritesCtx.favorites} />
    </section>
  );
}

export default Favorites;
