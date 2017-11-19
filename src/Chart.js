import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class Chart extends Component {

  render() {
        let { chartData } = this.props;
         chartData = this.props ? this.props.chartData : []
         let data = chartData.map(dt => dt.price_usd)
         let lebelData = chartData.map(ld => ld.name )

         let gdpData = {
           labels: lebelData,
           datasets: [{
             label: "Gdp",
             backgroundColor: 'rgba(255,0,0, 0.6)',
               data: data,
           }]
         };

    return (
      <div>
          <Bar
           data={gdpData}
           options={{
           title:{
             display : true,
             text: 'Gdp Line Chart',
             fontSize: 25
          },
          legend:{
            display:true,
            position:'top'
          }
        }}
        width={600}
        height={250} />
      </div>
    )
  }
}
