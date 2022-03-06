import { useState, useEffect } from "react";
import MeetupList from "../Components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-course-a9c24-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
      );
      const json = await response.json();

      const fetchedMeetups = Object.keys(json).map((key) => {
        return {
          id: key,
          ...json[key],
        };
      });

      setIsLoading(false);
      setMeetups(fetchedMeetups);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <div>
        <h1>All Meetups Page</h1>
        <MeetupList meetups={meetups} />
      </div>
    );
  }
};

export default AllMeetups;
