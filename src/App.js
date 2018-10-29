import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import highcharts from 'highcharts'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.chartRef = React.createRef()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const app = this
    const interval = setInterval(() => axios.get('/api/temp')
      .then(response => {
        app.setState({
          data: response.data
        },() => console.log(this.state))
      }),5000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div ref={this.chartRef} />
      </div>
    );
  }
}

export default App;
