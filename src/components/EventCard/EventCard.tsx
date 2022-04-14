import React from "react";
import { Event } from "../../models/event";
import "./event-card.scss";

export interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="card">
      <header className="card-header">
        <span className="event-type">{event.type}</span>
        <span className="event-id">Event #{event.id}</span>
      </header>
      <div className="card-body">
        <h2 className="event-title">{event.repo.name}</h2>
        <a
          className="event-url"
          href={event.repo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {event.repo.url}
        </a>
      </div>
      <footer className="card-footer">
        <div className="event-metadata-container">
          <span className="event-metadata">
            <b>Created:</b> {event.createdAt.toLocaleDateString()}
          </span>
        </div>
      </footer>
    </article>
  );
}
