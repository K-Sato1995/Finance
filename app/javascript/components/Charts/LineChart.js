import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component{
  render(){
    return(
     <div className="chart col-sm-6">
      <div className = 'card'>
        <div className="card-header bg-transparent">
          {this.props.chartTitle}
        </div>
        <div className="card-body">
          <div className = 'chart'>
            <Line
          data={this.props.chartData}
          width={100}
          height={50}
          options={{
            title:{
              display: this.props.displayTitle,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.LegendPosition
            }

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
