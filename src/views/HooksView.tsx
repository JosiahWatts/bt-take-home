import React, { useMemo } from "react";
import { GithubApi } from "../api/GithubApi";
import { Error } from "../components";
import useAppContext from "../hooks/useAppContext";
import { useAsync } from "../hooks/useAsync";

export function HooksView() {
  const context = useAppContext();
  const { searchRequest } = context;
  const fn = useMemo(
    () => () =>
      GithubApi.getHooks(searchRequest.accountName, searchRequest.accountType),
    [searchRequest]
  );
  const { status } = useAsync<any>(fn);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  if (status === "error") {
    return (
      <>
        <h1 className="page-title">Hooks</h1>
        <Error
          title="Unable to load this account's hooks"
          description="The account may not have any hooks or you may not have access to view this
        account's hooks."
        />
      </>
    );
  }

  return <div>Hooks</div>;
}
