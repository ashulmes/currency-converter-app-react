import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CurrencyInput from "./CurrencyInput";

it("searchRenderingCorrectly", () => {
  const { queryByTitle } = render(<CurrencyInput />);
  const input = queryByTitle("searchBar");
  expect(input).toBeTruthy();
});

describe("inputChange", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<CurrencyInput />);
    const input = queryByTitle("searchBar");
    fireEvent.change(input, { target: { value: "100" } });
    expect(input.value).toBe("100");
  });
});

it("buttonRenderingCorrectly", () => {
  const { queryByTitle } = render(<CurrencyInput />);
  const input = queryByTitle("submitButton");
  expect(input).toBeTruthy();
});
