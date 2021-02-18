import React from "react";
import ReactDOM from "react-dom";
// import GetBtc from "./components/GetBtc";
// import HomePage from "./components/HomePage";
import AppRouter from "./routers/AppRoutes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <AppRouter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
