import { useContext } from "react";
import FavoritesContext from "store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const meetup = props.meetup;
  const isFavorite = favoritesCtx.isFavorite(meetup.id);

  const toggleFavoriteStatus = () => {
    if (isFavorite) {
      favoritesCtx.removeFavorite(meetup.id);
    } else {
      favoritesCtx.addFavorite({ ...meetup });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
          <div className={classes.actions}>
            <button onClick={toggleFavoriteStatus}>
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
