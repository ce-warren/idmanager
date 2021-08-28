import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import UserHomeDisplay from "./UserHomeDisplay";

export default function HomeDisplay(props) {
  const history = useHistory();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
  const userInfo = true;

  return (
    <div>
      {userInfo ? (
        <UserHomeDisplay/>
      ) : (
        <div>
          <div class="siteTitle">
            Branding Thing
          </div>
          <div>
            <Button onClick={() => history.push("/login")}>
              Log In
            </Button>
            <Button onClick={() => history.push("/signup")}>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}