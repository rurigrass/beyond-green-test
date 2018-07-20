import React from 'react';
import ReactDOM from 'react-dom';
import Calculations from './Calculations.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculations />, div);
  ReactDOM.unmountComponentAtNode(div);
});
