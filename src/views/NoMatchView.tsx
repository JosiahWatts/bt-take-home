import React from "react";
import { Link } from "react-router-dom";

export function NoMatchView() {
  return (
    <div className="container-center">
      <h3>Page not Found</h3>
      <p>The page you requested cannot be found</p>
      <Link to={"/repos"}>Go to Repositories</Link>
    </div>
  );
}
