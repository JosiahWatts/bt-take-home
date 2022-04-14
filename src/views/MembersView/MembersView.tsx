import React, { useMemo } from "react";
import { GithubApi } from "../../api/GithubApi";
import { MemberCard } from "../../components";
import useAppContext from "../../hooks/useAppContext";
import { useAsync } from "../../hooks/useAsync";
import { Member } from "../../models/member";
import "./members-view.scss";

export function MembersView() {
  const context = useAppContext();
  const { searchRequest } = context;
  const fn = useMemo(
    () => () =>
      GithubApi.getMembers(
        searchRequest.accountName,
        searchRequest.accountType
      ),
    [searchRequest]
  );
  const { value: members, status } = useAsync<Member[]>(fn);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1 className="page-title">Members</h1>
      <ul className="member-card-list">
        {members?.map((member) => (
          <li key={member.id} className="member-card-list-item">
            <MemberCard member={member} />
          </li>
        ))}
      </ul>
    </>
  );
}
