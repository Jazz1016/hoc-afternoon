// import React, { Component } from "react";
// import CurrencyDisplay from "./CurrencyDisplay";

// const withCurrency = BaseComponent => {
//   class CurrencyConverter extends Component {
//     state = {
//       currencyChosen: false,
//       selectedCurrency: "Select Currency",
//       amount: 0
//     };

//     handleAmountIncrease = () => {
//       this.setState(prevState => {
//         return {
//           amount: prevState.amount + 1
//         };
//       });
//     };

//     handleAmountDecrease = () => {
//       this.setState(prevState => {
//         return {
//           amount: prevState.amount - 1
//         };
//       });
//     };

//     handleOptionSelect = evt => {
//       const userValue = evt.target.value;
//       this.setState(() => {
//         return {
//           selectedCurrency: userValue,
//           currencyChosen: userValue === "Select Currency" ? false : true
//         };
//       });
//     };

//     render() {
//       const currencyData = [
//         { name: "Japanese Yen", symbol: "¥", rate: 113.6, id: 0 },
//         { name: "British Pound", symbol: "£", rate: 0.77, id: 1 },
//         { name: "Canadian Dollar", symbol: "CAD", rate: 1.32, id: 2 },
//         { name: "Mexican Peso", symbol: "Mex$", rate: 20.41, id: 3 },
//         { name: "Swiss Franc", symbol: "Fr.", rate: 1.01, id: 4 }
//       ];
//       let currencyOptions = currencyData.map((currency, i) => {
//         return (
//           <option key={currency.id} value={i}>
//             {currency.name}
//           </option>
//         );
//       });
//       return (
//         <div>
//           CurrencyConverter
//           <select
//             value={this.state.selectedCurrency}
//             onChange={() => {
//               this.handleOptionSelect();
//             }}
//           >
//             <option>default</option>
//             {currencyOptions}
//           </select>
//           <div>
//             <button
//               className="add"
//               onClick={() => {
//                 this.handleAmountIncrease();
//               }}
//             >
//               +
//             </button>
//             <button
//               className="minus"
//               onClick={() => {
//                 this.handleAmountDecrease();
//               }}
//             >
//               -
//             </button>
//           </div>
//           <BaseComponent
//             currency={currencyData[this.state.selectedCurrency]}
//             amount={this.state.amount}
//           />
//         </div>
//       );
//     }
//   }
//   export default CurrencyConverter;
// };

// const ExchangedCurrency = withCurrency(CurrencyDisplay);

// export default ExchangedCurrency;

import React, { Component } from "react";

class CurrencyConverter extends Component {
  state = {
    currencyChosen: false,
    selectedCurrency: "Select Currency",
    amount: 0
  };

  // ADD BOUND handleAmountIncrease FUNCTION
  handleAmountIncrease = () => {
    this.setState(prevState => {
      return {
        amount: prevState.amount + 1
      };
    });
  };

  // ADD BOUND handleAmountDecrease FUNCTION THAT ENSURES THAT AMOUNT
  // ON STATE IS NEVER LESS THAN 0
  handleAmountDecrease = () => {
    return (
      this.state.amount > 0 &&
      this.setState(prevState => {
        return {
          amount: prevState.amount - 1
        };
      })
    );
  };

  // ADD BOUND handleOptionSelect FUNCTION
  handleOptionSelect = event => {
    const userValue = event.target.value;
    this.setState(() => {
      return {
        selectedCurrency: userValue,
        currencyChosen: userValue === "Select Currency" ? false : true
      };
    });
  };

  render() {
    const currencyData = [
      { name: "Japanese Yen", symbol: "¥", rate: 113.6, id: 0 },
      { name: "British Pound", symbol: "£", rate: 0.77, id: 1 },
      { name: "Canadian Dollar", symbol: "CAD", rate: 1.32, id: 2 },
      { name: "Mexican Peso", symbol: "Mex$", rate: 20.41, id: 3 },
      { name: "Swiss Franc", symbol: "Fr.", rate: 1.01, id: 4 }
    ];
    const currencyOptions = currencyData.map((currency, index) => (
      <option key={currency.id} value={index}>
        {currency.name}
      </option>
    ));
    return (
      <div>
        <select
          value={this.state.selectedCurrency}
          onChange={this.handleOptionSelect}
        >
          <option value="Select Currency">Select Currency</option>
          {currencyOptions}
        </select>
        <div>
          {this.state.currencyChosen ? (
            <button className="add" onClick={this.handleAmountIncrease}>
              +
            </button>
          ) : (
            <button className="add">+</button>
          )}
          {this.state.currencyChosen ? (
            <button className="minus" onClick={this.handleAmountDecrease}>
              -
            </button>
          ) : (
            <button className="minus">-</button>
          )}
        </div>
        {this.state.currencyChosen
          ? this.props.render(
              currencyData[this.state.selectedCurrency],
              this.state.amount
            )
          : null}
      </div>
    );
  }
}

export default CurrencyConverter;
