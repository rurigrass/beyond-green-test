// import React from 'react';
// import InputRange from 'react-input-range';
import React from 'react';
import Slider from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
//
class SliderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 0
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({sliderValue: event})
  }

  render() {
    return (
      <div>
        <Slider type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={50} onChange={this.handleChange}/>
        <p>{this.state.sliderValue}</p>
      </div>
    )
  }
}

export default SliderBar
