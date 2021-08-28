import React, { useState } from "react";

import { SITES } from "../../constants/Constants";

export default function Account(props) {
  
  const data = props.data;
  const [closed, setClosed] = useState(true);

  return (
    <div>
      {closed ? (
        <div>
          <div>
            <span class={`fa fa-${SITES[data.type].icon}`}/>
            <a href={data.link} class="account-link" target="_blank">
              {data.name}
            </a>
          </div>
          <div>
            <span class="fa fa-chevron-down" onClick={() => setClosed(false)}/>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <span class={`fa fa-${SITES[data.type].icon}`}/>
              {data.name}
            </div>
            <div>
              <span class="fa fa-edit"/>
              <span class="fa fa-trash"/>
              <span class="fa fa-chevron-up" onClick={() => setClosed(true)}/>
            </div>
          </div>
          <div class="account-description-public">
            {data.descriptionPublic}
          </div>
          <div class="account-description-private">
            {data.descriptionPrivate}
          </div>
        </div>
      )}
    </div>
  );
}