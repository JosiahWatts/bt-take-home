import React, { useMemo } from "react";
import { GithubApi } from "../api/GithubApi";
import { useAsync } from "../hooks/useAsync";
import { Event } from "../models/event";

export function EventsView() {
  const fn = useMemo(() => () => GithubApi.getEvents("BoomTownROI"), []);
  const { value: events, status } = useAsync<Event[]>(fn);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1>{events?.length}</h1>
    </div>
  );
}
