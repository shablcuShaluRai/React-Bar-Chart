import React, { Component } from 'react';
import * as GdpApi from './utils/GdpAPI'
import Chart from  './Chart'


class App extends Component {

  state = {
    chartData: {}
      }
  // componentDidMount = () => {
  //   GdpApi.fetchData().then(data => console.log(data))
  // }

  componentWillMount(){
    this.getChartData()
  }

getChartData(){
  this.setState({
    chartData : {
      labels: ["NewDelhi", "Bangalore", "Lucknow", "Mumbai", "Rajsthan", "Shimla", "hydraBad"],
      datasets: [{
        label: "Populations",
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
         borderWidth: 1,
        data: [65034803,  80238239, 5983792,81298392, 56379382, 5529382, 4028392],
      }]
    }

  })
}

  render() {
    return (
      <div className="App">
        <h1>React Bar Chart</h1>
        <Chart  chartData = { this.state.chartData}/>
      


      </div>
    );
  }
}

export default App;
