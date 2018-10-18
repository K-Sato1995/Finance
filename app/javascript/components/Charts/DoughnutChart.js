import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends React.Component{
    static defaultProps = {
      displayLegend: true,
      LegendPosition: 'right'
    }
  render(){
    return(
    <div className="chart col-sm-6">
      <div className = 'card'>
        <div className="card-header bg-transparent">
          カテゴリー別支出額
        </div>
        <div className="card-body">
          <div className = 'chart'>
            <Doughnut
          data={this.props.chartData}
          width={100}
          height={50}
          options={{
            title:{
              display: this.props.displayTitle,
              fontSize: 15
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

export default DoughnutChart;
