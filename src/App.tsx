import React, { useEffect } from "react";
import { GithubApi } from "./api/GithubApi";
import { Navigation, Organization as OrganizationInfo } from "./components";
import { Footer, Header } from "./components/layout";
import { Organization } from "./models/organization";
import AppRoutes from "./routes";

function App() {
  const [info, setInfo] = React.useState<Organization>();
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

  return (
    <div>
      <Header />
      <main>
        <OrganizationInfo organization={info} />
        <Navigation />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
