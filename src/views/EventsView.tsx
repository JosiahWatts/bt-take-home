import React, { useEffect } from "react";
import { GithubApi } from "../api/GithubApi";
import { Event } from "../models/event";

export function EventsView() {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    GithubApi.getEvents("BoomTownROI")
      .then((events) => {
        console.log(events);

        setEvents(events);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>EventsView</h1>
    </div>
  );
}
