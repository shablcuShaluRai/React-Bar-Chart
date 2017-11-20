import React, { Component } from 'react'
import { Bar, Pie } from 'react-chartjs-2';

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
             backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                 'rgba(255, 99, 132, 0.6)',
                 'rgba(255, 99, 132, 0.6)',
                 'rgba(54, 162, 235, 0.6)',
                 'rgba(153, 102, 255, 0.6)',
    ],
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

        <Pie
        data={gdpData}
        options={{
          title:{
            display : true,
            text: 'Exchange rate of all crypto currencies in USD',
            fontSize: 25
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
        width={600}
        height={250} />
      </div>
    )
  }
}
