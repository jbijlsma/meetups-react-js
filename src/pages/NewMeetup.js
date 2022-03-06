import { useHistory } from "react-router-dom";

import NewMeetupForm from "../Components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();

  const addMeetupHandler = async (meetupData) => {
    await fetch(
      "https://react-course-a9c24-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    history.replace("/");
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
