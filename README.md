# ReactJS Currency Conversion App

A basic currency conversion application built in ReactJS.

This app was built for a coding challenge, with the end-goal resulting in an app that allows a user to convert all available currencies from an inputted amount from a base currency.

To further improve this app, I would follow up with the additional features detailed in the challenge, including a button that switches the order of the selected currencies, and a countdown timer that displays on submit and refreshes the page when complete.

## Features

- All available currencies fetched from API and displayed in a dropdown menu.
- The search field will only accept a number. Letters cannot be used and empty inputs will trigger validation message.
- On submit, the converted currency will render to the user. This will then dynamically update with further changes.
- On refresh, the app reverts to a default state.

## Frameworks & Libraries Used

- ReactJS: [https://reactjs.org/](https://reactjs.org)
- React-Bootstrap: [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

## API Reference

- ExchangeRate-API: [documentation](https://www.exchangerate-api.com/docs/overview).

## Set Up

This app can be run in development mode with `npm start`.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

This app has been tested with Lighthouse, with examplar tests in the repository built using React Testing Library.

Exemplar tests in the `CurrencyInput.test.js` file include:

- The input field renders correctly.
- Receiving an input into the field.
- The 'submit' button renders correctly.
