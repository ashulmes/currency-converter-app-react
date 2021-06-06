import React from "react";
import "./App.css";

export default function CurrencySelect(props) {
  let { countries } = props;

  return (
    <span className="Dropdown">
      <select>
        {countries.map((options) => (
          <option value={options} key={options}>
            {options}
          </option>
        ))}
      </select>
    </span>
  );
}
