import React, { useEffect, useMemo } from "react";
import { GithubApi } from "./api/GithubApi";
import { Navigation, Organization as OrganizationInfo } from "./components";
import { Footer, Header } from "./components/layout";
import { useAsync } from "./hooks/useAsync";
import { Organization } from "./models/organization";
import AppRoutes from "./routes";

function App() {
  const fn = useMemo(() => () => GithubApi.getOrganization("BoomTownROI"), []);
  const { value: organization } = useAsync<Organization>(fn);

  return (
    <div>
      <Header />
      <main>
        {organization && <OrganizationInfo organization={organization} />}
        <Navigation />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
