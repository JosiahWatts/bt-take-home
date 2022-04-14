import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { route } from "../models";
import { EventsView } from "../views/EventsView/EventsView";
import { HooksView } from "../views/HooksView";
import { IssuesView } from "../views/IssuesView";
import { MembersView } from "../views/MembersView/MembersView";
import { NoMatchView } from "../views/NoMatchView";
import { RepositoriesView } from "../views/RepositoriesView/RepositoriesView";

export const routes: route[] = [
  {
    label: "Repositories",
    path: "repos",
    component: <RepositoriesView />,
  },
  {
    label: "Events",
    path: "events",
    component: <EventsView />,
  },
  {
    label: "Hooks",
    path: "hooks",
    component: <HooksView />,
  },
  {
    label: "Issues",
    path: "issues",
    component: <IssuesView />,
  },
  {
    label: "Members",
    path: "members",
    component: <MembersView />,
  },
];

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/repos" />} />
      {routes.map((route) => (
        <Route path={route.path} key={route.path} element={route.component} />
      ))}
      <Route path="*" element={<NoMatchView />} />
    </Routes>
  );
}

export default AppRoutes;
