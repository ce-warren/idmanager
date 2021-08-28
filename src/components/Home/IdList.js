import React from "react";
import Id from "./Id";

export default function IdList(props) {

  const ids = props.ids;

  return (
    <div>
      <div>
        IDs
      </div>
      <div>
        {ids.map((id) => (
          <Id data={id}/>
        ))}
      </div>
    </div>
  );
}