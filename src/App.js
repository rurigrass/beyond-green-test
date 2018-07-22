import React, { Component } from 'react';
import Calculations from './components/Calculations';
import ContainerBox from './containers/ContainerBox';

class App extends Component {
  render() {
    return (
      <div>
        <ContainerBox />
        <Calculations />
      </div>
    );
  }
}

export default App;
