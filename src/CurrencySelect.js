import React from "react";
import "./App.css";

export default function CurrencySelect() {
  return (
    <span className="Dropdown">
      <select>
        <option selected value="GBP">
          GBP
        </option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="KUN">KUN</option>
      </select>
    </span>
  );
}
