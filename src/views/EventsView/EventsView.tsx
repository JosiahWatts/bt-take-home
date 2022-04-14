import React, { useMemo } from "react";
import { GithubApi } from "../../api/GithubApi";
import { Error, EventCard } from "../../components";
import useAppContext from "../../hooks/useAppContext";
import { useAsync } from "../../hooks/useAsync";
import { Event } from "../../models/event";

export function EventsView() {
  const context = useAppContext();
  const { searchRequest } = context;
  const fn = useMemo(
    () => () =>
      GithubApi.getEvents(searchRequest.accountName, searchRequest.accountType),
    [searchRequest]
  );
  const { value: events, status } = useAsync<Event[]>(fn);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  if (status === "error") {
    return (
      <>
        <h1 className="page-title">Events</h1>
        <Error
          title="Unable to load this account's events"
          description="The account may not have any events or you may not have access to view this
          account's events."
        />
      </>
    );
  }

  return (
    <>
      <h1 className="page-title">Events</h1>
      <ul className="card-list">
        {events?.map((event) => (
          <li key={event.id} className="card-list-item">
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </>
  );
}
