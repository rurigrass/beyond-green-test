import React from "react";
import RadarFormView from '../components/RadarFormView';
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
      visitingOutdoors: null,
      renewables: null,
      livingWage: null
    }
    this.handleActiveTravelSlider = this.handleActiveTravelSlider.bind(this);
    this.handleActivePhysicalActivitySlider = this.handleActivePhysicalActivitySlider.bind(this);
    this.handleAccessToGreenSpaceSlider = this.handleAccessToGreenSpaceSlider.bind(this);
    this.handleJobTrainingSlider = this.handleJobTrainingSlider.bind(this);
    this.handleSkillProfileSlider = this.handleSkillProfileSlider.bind(this);
    this.handleVisitingOutdoorsSlider = this.handleVisitingOutdoorsSlider.bind(this);
    this.handleRenewablesSlider = this.handleRenewablesSlider.bind(this);
    this.handleLivingWageSlider = this.handleLivingWageSlider.bind(this);
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

  handleVisitingOutdoorsSlider(number){
    this.setState({visitingOutdoors: number})
  }

  handleRenewablesSlider(number){
    this.setState({renewables: number})
  }

  handleLivingWageSlider(number){
    this.setState({livingWage: number})
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
          handleVisitingOutdoorsSlider={this.handleVisitingOutdoorsSlider}
          handleRenewablesSlider={this.handleRenewablesSlider}
          handleLivingWageSlider={this.handleLivingWageSlider}

          journeysByActiveTravelNumber={this.state.journeysByActiveTravel}
          adultsPhysicalActivityNumber={this.state.adultsPhysicalActivity}
          accessToGreenSpaceNumber={this.state.accessToGreenSpace}
          jobTrainingNumber={this.state.jobTraining}
          skillProfileNumber={this.state.skillProfile}
          visitingOutdoorsNumber={this.state.visitingOutdoors}
          renewablesNumber={this.state.renewables}
          livingWageNumber={this.state.livingWage}
        />

        <RadarCalculations
          communitiesArray={[this.state.journeysByActiveTravel, this.state.adultsPhysicalActivity, this.state.accessToGreenSpace]}
          healthArray={[this.state.journeysByActiveTravel, this.state.adultsPhysicalActivity]}
          educationArray={[this.state.jobTraining, this.state.skillProfile]}
          environmentArray={[this.state.visitingOutdoors, this.state.renewables]}
          fairWorkArray={[this.state.livingWage]}
        />
      </div>
    )
  }


}

export default RadarContainerBox
