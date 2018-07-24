import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Co2GraphComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:[{
        name: '', uv: 0, pv: 0, amt: 0
      }]
    };
  }

  componentWillReceiveProps(newProps){
    const newState = {
      chartData:[{
        name: 'total TCO2e per Year Over £000 Turnover', uv: newProps.totalCo2OverTurnover, pv: 0.06, amt: 0.1
      }]
    };
    this.setState(newState);
  }

  render () {
    return (
      <BarChart width={600} height={300} data={this.state.chartData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Co2GraphComponent;
