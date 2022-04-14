import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import "../../styles/navigation.scss";

export function Navigation() {
  return (
    <nav>
      <ul className="navlist">
        {routes.map((route) => (
          <li className="navlist-item" key={route.path}>
            <NavLink className="navlist-link" to={route.path}>
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
