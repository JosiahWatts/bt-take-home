import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/repos"}>Repositories</Link>
        </li>
      </ul>
    </nav>
  );
}
