import React from "react";
import { Card } from "react-bootstrap";

import { SITES } from "../../constants/Constants";

export default function Id(props) {
  
  const data = props.data;

  return (
    <Card>
      <div>
        <div class="id-name">
          {data.name}
        </div>
      </div>
      <div class="id-description-public">
        {data.descriptionPublic}
      </div>
      <div class="id-accounts">
        {data.accounts.map((account) => (
          <div>
            <span class={`fa fa-${SITES[account.type].icon}`}/>
            {account.name}
          </div>
        ))}
      </div>
      <div class="id-description-private">
        {data.descriptionPrivate}
      </div>
    </Card>
  );
}