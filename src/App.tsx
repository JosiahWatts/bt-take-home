import React, { useMemo } from "react";
import { GithubApi } from "./api/GithubApi";
import { Navigation, Account } from "./components";
import { Footer, Header } from "./components/layout";
import { useAsync } from "./hooks/useAsync";
import { Organization } from "./models/organization";
import AppRoutes from "./routes";
import "./styles/app.scss";

function App() {
  const fn = useMemo(() => () => GithubApi.getOrganization("BoomTownROI"), []);
  const { value: account } = useAsync<Organization>(fn);

  return (
    <div className="app-container">
      <div className="sticky-container">
        <Header />
        {account && <Account account={account} />}
        <Navigation />
      </div>
      <main className="main-container">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
