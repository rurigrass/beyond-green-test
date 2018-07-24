import React, { Component } from 'react';
import ContainerBox from './containers/ContainerBox';
import RadarContainerBox from './containers/RadarContainerBox';

class App extends Component {
  render() {
    return (
      <div>
        <ContainerBox />
        <RadarContainerBox />
      </div>
    );
  }
}

export default App;
