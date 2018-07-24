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
    };
  }

  render() {
    return (
      <div>
        <Slider min={0} max={100} defaultValue={50} />
      </div>
    )
  }
}

export default SliderBar
