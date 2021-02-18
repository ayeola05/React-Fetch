import React from "react";
import { Link } from "react-router-dom";

// Work on the button toggle

class GetBtc extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrice = this.handlePrice.bind(this);
    this.state = {
      price: undefined,
      toggle: false,
    };
  }
  handlePrice() {
    if (this.state.price) {
      this.setState(() => {
        return {
          price: undefined,
        };
      });
    } else {
      fetch("https://api.cryptonator.com/api/full/btc-usd")
        .then((res) => res.json())
        .then((data) => data.ticker.price)
        .then((result) => {
          this.setState(() => {
            return {
              price: result,
            };
          });
        })
        .catch((err) => {
          "Sorry there was an error";
        });
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePrice}>
          {this.state.price ? "Hide Price" : "Get Price"}
        </button>
        {<p>BTC Price: {this.state.price}</p>}

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default GetBtc;
