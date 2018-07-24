import React from "react";
import RadarFormView from '../components/RadarFormView';
// import RadarGraphComponent from '../components/RadarGraphComponent';
import RadarCalculations from '../components/RadarCalculations';


class RadarContainerBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      journeysByActiveTravel: null,
      adultsPhysicalActivity: null,
      accessToGreenSpace: null
    }
    this.handleActiveTravelInput = this.handleActiveTravelInput.bind(this);
    this.handlePhysicalActivityInput = this.handlePhysicalActivityInput.bind(this);
    this.handleGreenSpaceInput = this.handleGreenSpaceInput.bind(this);
  }

  handleActiveTravelInput(event){
    const activeTravelInput = parseInt(event.target.active_travel_input.value);
    this.setState({journeysByActiveTravel: activeTravelInput});
  }

  handlePhysicalActivityInput(event){
    const physicalActivityInput = parseInt(event.target.physical_activity_input.value);
    this.setState({adultsPhysicalActivity: physicalActivityInput});
  }

  handleGreenSpaceInput(event){
    const greenSpaceInput = parseInt(event.target.green_space_input.value);
    this.setState({accessToGreenSpace: greenSpaceInput});
  }




  render(){
    return(
      <div className='container-radar-contents'>
        <RadarFormView
          handleActiveTravelInput={this.handleActiveTravelInput}
          handlePhysicalActivityInput={this.handlePhysicalActivityInput}
          handleGreenSpaceInput={this.handleGreenSpaceInput}
        />

        <RadarCalculations
          communitiesArray={[this.state.journeysByActiveTravel, this.state.adultsPhysicalActivity, this.state.accessToGreenSpace]}
        />
      </div>
    )
  }


}

export default RadarContainerBox
