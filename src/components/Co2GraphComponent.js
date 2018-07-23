import React from "react";
import Highcharts from 'highcharts';

class Co2GraphComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
    // this.refreshChart = this.refreshChart.bind(this);
  }

  // refreshChart(){
  //   Highcharts.setOptions({
  //     colors: ['#965C8C', '#FFC92B', '#548e2f']
  //   });
  //   Highcharts.chart('graph-container', {
  //     chart: {
  //       type: 'bar',
  //       backgroundColor:'rgba(255, 255, 255, 0.8)'
  //     },
  //     title: {
  //       text: this.props.totalCo2OverTurnover
  //     },
  //
  //     subtitle: {
  //       text: 'source: Beyond Green'
  //     },
  //
  //     yAxis: {
  //       title: {
  //         text: 'Years to pay back'
  //       }
  //     },
  //
  //     xAxis: {
  //       categories: null,
  //       title: {
  //         text: null
  //       }
  //     },
  //
  //     series:
  //     [{
  //       name: Object.keys(this.props.totalCo2OverTurnover),
  //       data: Object.values(this.props.totalCo2OverTurnover)
  //     } ,
  //     ],
  //
  //     responsive: {
  //       rules: [{
  //         condition: {
  //           maxWidth: 500
  //         },
  //         chartOptions: {
  //           legend: {
  //             layout: 'horizontal',
  //             align: 'center',
  //             verticalAlign: 'bottom'
  //           }
  //         }
  //       }]
  //     }
  //   });
  // }
  //
  render(){
    console.log(this.props.totalCo2OverTurnover);
    // this.refreshChart();
    return(
      <div id='graph-container'>
      </div>

    )
  }
}

export default Co2GraphComponent;
