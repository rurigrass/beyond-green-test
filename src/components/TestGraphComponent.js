import React from 'react';
import Highcharts from 'highcharts';

const TestGraphComponent = (props) => {

  function refreshChart(){
    Highcharts.setOptions({
      colors: ['#965C8C', '#FFC92B', '#548e2f']
    });
    Highcharts.chart('graph-container', {
      chart: {
        type: 'bar',
        backgroundColor:'rgba(255, 255, 255, 0.8)'
      },
      title: {
        text: 'this is some text'
      },

      subtitle: {
        text: 'source: Beyond Green'
      },

      yAxis: {
        title: {
          text: 'Years to pay back'
        }
      },

      xAxis: {
        categories: null,
        title: {
          text: null
        }
      },

      series:
      [{
        name: Object.keys('hello'),
        data: Object.values(1000)
      } ,
      ],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });
  }


  if (1 === 1){
    refreshChart()
  }
  return(
    <div id='graph-container'>
    </div>
  )

};

export default TestGraphComponent;
