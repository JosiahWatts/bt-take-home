import React, { useEffect } from "react";
import { Organization as OrganizationType } from "../../models/organization";
import { GithubApi } from "../../api/GithubApi";

export function Organization() {
  const [info, setInfo] = React.useState<OrganizationType>();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    GithubApi.getOrganization("BoomtownROI")
      .then((org) => {
        setInfo(org);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return loading || !info ? (
    <p>loading..</p>
  ) : (
    <div>
      <h1>{info.name}</h1>
    </div>
  );
}
