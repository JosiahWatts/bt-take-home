import React from "react";
import { Route, Routes } from "react-router-dom";
import { route } from "../models";
import { RepositoriesView } from "../views/RepositoriesView";

const routes: route[] = [
  {
    path: "repos",
    component: <RepositoriesView />,
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
