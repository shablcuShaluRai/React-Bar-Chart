import React, { Component } from 'react';
import * as GdpApi from './utils/GdpAPI'
import Chart from  './Chart'


export default class App extends Component {

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
    return (
      <div className="App">
      <h1>Modeling US GDP Economic Data with React</h1>
      <Chart chartData = { this.state.chartData} />
      </div>
    );
  }
}
