import React from "react";
import { Route, Routes } from "react-router-dom";
import { route } from "../models";
import { EventsView } from "../views/EventsView";
import { MembersView } from "../views/MembersView";
import { RepositoriesView } from "../views/RepositoriesView";

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
    label: "Members",
    path: "members",
    component: <MembersView />,
  },
];

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} key={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
