import React from "react";
import { Repository } from "../../models/repository";

export interface RepositoryCardProps {
  repository?: Repository;
}

export function RepositoryCard(props: RepositoryCardProps) {
  const { repository } = props;

  if (!repository) return null;

  return (
    <article className="card">
      <header className="card__header card__header--repository">
        <span>{repository.language}</span>
        <span>{repository.id}</span>
      </header>
      <div className="card__body card__body--repository">
        <h2 className="card__title card_title--repository">
          {repository.name}
        </h2>
        <p className="card__description">{repository.description}</p>
      </div>
      <footer className="card__footer card__footer--repository">
        <span>Created: {repository.createdAt.toLocaleDateString()}</span>
        <span>Last Updated: {repository.updatedAt.toLocaleDateString()}</span>
        <span>Last Pushed: {repository.pushedAt.toLocaleDateString()}</span>
      </footer>
    </article>
  );
}
