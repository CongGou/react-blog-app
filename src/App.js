import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registered from "./components/Registered";
import Article from "./components/Article";
import Management from "./components/Management";
import Release from "./components/Release";
import UserCenter from "./components/UserCenter";

const App = props => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registered" component={Registered} />
        <Route path="/login" component={Login} />
        <Route path="/release" component={Release} />
        <Route path="/management" component={Management} />
        <Route path="/usercenter" component={UserCenter} />
        <Route path="/article" component={Article} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
