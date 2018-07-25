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
      accessToGreenSpace: null,
      jobTraining: null,
      skillProfile: null,
      
    }
    this.handleActiveTravelSlider = this.handleActiveTravelSlider.bind(this);
    this.handleActivePhysicalActivitySlider = this.handleActivePhysicalActivitySlider.bind(this);
    this.handleAccessToGreenSpaceSlider = this.handleAccessToGreenSpaceSlider.bind(this);
    this.handleJobTrainingSlider = this.handleJobTrainingSlider.bind(this);
    this.handleSkillProfileSlider = this.handleSkillProfileSlider.bind(this);
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

  handleJobTrainingSlider(number){
    this.setState({jobTraining: number})
  }

  handleSkillProfileSlider(number){
    this.setState({skillProfile: number})
  }

  render(){
    return(
      <div className='container-radar-contents'>
        <RadarFormView
          handleActiveTravelSlider={this.handleActiveTravelSlider}
          handleActivePhysicalActivitySlider={this.handleActivePhysicalActivitySlider}
          handleAccessToGreenSpaceSlider={this.handleAccessToGreenSpaceSlider}
          handleJobTrainingSlider={this.handleJobTrainingSlider}
          handleSkillProfileSlider={this.handleSkillProfileSlider}

          journeysByActiveTravelNumber={this.state.journeysByActiveTravel}
          adultsPhysicalActivityNumber={this.state.adultsPhysicalActivity}
          accessToGreenSpaceNumber={this.state.accessToGreenSpace}
          jobTrainingNumber={this.state.jobTraining}
          skillProfileNumber={this.state.skillProfile}
        />

        <RadarCalculations
          communitiesArray={[this.state.journeysByActiveTravel, this.state.adultsPhysicalActivity, this.state.accessToGreenSpace]}
          healthArray={[this.state.journeysByActiveTravel, this.state.adultsPhysicalActivity]}
          educationArray={[this.state.jobTraining, this.state.skillProfile]}
        />
      </div>
    )
  }


}

export default RadarContainerBox
