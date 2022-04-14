import React, { useMemo } from "react";
import { GithubApi } from "../../api/GithubApi";
import { Error, RepositoryCard } from "../../components";
import useAppContext from "../../hooks/useAppContext";
import { useAsync } from "../../hooks/useAsync";
import { Repository } from "../../models/repository";

import "./repositories-view.scss";

export function RepositoriesView() {
  const context = useAppContext();
  const { searchRequest } = context;
  const fn = useMemo(
    () => () =>
      GithubApi.getRepositories(
        searchRequest.accountName,
        searchRequest.accountType
      ),
    [searchRequest]
  );
  const { value: repos, status } = useAsync<Repository[]>(fn);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  if (status === "error") {
    return (
      <>
        <h1 className="page-title">Repositories</h1>
        <Error
          title="Unable to load this account's repositories"
          description="The account may not have any repositories or you may not have access to view this
          account's repositories."
        />
      </>
    );
  }

  return (
    <>
      <h1 className="page-title">Repositories</h1>
      <ul className="card-list">
        {repos?.map((repo) => (
          <li key={repo.id} className="card-list-item">
            <RepositoryCard repository={repo} />
          </li>
        ))}
      </ul>
    </>
  );
}
