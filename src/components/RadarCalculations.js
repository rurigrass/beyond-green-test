import React from "react";
import RadarGraphComponent from './RadarGraphComponent';

class RadarCalculations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  countCommunities() {
    var communitiesCounter = 0;
    for( var i=0; i<3; i++){
      if(this.props.communitiesArray[i]>0){
        communitiesCounter++;
      }
    }
    return communitiesCounter
  }

  totalCommunities() {
    var communitiesTotal = 0;
    for(var i=0; i<this.countCommunities(); i++){
      communitiesTotal = communitiesTotal + this.props.communitiesArray[i];
    }
    return communitiesTotal
  }

  averageCommunities() {
    const average = this.totalCommunities() / this.countCommunities();
    return average
  }

  render() {
    console.log(this.totalCommunities());
    return(
      <div>
        <RadarGraphComponent communities={this.averageCommunities()}/>
      </div>
    )
  }
}




export default RadarCalculations;
