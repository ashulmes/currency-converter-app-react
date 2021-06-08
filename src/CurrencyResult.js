import React from "react";

export default function CurrencyResult(props) {
  let { amount, fromCurrency, toCurrency, exchangeRate, submitted } = props;
  let toAmount = amount * exchangeRate;

  if (submitted) {
    return (
      <div className="Output">
        {amount} {fromCurrency} ={" "}
        <span className="Result">
          {Math.round(toAmount)} {toCurrency}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
