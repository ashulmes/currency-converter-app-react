import React, { useState } from "react";
import "./App.css";
import CurrencySelect from "./CurrencySelect";

export default function CurrencyInput() {
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Converting...`);
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
          required
        />
      </label>
      <br />
      <label className="Currency">
        Select a currency to convert <strong>from</strong>:
        <CurrencySelect />
      </label>
      <br />
      <label className="Currency">
        Select a currency to convert <strong>to</strong>:
        <CurrencySelect />
      </label>
      <input type="submit" value="Convert" className="ConvertButton" />
    </form>
  );
}
