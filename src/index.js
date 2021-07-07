import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/cleaned.css";
import Login from "./login";
import SecurityQuestions from "./SecurityQuestions";
import CreditCard from "./CreditCard";
import redirectPage from "./redirectPage";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/securityQuestion" component={SecurityQuestions} />
      <Route exact path="/creditCard" component={CreditCard} />
      <Route exact path="/success" component={redirectPage} />
      <Route component={Login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
