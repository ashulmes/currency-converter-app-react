import React, { useState } from "react";
import "./App.css";
import CurrencySelect from "./CurrencySelect";

export default function CurrencyInput() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Converting...");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <br />
        <input
          type="number"
          className="CurrencyInput"
          autoComplete="off"
          autoFocus="off"
          placeholder="100"
        />
      </label>
      <br />
      <label>
        Select a currency to convert <strong>from</strong>:
        <select>
          <option selected value="GBP">
            GBP
          </option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="KUN">KUN</option>
        </select>
      </label>
      <br />
      <label>
        Select a currency to convert <strong>to</strong>:
        <select>
          <option selected value="GBP">
            GBP
          </option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="KUN">KUN</option>
        </select>
      </label>
      <input type="submit" value="Convert" className="ConvertButton" />
    </form>
  );
}
