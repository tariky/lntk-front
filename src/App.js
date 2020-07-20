import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
