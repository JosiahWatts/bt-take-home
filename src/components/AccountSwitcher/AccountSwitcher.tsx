import React, { useState } from "react";
import { AccountType } from "../../models/enums";
import { Organization } from "../../models/organization";
import { Modal } from "../Modal";
import "./account-switcher.scss";

export interface AccountSwitcherProps {
  account: Organization | null;
  isLoading: boolean;
  onClose: () => void;
  onChangeAccount: (accountName: string, accountType: AccountType) => void;
}

export function AccountSwitcher(props: AccountSwitcherProps) {
  const { account, onChangeAccount, isLoading, onClose } = props;
  const [accountType, setAccountType] = useState<AccountType>(
    account?.type ?? AccountType.ORG
  );
  const [accountName, setAccountName] = useState<string>(account?.name ?? "");

  const handleSave = (e: any) => {
    e.preventDefault();
    onChangeAccount(accountName, accountType);
  };

  return (
    <Modal isOpen={true} onClose={onClose} title="Change Account">
      <form className="switcher-form">
        <div className="form-control">
          <label htmlFor="">Account Name</label>
          <input
            type="text"
            name="account-name"
            id="account-name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Choose Account Type</label>

          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="account-type"
                id={AccountType.ORG}
                value={AccountType.ORG}
                checked={accountType === AccountType.ORG}
                onChange={(e) => setAccountType(e.target.value as AccountType)}
              />
              <label htmlFor="account-type">Organization</label>
            </div>

            <div>
              <input
                type="radio"
                name="account-type"
                id={AccountType.USER}
                value={AccountType.USER}
                checked={accountType === AccountType.USER}
                onChange={(e) => setAccountType(e.target.value as AccountType)}
              />
              <label htmlFor="account-type">User</label>
            </div>
          </div>
        </div>

        <button
          disabled={isLoading}
          className="btn"
          type="submit"
          onClick={(e) => handleSave(e)}
        >
          Save
        </button>
      </form>
    </Modal>
  );
}
