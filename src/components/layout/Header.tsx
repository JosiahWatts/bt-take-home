import React, { useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import { AccountType } from "../../models/enums";
import { Organization } from "../../models/organization";
import "../../styles/header.scss";
import { AccountSwitcher } from "../AccountSwitcher/AccountSwitcher";

export interface HeaderProps {
  account: Organization | null;
  accountSwitcherOpen: boolean;
}

export function Header({ account, accountSwitcherOpen }: HeaderProps) {
  const context = useAppContext();
  const { setSearchRequest } = context;

  const [isAccountSwitcherOpen, setAccountSwitcherOpen] =
    useState<boolean>(accountSwitcherOpen);

  const handleAccountChange = (
    accountName: string,
    accountType: AccountType
  ) => {
    setSearchRequest({
      accountName,
      accountType,
    });

    setAccountSwitcherOpen(false);
  };

  return (
    <header className="header">
      <h1 className="title">GitExplorer</h1>

      <button
        onClick={() => {
          setAccountSwitcherOpen(true);
        }}
        title="Change account"
        className="change-account-button"
      >
        Change Account
      </button>

      {isAccountSwitcherOpen && (
        <AccountSwitcher
          account={account}
          onClose={() => setAccountSwitcherOpen(false)}
          onChangeAccount={handleAccountChange}
          isLoading={false}
        />
      )}
    </header>
  );
}
