import React from "react";
import { Repository } from "../../models/repository";
import "./repository-card.scss";

export interface RepositoryCardProps {
  repository?: Repository;
}

export function RepositoryCard(props: RepositoryCardProps) {
  const { repository } = props;

  if (!repository) return null;

  return (
    <article className="card">
      <header className="card-header">
        {repository.language && (
          <span className="repo-language">{repository.language}</span>
        )}
        <span className="repo-id">#{repository.id}</span>
      </header>
      <div className="card-body">
        <h2 className="repo-title">
          <a
            href={repository.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repository.name}
          </a>
        </h2>
        <p className="repo-description">{repository.description}</p>
      </div>
      <footer className="card-footer">
        <div className="repo-metadata-container">
          <span className="repo-metadata">
            <b>Created:</b> {repository.createdAt.toLocaleDateString()}
          </span>
          <span className="repo-metadata">
            <b>Last Updated:</b> {repository.updatedAt.toLocaleDateString()}
          </span>
          <span className="repo-metadata">
            <b>Last Pushed:</b> {repository.pushedAt.toLocaleDateString()}
          </span>
        </div>
      </footer>
    </article>
  );
}
