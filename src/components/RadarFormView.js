import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RadarFormView = (props) => {

  function handleActiveTravelChange(number){
    props.handleActiveTravelSlider(number);
  }

  function handleActivePhysicalActivityChange(number){
    props.handleActivePhysicalActivitySlider(number);
  }

  function handleAccessToGreenSpaceChange(number){
    props.handleAccessToGreenSpaceSlider(number);
  }

  return(
    <div id="sliders">
      <span> Journeys by active Travel: %{props.journeysByActiveTravelNumber}
        <Slider id="active_travel" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleActiveTravelChange}
        /></span>
        <span> Percentage of adults doing physical activity: %{props.adultsPhysicalActivityNumber}
          <Slider id="physical_activity" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleActivePhysicalActivityChange}
          /></span>
          <span> access to green space %{props.accessToGreenSpaceNumber}
            <Slider id="access_to_green_space" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleAccessToGreenSpaceChange}
            /></span>
          </div>
        )

      }

      export default RadarFormView;
