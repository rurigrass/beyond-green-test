import React from "react";
import RadarGraphComponent from './RadarGraphComponent';

class RadarCalculations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

//COMMUNITIES

  communitiesData() {
    return this.props.communitiesArray.filter(c => !isNaN(c) );
  }

  totalCommunities() {
    const commData = this.communitiesData();
    // console.log("after filter "+commData);
    const result = commData.reduce( (accumulator, currentValue) => accumulator + currentValue , 0);
    // console.log("after sum "+result);
    return result;
  }

  averageCommunities() {
    const average = this.totalCommunities() / this.communitiesData().length;
    // console.log(average);
    return average
  }

//HEALTH

  healthData() {
    return this.props.healthArray.filter(c => !isNaN(c) );
  }

  totalHealth() {
    const heaData = this.healthData();
    const result = heaData.reduce( (accumulator, currentValue) => accumulator + currentValue , 0);
    return result;
  }

  averageHealth() {
    const average = this.totalHealth() / this.healthData().length;
    // console.log(average);
    return average
  }

//EDUCATION

  educationData() {
    return this.props.educationArray.filter(c => !isNaN(c) );
  }

  totalEducation() {
    const eduData = this.educationData();
    const result = eduData.reduce( (accumulator, currentValue) => accumulator + currentValue , 0);
    return result;
  }

  averageEducation() {
    const average = this.totalEducation() / this.educationData().length;
    // console.log(average);
    return average
  }

//ENVIRONMENT

environmentData() {
  return this.props.environmentArray.filter(c => !isNaN(c) );
}

totalEnvironment() {
  const envData = this.environmentData();
  const result = envData.reduce( (accumulator, currentValue) => accumulator + currentValue , 0);
  return result;
}

averageEnvironment() {
  const average = this.totalEnvironment() / this.environmentData().length;
  // console.log(average);
  return average
}

//FAIR WORK AND BUSINESS

fairWorkData() {
  return this.props.fairWorkArray.filter(c => !isNaN(c) );
}

totalFairWork() {
  const workData = this.fairWorkData();
  const result = workData.reduce( (accumulator, currentValue) => accumulator + currentValue , 0);
  return result;
}

averageFairWork() {
  const average = this.totalFairWork() / this.fairWorkData().length;
  // console.log(average);
  return average
}

  render() {
    // console.log(this.totalCommunities());
    return(
      <div>
        <RadarGraphComponent communities={this.averageCommunities()} health={this.averageHealth()} education={this.averageEducation()} environment={this.averageEnvironment()} fairWork={this.averageFairWork()}/>
      </div>
    )
  }
}




export default RadarCalculations;
