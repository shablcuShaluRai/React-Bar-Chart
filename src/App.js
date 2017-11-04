import React, { Component } from 'react';
import * as GdpApi from './utils/GdpAPI'
import Chart from  './Chart'



class App extends Component {


  componentDidMount = () => {
    GdpApi.fetchData().then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        <h1>React Bar Chart</h1>
        <Chart />


      </div>
    );
  }
}

export default App;
