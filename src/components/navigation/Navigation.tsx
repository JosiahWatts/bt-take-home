import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export function Navigation() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
