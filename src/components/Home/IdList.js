import React from "react";
import Id from "./Id";

export default function IdList(props) {

  const ids = props.ids;

  return (
    <div>
      <div>
        <div>
          IDs
        </div>
        <div>
          <span class="fa fa-plus"/>
        </div>
      </div>
      <div>
        {ids.map((id) => (
          <Id data={id}/>
        ))}
      </div>
    </div>
  );
}