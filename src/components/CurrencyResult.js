import React from "react";

export default function CurrencyResult(props) {
  let { amount, fromCurrency, toCurrency, exchangeRate, submitted } = props;
  let toAmount = amount * exchangeRate;

  if (submitted) {
    return (
      <div className="Output">
        <span className="Result">{Math.round(toAmount)}</span>
      </div>
    );
  } else {
    return <div className="Output"></div>;
  }
}
