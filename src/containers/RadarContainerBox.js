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
    this.handleActiveTravelSlider = this.handleActiveTravelSlider.bind(this);
    this.handleActivePhysicalActivitySlider = this.handleActivePhysicalActivitySlider.bind(this);
    this.handleAccessToGreenSpaceSlider = this.handleAccessToGreenSpaceSlider.bind(this);
  }


  handleActiveTravelSlider(number){
    this.setState({journeysByActiveTravel: number});
  }

  handleActivePhysicalActivitySlider(number){
    this.setState({adultsPhysicalActivity: number})
  }

  handleAccessToGreenSpaceSlider(number){
    this.setState({accessToGreenSpace: number})
  }

  render(){
    return(
      <div className='container-radar-contents'>
        <RadarFormView
          handleActiveTravelSlider={this.handleActiveTravelSlider}
          handleActivePhysicalActivitySlider={this.handleActivePhysicalActivitySlider}
          handleAccessToGreenSpaceSlider={this.handleAccessToGreenSpaceSlider}
          journeysByActiveTravelNumber={this.state.journeysByActiveTravel}
          adultsPhysicalActivityNumber={this.state.adultsPhysicalActivity}
          accessToGreenSpaceNumber={this.state.accessToGreenSpace}
        />

        <RadarCalculations
          communitiesArray={[this.state.journeysByActiveTravel, this.state.adultsPhysicalActivity, this.state.accessToGreenSpace]}
        />
      </div>
    )
  }


}

export default RadarContainerBox
