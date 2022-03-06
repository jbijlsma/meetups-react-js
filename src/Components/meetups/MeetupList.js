import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  const meetupElements = props.meetups.map((meetup) => (
    <MeetupItem key={meetup.id} meetup={meetup} />
  ));

  return <ul className={classes.list}>{meetupElements}</ul>;
}

export default MeetupList;
