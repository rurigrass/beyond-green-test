import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis} from 'recharts';

  class RadarGraphComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        radarGraphData:[
          { subject: 'Communities', A: 0, B: 0, fullMark: 100 },
          { subject: 'Economy', A: 0, B: 0, fullMark: 100 },
          { subject: 'Education', A: 0, B: 0, fullMark: 100 },
          { subject: 'Environment', A: 0, B: 0, fullMark: 100 },
          { subject: 'Fair Work & Business', A: 0, B: 0, fullMark: 100 }
        ]
      }
    }

    componentWillReceiveProps(newProps){
      const newState = {
        radarGraphData:[
          { subject: 'Communities', A: 50, B: newProps.communities , fullMark: 100 },
          { subject: 'Economy', A: 50, B: 30, fullMark: 100 },
          { subject: 'Education', A: 50, B: 30, fullMark: 100 },
          { subject: 'Environment', A: 50, B: 30, fullMark: 100 },
          { subject: 'Fair Work & Business', A: 50, B: 30, fullMark: 100 }
        ]
      }
      this.setState(newState)
    }

    render(){
      return (

        <RadarChart cx={300} cy={250} outerRadius={100} width={600} height={500} data={this.state.radarGraphData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 100]}/>
          <Radar name="Average" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <Radar name="Yours" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
          <Legend />
        </RadarChart>
      );
    }
  }

  export default RadarGraphComponent;
