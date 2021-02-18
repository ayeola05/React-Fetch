import React from "react";
import GetBtc from "../components/GetBtc";
import HomePage from "../components/HomePage";
import TvMaze from "../components/TvMaze";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/getbtc" component={GetBtc} />
        <Route path="/tvmaze" component={TvMaze} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
