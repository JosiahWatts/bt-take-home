import React, { useMemo, useState } from "react";
import { GithubApi } from "./api/GithubApi";
import { Account } from "./components";
import { Footer, Header, Navigation } from "./components/Layout";
import { useAsync } from "./hooks/useAsync";
import { AppContext } from "./lib/app-context";
import { AccountType } from "./models/enums";
import { Organization } from "./models/organization";
import { SearchRequest } from "./models/search-request";
import AppRoutes from "./routes";
import "./styles/app.scss";

const initialSearchRequest: SearchRequest = {
  accountName: "BoomTownROI",
  accountType: AccountType.ORG,
};

function App() {
  const [searchRequest, setSearchRequest] =
    useState<SearchRequest>(initialSearchRequest);
  const fn = useMemo(
    () => () =>
      GithubApi.getOrganization(
        searchRequest.accountName,
        searchRequest.accountType
      ),
    [searchRequest]
  );
  const { value: account, status } = useAsync<Organization>(fn);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider
      value={{
        searchRequest,
        setSearchRequest: (request) => setSearchRequest(request),
      }}
    >
      <div className="app-container">
        <div className="sticky-container">
          <Header
            account={account}
            accountSwitcherOpen={status === "error" && !account}
          />
          {account && <Account account={account} />}
          <Navigation />
        </div>
        <main className="main-container">
          <AppRoutes />
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
