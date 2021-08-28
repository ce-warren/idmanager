import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

import { SITES } from "../../constants/Constants";

export default function Id(props) {
  
  const history = useHistory();
  const data = props.data;

  return (
    <Card>
      <div>
        <div class="id-name">
          {data.name}
        </div>
        <div>
          <span class="fa fa-link"/>
          <span class="fa fa-external-link" onClick={() => history.push(`/id/${data.id}`)}/>
          <span class="fa fa-edit"/>
          <span class="fa fa-trash"/>
        </div>
      </div>
      <div class="id-description-public">
        {data.descriptionPublic}
      </div>
      <div class="id-accounts">
        {data.accounts.map((account) => (
          <div>
            <span class={`fa fa-${SITES[account.type].icon}`}/>
            <a href={account.link} class="account-link" target="_blank">
              {account.name}
            </a>
          </div>
        ))}
      </div>
      <div class="id-description-private">
        {data.descriptionPrivate}
      </div>
    </Card>
  );
}