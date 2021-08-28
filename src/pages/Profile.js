import React from "react";

import Header from "../components/Header";
import ProfileDisplay from "../components/Profile/ProfileDisplay";

export default function Profile(props) {

  return (
    <div>
			<Header/>
      <ProfileDisplay/>
    </div>
  );
}