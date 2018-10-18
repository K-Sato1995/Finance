import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component{
  render(){
    return(
     <div className="chart" id = 'dbchart'>
      <div className = 'card'>
        <div className="card-header bg-transparent">
          {this.props.chartTitle}
        </div>
        <div className="card-body">
          <div className = 'chart'>
            <Line
          data={this.props.chartData}
          height={300}
          options={{
            legend: {
              display: this.props.displayLegend,
              position: this.props.LegendPosition
            },
            maintainAspectRatio: false
            }}
          />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LineChart;
