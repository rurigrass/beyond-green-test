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

  function handleJobTrainingChange(number){
    props.handleJobTrainingSlider(number);
  }

  function handleSkillProfileChange(number){
    props.handleSkillProfileSlider(number);
  }

  function handleVisitingOutdoorsChange(number){
    props.handleVisitingOutdoorsSlider(number);
  }

  function handleRenewablesChange(number){
    props.handleRenewablesSlider(number);
  }

  function handleLivingWageChange(number){
    props.handleLivingWageSlider(number);
  }

  return(
    <div id="sliders">
      <span> %{props.journeysByActiveTravelNumber} Journeys by active Travel
        <Slider id="active_travel" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleActiveTravelChange}
        /></span>
        <span> %{props.adultsPhysicalActivityNumber} Employees doing physical activity
          <Slider id="physical_activity" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleActivePhysicalActivityChange}
          /></span>
          <span> %{props.accessToGreenSpaceNumber} Access to green space
            <Slider id="access_to_green_space" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleAccessToGreenSpaceChange}
            /></span>
            <span> %{props.jobTrainingNumber} Employees who receive on the job training
              <Slider id="job_training" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleJobTrainingChange}
              /></span>
              <span> %{props.skillProfileNumber} Employees with qualifications higher than SCQF L4
                <Slider id="skill_profile" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleSkillProfileChange}
                /></span>
                <span> %{props.visitingOutdoorsNumber} Employees visiting the outdoors
                  <Slider id="visiting_outdoors" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleVisitingOutdoorsChange}
                  /></span>
                  <span> %{props.renewablesNumber} Energy from renewable resources
                    <Slider id="renewables" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleRenewablesChange}
                    /></span>
                  <span> %{props.livingWageNumber} Employees on living wage
                    <Slider id="living_wage" type="range" style={{width: 300}} min={0} max={100} step={1} defaultValue={0} onChange={handleLivingWageChange}
                    /></span>
                  </div>
                )
              }

              export default RadarFormView;
