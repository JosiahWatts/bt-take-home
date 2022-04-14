import React from "react";
import { Organization as OrganizationType } from "../models/organization";
import "../styles/account.scss";

export interface AccountProps {
  account?: OrganizationType;
}

export function Account(props: AccountProps) {
  const { account } = props;

  if (!account) {
    return <p>loading...</p>;
  }

  return (
    <div className="org-container">
      {account.avatarUrl && (
        <img
          className="org-image"
          height="135"
          width="135"
          src={account.avatarUrl}
          alt={`${account.name} logo`}
        />
      )}
      <div className="org-info-container">
        <span className="id">#{account.id}</span>
        <h2 className="name">{account.name}</h2>
        <a
          className="url"
          href={account.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {account.htmlUrl}
        </a>
        <div className="org-metadata-container">
          <span
            className={`is-verified ${
              account.isVerified ? "verified" : "not-verified"
            }`}
          >
            {account.isVerified ? "Verified" : "Not Verified"}
          </span>
          <span className="metadata">
            <b>Date Created:</b> {account.createdAt.toLocaleDateString()}
          </span>
          <span className="metadata">
            <b>Last Updated:</b> {account.updatedAt.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
