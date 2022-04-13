import React, { useEffect } from "react";
import { GithubApi } from "../api/GithubApi";
import { RepositoryCard } from "../components";
import { Repository } from "../models/repository";

export function RepositoriesView() {
  const [repos, setRepos] = React.useState<Repository[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    GithubApi.getRepositories("BoomtownROI")
      .then((repos) => {
        setRepos(repos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <>
      {repos.map((repo) => (
        <RepositoryCard repository={repo} key={repo.id} />
      ))}
    </>
  );
}
