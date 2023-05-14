import React from "react";

export default function CurrencySelect(props) {
  let { currencies, chosenCurrency, onChangeCurrency } = props;

  return (
    <div className="">
      <select value={chosenCurrency} onChange={onChangeCurrency} className="">
        {currencies.map((options) => (
          <option value={options} key={options} className="">
            {options}
          </option>
        ))}
      </select>
    </div>
  );
}
