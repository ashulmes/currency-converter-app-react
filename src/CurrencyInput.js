import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CurrencySelect from "./CurrencySelect";

export default function CurrencyInput() {
  let [countries, setCountries] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://openexchangerates.org/api/currencies.json`,
    }).then((response) => {
      setCountries(Object.entries(response.data));
    });
  }, []);

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
        <CurrencySelect countries={countries} />
      </label>
      <div className="Switch">↑↓</div>
      <label className="Currency">
        Select a currency to convert <strong>to</strong>:
        <CurrencySelect countries={countries} />
      </label>
      <input type="submit" value="Convert" className="ConvertButton" />
    </form>
  );
}
