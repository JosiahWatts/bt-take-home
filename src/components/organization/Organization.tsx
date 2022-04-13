import React from "react";
import { Organization as OrganizationType } from "../../models/organization";

export interface OrganizationProps {
  organization?: OrganizationType;
}

export function Organization(props: OrganizationProps) {
  const { organization } = props;

  if (!organization) {
    return <p>loading...</p>;
  }

  return (
    <div className="org-info">
      <div className="org-info">
        <span className="org-info__id">{organization.id}</span>

        <h2>{organization.name}</h2>

        <a
          className="org-info__link"
          href={organization.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {organization.htmlUrl}
        </a>

        <div className="org-info__metadata">
          <span className="org-info__metadata-verified">
            {organization.isVerified ? "Verified" : "Not Verified"}
          </span>

          <span className="org-info__metadata-item">
            Date Created: {organization.createdAt.toLocaleDateString()}
          </span>

          <span className="org-info__metadata-item">
            Last Updated: {organization.updatedAt.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
