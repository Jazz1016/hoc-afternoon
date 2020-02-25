import React, { Component } from "react";
import "./App.css";

// IMPORT THE CurrencyConverter COMPONENT
import CurrencyConverter from "./components/CurrencyConverter";
import CurrencyDisplay from "./components/CurrencyDisplay";

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        {/* // RENDER CurrencyConverter AND GIVE IT A PROP CALLED RENDER WITH A
        VALUE OF AN EMPTY // CALLBACK FUNCTION */}
        <CurrencyConverter
          render={(currencyData, amount) => {
            console.log(currencyData);
            return (
              // <p>
              //   US DOLLAR ${amount.toFixed(2)} - {currencyData.name}{" "}
              //   {currencyData.symbol}
              //   {(amount * currencyData.rate).toFixed(2)}
              // </p>
              <CurrencyDisplay currencyData={currencyData} amount={amount} />
            );
          }}
        />
      </>
    );
  }
}

export default App;
