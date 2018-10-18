import React from 'react';
import Moment from 'react-moment';
import Card from './Card';
import LineChart from './LineChart'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total_expense: 0,
      total_income: 0,
      expenses: [],
      incomes: [],
      chartData:{},
      dateEach: {},
    }
  }

  componentWillMount() {
    window.scrollTo(0,0)
    fetch('/')
    .then(response => response.json())
    .then(data => {
      this.setState({expenses: data.data1})
      this.setState({incomes: data.data2})

      // Sorting expenses by date.
      this.state.expenses.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
      });
      // Sorting icnomes by date.
      this.state.incomes.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
      });

      let total = 0
      let incomes = this.state.incomes
      let dateEach = this.state.dateEach

      this.state.expenses.forEach(function(ele1) {
        let ex_date = ele1.date
        let ex_amount = ele1.amount
        let inc_amount = 0
        let inc_date = ''
        incomes.forEach(function(ele2){
          if(ex_date === ele2.date){
            inc_date = ex_date
            inc_amount = ele2.amount
          }
        });
        dateEach[ex_date] = 0
        if(inc_date in dateEach){
          total += inc_amount
          dateEach[inc_date] += total
        }
        if(ex_date in dateEach){
          total -= ex_amount
          dateEach[ex_date] = total
        }
      });
      console.log(this.state.incomes)
      console.log(this.state.expenses)

      data.data2.map(item => {
        this.setState({total_income: this.state.total_income += (item.amount)})
      })

      data.data1.map(item => {
        this.setState({total_expense: this.state.total_expense += (item.amount)})
      })
      this.getChartData()
    })
  }

  getChartData() {
    this.setState({
      chartData:{
          labels: Object.keys(this.state.dateEach),
        datasets:[
          {
            label: "貯金総額推移",
            backgroundColor: "rgba(170, 216, 243, 0.14)",
            borderColor: "#AAD8F3",
            data: Object.values(this.state.dateEach),
          },
        ]
      }
    })
  }
  render(){
    const countDownDate = new Date("Apr 1, 2020").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">ダッシュボード</li>
        </ol>
      </nav>
      <div className="row">
        <Card title = {'支出合計'} total = {this.state.total_expense} />
        <Card title = {'収入合計'} total = {this.state.total_income} />
        <Card title = {'余剰金'} total = {(this.state.total_income - this.state.total_expense)} />
        <Card title = {'達成期限残り日数'} total = {days.toString() + '日'}  />
        <Card title = {'達成率'} total = {(((this.state.total_income - this.state.total_expense)/2000000 * 100).toString() + '%')} />
        <Card title = {'目標金額'} total = {2000000} />
      </div>
      <LineChart chartTitle = {'総貯蓄額推移'} chartData = {this.state.chartData}/>
    </div>
    )
  }
}

export default Dashboard;
