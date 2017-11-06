import React, { Component } from 'react';
import * as GdpApi from './utils/GdpAPI'
//import Chart from  './Chart
import {Line} from 'react-chartjs-2';

class App extends Component {

  state = {
    chartData: []
      }

  componentDidMount = () => {
    let { chartData } = this.state
    GdpApi.fetchData().then(resdata => {
    chartData = resdata.data
    this.setState({chartData})
  })
  }

  render() {
    let chartData = this.state ? this.state.chartData : []
    let dates = []
    let renderData = chartData.filter((item, index) => {
    if (index %  20 === 0) {
      dates[index] = item[0].substr(0, 4);
      return dates[index];
    }
}
)

 let labels = renderData.map(elm => elm[0].substr(0,4))
 let data = renderData.map(elm => elm[1])

 let gdpData = {
   labels: labels,
   datasets: [{
     label: "Gdp",
     backgroundColor: [
       'rgba(255, 99, 132, 0.6)'
     ],
       data: data,
   }]
 };


    return (
      <div className="App">
      <h1>Modeling US GDP Economic Data with React</h1>
      <Line
      data={gdpData}
      options={{}}
      width={600}
      height={250} />
      </div>
    );
  }
}

export default App;
