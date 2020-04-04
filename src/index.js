import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Visit from "./Visit";
import Notfound from "./Notfound";
import Card from "./Card";

const routing = (
  <Router>
    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo">
          <Link to="/">React</Link>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/visit">Visit</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/user"></Link>
          </li>
        </ul>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route path="/card" component={Card} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
