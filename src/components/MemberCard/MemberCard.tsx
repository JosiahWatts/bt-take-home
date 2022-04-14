import React from "react";
import { Member } from "../../models/member";
import "./member-card.scss";

export interface MemberCardProps {
  member: Member;
}

export function MemberCard(props: MemberCardProps) {
  const { member } = props;

  if (!member) return null;

  return (
    <article className="card">
      <header className="card-header">
        {member.siteAdmin ? (
          <span className="member-is-admin">
            {member.siteAdmin ? "Admin" : ""}
          </span>
        ) : null}
        <span className="member-id">#{member.id}</span>
      </header>
      <div className="card-body">
        <div className="member-info-container">
          <img
            className="member-avatar"
            src={member.avatarUrl}
            alt={member.login}
          />
          <div>
            <h2 className="member-name">
              {member.login} ({member.type})
            </h2>
            <a
              href={member.htmlUrl}
              className="member-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {member.htmlUrl}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
