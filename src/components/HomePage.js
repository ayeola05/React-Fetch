import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>
      <Link to="/getbtc">Check Btc Price</Link>
    </p>
    <p>
      <Link to="/tvmaze">Check Movie</Link>
    </p>
  </div>
);

export default HomePage;
