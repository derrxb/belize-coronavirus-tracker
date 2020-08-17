import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'right',
    location: 'City'
  }

  render(){
    return (
      <div className="chart">
        <h1>🇧🇿Total Cases: {452} 🇧🇿</h1>
        <div className="screening-data">
          <button>Tests Done</button>
          <button>Under Investigation <span></span></button>
          <button>Negative<span>-</span></button>
          <button>Confirmed<span>+</span></button>
          <button>Deseased<span></span></button>
          <button>Recovered<span></span></button>
          <button>Active<span></span></button>
        </div>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Cases in ' +this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities in ' +this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities in ' +this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
