import React from "react";
import { RepositoriesView } from "../views/RepositoriesView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { route } from "../models";

const routes: route[] = [
  {
    path: "repos",
    component: <RepositoriesView />,
  },
];

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} key={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
