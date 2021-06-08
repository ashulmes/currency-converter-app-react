import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CurrencySelect from "./CurrencySelect";
import CurrencyResult from "./CurrencyResult";

export default function CurrencyInput() {
  let [currencies, setCurrencies] = useState([]);
  let [fromCurrency, setFromCurrency] = useState();
  let [toCurrency, setToCurrency] = useState();
  let [amount, setAmount] = useState(0);
  let [submitted, setSubmitted] = useState(false);
  let [fromCurrencyAmount, setFromCurrencyAmount] = useState(true);
  let [exchangeRate, setExchangeRate] = useState();

  useEffect(() => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/3ceed1dda48fbc25451fb6db/latest/GBP`
      )
      .then((response) => {
        let toDefault = Object.keys(response.data.conversion_rates)[44];
        setCurrencies(Object.keys(response.data.conversion_rates));
        setFromCurrency(response.data.base_code);
        setToCurrency(toDefault);
        setExchangeRate(response.data.conversion_rates[toDefault]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      axios
        .get(
          `https://v6.exchangerate-api.com/v6/3ceed1dda48fbc25451fb6db/latest/${fromCurrency}`
        )
        .then((response) => {
          setExchangeRate(response.data.conversion_rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
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
          required
          value={amount}
          onChange={handleAmountChange}
        />
      </label>
      <br />
      <div className="CurrencySelectors">
        <label className="Currency">
          <strong>From</strong>:
          <CurrencySelect
            currencies={currencies}
            chosenCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          />
        </label>
        <div className="Switch">
          <a href="#">↑↓</a>
        </div>
        <label className="Currency">
          <strong>To</strong>:
          <CurrencySelect
            currencies={currencies}
            chosenCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
          />
        </label>
      </div>
      <CurrencyResult
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        exchangeRate={exchangeRate}
        submitted={submitted}
      />
      <input type="submit" value="Convert" className="ConvertButton" />
    </form>
  );
}
