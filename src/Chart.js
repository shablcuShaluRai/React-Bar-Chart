import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';



export default class Chart extends Component {



  render() {
        let { chartData } = this.props;

           chartData = this.props ? this.props.chartData : []
            let dates = []
            let renderData = chartData.filter((item, index) => {
            if (index %  20 === 0) {
              dates[index] = item[0];
              return dates;
            }
        }
        )

         let labels = renderData.map(label => label[0].substr(0,4))
         let data = renderData.map(dta => dta[1])


         let gdpData = {
           labels: labels,
           datasets: [{
             label: "Gdp",
             backgroundColor: 'rgba(255,0,0, 0.6)',
               data: data,
           }]
         };

    return (
      <div>
          <Line
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
