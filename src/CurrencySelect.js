import React from "react";
import "./App.css";

export default function CurrencySelect(props) {
  let { currencies, chosenCurrency, onChangeCurrency } = props;

  return (
    <span className="Dropdown">
      <select value={chosenCurrency} onChange={onChangeCurrency}>
        {currencies.map((options) => (
          <option value={options} key={options}>
            {options}
          </option>
        ))}
      </select>
    </span>
  );
}
