import React from "react";

import { SITES } from "../../constants/Constants";
import Account from "./Account";

export default function AccountList(props) {
  
  const accounts = props.accounts;

  return (
    <div>
      <div>
        <div>
          Accounts
        </div>
        <div>
          <span class="fa fa-plus"/>
        </div>
      </div>
      <div>
        {Object.keys(accounts).map((accountType) => (
          <div>
            <div>
              {SITES[accountType].displayName}
            </div>
            {accounts[accountType].map((account) => (
              <div>
                <Account data={account}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}