import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import CurrencySelect from "./components/CurrencySelect";
import CurrencyResult from "./components/CurrencyResult";
import CountdownTimer from "./components/CountdownTimer";

export default function App() {
  let [currencies, setCurrencies] = useState([]);
  let [fromCurrency, setFromCurrency] = useState();
  let [toCurrency, setToCurrency] = useState();
  const [switchCurrency, setSwitchCurrency] = useState("default");
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
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="currency-input__from">
          <input
            type="number"
            className="currency-input__from__input"
            autoComplete="off"
            autoFocus="off"
            required
            value={amount}
            onChange={handleAmountChange}
          />

          <CurrencySelect
            currencies={currencies}
            chosenCurrency={fromCurrency}
            onChangeCurrency={handleFromCurrencyChange}
            className="currency-input__from__dropdown"
          />
        </div>

        <div className="currency-input__submit">
          <input
            type="submit"
            value="Convert"
            className="currency-input__submit__button"
          />
        </div>

        <div className="currency-input__to">
          <CurrencyResult
            amount={amount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            exchangeRate={exchangeRate}
            submitted={submitted}
            className="currency-input__to__result"
          />

          <CurrencySelect
            currencies={currencies}
            chosenCurrency={toCurrency}
            onChangeCurrency={handleToCurrencyChange}
            className="currency-input__to__dropdown"
          />
        </div>

        <div className="currency-input__countdown">
          <CountdownTimer
            submitted={submitted}
            className="currency-input__countdown__timer"
          />
        </div>
      </form>
    </div>
  );
}
