import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import IdCard from "./pages/IdCard";
import Error404 from "./pages/Error404";


function App() {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
          
            <Route path="/" component={Home} exact />

            <Route path="/about" component={About} />

            <Route path="/signup" component={Signup} />

            <Route path="/login" component={Login} />

            <Route path="/profile" component={Profile} />

            <Route path="/id/:cardId" component={IdCard} />
            
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;