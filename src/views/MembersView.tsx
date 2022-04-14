import React, { useMemo } from "react";
import { GithubApi } from "../api/GithubApi";
import { useAsync } from "../hooks/useAsync";
import { Member } from "../models/member";

export function MembersView() {
  const fn = useMemo(() => () => GithubApi.getMembers("BoomTownROI"), []);
  const { value: members, status } = useAsync<Member[]>(fn);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  return <div>{members?.length}</div>;
}
