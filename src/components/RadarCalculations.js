import React from "react";
import RadarGraphComponent from './RadarGraphComponent';

class RadarCalculations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  communitiesData() {
    // var communitiesCounter = 0;
    // for( var i=0; i<3; i++){
    //   if(this.props.communitiesArray[i]>0){
    //     communitiesCounter++;
    //   }
    // }
    // console.log("before filter" +this.props.communitiesArray);

    return this.props.communitiesArray.filter(c => !isNaN(c) );
    // 10 - keep
    // 0 - keep
    // NaN - don't keep
  }

  totalCommunities() {
    // var communitiesTotal = 0;
    // for(var i=0; i<this.countCommunities(); i++){
    //   communitiesTotal = communitiesTotal + this.props.communitiesArray[i];
    // }
    // console.log("before filter "+this.props.communitiesArray);
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

  render() {
    // console.log(this.totalCommunities());
    return(
      <div>
        <RadarGraphComponent communities={this.averageCommunities()}/>
      </div>
    )
  }
}




export default RadarCalculations;
