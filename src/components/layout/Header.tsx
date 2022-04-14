import React from "react";
import "../../styles/header.scss";

export function Header() {
  return (
    <header>
      <h1 className="title">RepoExplorer</h1>
      <button title="Change account" className="change-account-button">
        Change Account
      </button>
    </header>
  );
}
