import React, { useState, useEffect } from "react";

export default function CurrencyResult(props) {
  let { amount, fromCurrency, toCurrency, exchangeRate, submitted } = props;
  let toAmount = amount * exchangeRate;
  let [minutes, setMinutes] = useState(10);
  let [seconds, setSeconds] = useState(59);

  useEffect(() => {
    window.setInterval(() => setSeconds(seconds - 1), 1000);
  }, []);

  if (submitted) {
    return (
      <div className="Output">
        <div className="Result">
          {amount} {fromCurrency} = {toAmount} {toCurrency}
        </div>
        <div className="Countdown">
          Expires in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
