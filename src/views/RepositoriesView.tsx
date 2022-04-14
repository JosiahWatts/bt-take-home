import React, { useMemo } from "react";
import { GithubApi } from "../api/GithubApi";
import { RepositoryCard } from "../components";
import { useAsync } from "../hooks/useAsync";
import { Repository } from "../models/repository";

export function RepositoriesView() {
  const fn = useMemo(() => () => GithubApi.getRepositories("BoomTownROI"), []);
  const { value: repos, status } = useAsync<Repository[]>(fn);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  return (
    <>
      {repos?.map((repo) => (
        <RepositoryCard repository={repo} key={repo.id} />
      ))}
    </>
  );
}
