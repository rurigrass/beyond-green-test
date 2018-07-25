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





  render() {
    // console.log(this.totalCommunities());
    return(
      <div>
        <RadarGraphComponent communities={this.averageCommunities()} health={this.averageHealth()} education={this.averageEducation()}/>
      </div>
    )
  }
}




export default RadarCalculations;
