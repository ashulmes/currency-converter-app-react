import React from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import "./App.css";
import CurrencyInput from "./CurrencyInput";

function App() {
  return (
    <div className="App">
      <container>
        <row>
          <CurrencyInput />
        </row>
      </container>
    </div>
  );
}

export default App;
