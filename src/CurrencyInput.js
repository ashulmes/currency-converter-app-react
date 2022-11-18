import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencySelect from "./CurrencySelect";
import CurrencyResult from "./CurrencyResult";

export default function CurrencyInput() {
  let [currencies, setCurrencies] = useState([]);
  let [fromCurrency, setFromCurrency] = useState();
  let [toCurrency, setToCurrency] = useState();
  let [amount, setAmount] = useState(0);
  let [submitted, setSubmitted] = useState(false);
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
    if (submitted) {
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
    setSubmitted(false);
  }

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
    setSubmitted(false);
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit} title="searchForm">
      <div className="AmountSearch">
        <label>Amount:</label>
        <br />
        <input
          type="number"
          aria-label="search"
          className="SearchField"
          autoComplete="off"
          autoFocus="off"
          required
          value={amount}
          onChange={handleAmountChange}
          title="searchBar"
        />
      </div>
      <br />

      <div className="CurrencySelectors">
        <label className="Currency">
          <strong>From</strong>:
        </label>
        <CurrencySelect
          currencies={currencies}
          chosenCurrency={fromCurrency}
          onChangeCurrency={handleFromCurrencyChange}
        />
        <br />
        <label className="Currency">
          <strong>To</strong>:
        </label>
        <CurrencySelect
          currencies={currencies}
          chosenCurrency={toCurrency}
          onChangeCurrency={handleToCurrencyChange}
        />
      </div>
      <CurrencyResult
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        exchangeRate={exchangeRate}
        submitted={submitted}
      />
      <input
        type="submit"
        value="Convert"
        className="ConvertButton"
        aria-label="submit button"
        title="submitButton"
      />
    </form>
  );
}
