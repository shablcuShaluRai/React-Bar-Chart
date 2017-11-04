import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';



class Chart extends Component {



  render() {
    const { chartData } = this.props;
    return (
      <div>
        <Bar
        data={chartData}
        options={{
          title:{
            display : true,
            text: 'Largest Cities In Bangalore',
            fontSize: 25
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
        width={600}
        height={250} />
        <Line
        data={chartData}
        options={{
          title:{
            display : true,
            text: 'Largest Cities In Bangalore',
            fontSize: 25
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
        width={600}
        height={250} />

        <Pie
        data={chartData}
        options={{
          title:{
            display : true,
            text: 'Largest Cities In Bangalore',
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

export default Chart;
