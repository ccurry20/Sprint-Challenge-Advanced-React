import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import Player from ".index.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("verify Get Players and Women's World Cup is present", () => { 
 
  const { getByText } = render(<Player />);
  getByText("Get Players"); 
  getByText("Tigers"); 
});

test("renders without crashing", () => {
    render(<Player />);
  });