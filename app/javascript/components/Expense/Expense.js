import React from 'react';
import Form from './Form';
import Table from './Table';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import Moment from 'react-moment';

class Expense extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      title: '',
      description:'',
      category: '',
      amount: '',
      date:'',
      edit: false,
      clickedId: '',
      expenses: [],
      categoryEach:{'食費': 0, '水道光熱費':0, '通信費':0, '交通費':0 , '美容費':0, '医療費':0, '生活雑貨・日用品':0, '教育費':0, '交遊費':0, '住宅費':0, '税金':0, 'その他費用':0},
      dateEach: {},
      sortedDateEach: {},
      chartData: {},
      chartData2: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
    this.validationSubmit = this.validationSubmit.bind(this);
    this.validationEdit = this.validationEdit.bind(this);
    this.rerenderExpense = this.rerenderExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0,0)
    fetch('/expenses')
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      this.setState({expenses: data.data})
      data.data.map(item => {
        this.categoryCheck(item.category, item.amount)
        this.dateCheck(item.date, item.amount)
      })
      this.dateSort()
      this.getChartData()
    })
  }

  categoryCheck(name, amount){
    if(name in this.state.categoryEach) {
      this.state.categoryEach[name] += amount
    } else {
      this.state.categoryEach['その他費用'] += amount
    }
  }

  dateCheck(date, amount){
    if(date in this.state.dateEach !== true){
      this.state.dateEach[date] = amount
    }else if(date in this.state.dateEach){
      this.state.dateEach[date] += amount
    }else{
      console.log('Unidentifiable')
    }
  }

  dateSort(){
    const keys = Object.keys(this.state.dateEach).sort()
    const dateEach = this.state.dateEach
    const sortedDateEach = this.state.sortedDateEach

    keys.forEach(function(ele){
      console.log(dateEach[ele])
      sortedDateEach[ele] = dateEach[ele]
    })
    console.log(this.state.sortedDateEach)
  }

  getChartData() {
    this.setState({
      chartData:{
        labels:Object.keys(this.state.categoryEach),
        datasets:[
          {
            label: 'カテゴリー別支出額',
            data: Object.values(this.state.categoryEach),
            backgroundColor: ['#F5B090', '#FCD7A1', '#FFF9B1', '#D7E7AF', '#A5D4AD', '#A2D7D4', '#9FD9F6', '#A3BCE2', '#A59ACA', '#CFA7CD', '#FFF0F5', '#E5E5E5' ]
          }
        ]
      }
    })
    this.setState({
      chartData2:{
          labels: Object.keys(this.state.sortedDateEach),
        datasets:[
          {
            backgroundColor: "rgba(170, 216, 243, 0.14)",
            borderColor: "#AAD8F3",
            data: Object.values(this.state.sortedDateEach),
          },
        ]
      }
    })
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  validationSubmit(){
    if(this.state.title === ''){
      alert('タイトルは空欄ではいけません')
    }else if(this.state.description === ''){
      alert('詳細は空欄ではいけません')
    }else if(this.state.amount === ''){
      alert('合計金額は空欄ではいけません')
    }else if(this.state.date === ''){
      alert('日付けは空欄ではいけません')
    }else {
      this.submitExpense()
    }
  }

  submitExpense(){
    fetch('/expenses', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount,
      date: this.state.date
    }),
    });
    console.log(this.state.expenses)
    this.setState({
     title: '',
     description:'',
     category: '',
     amount: '',
     date:' ',
   });
   setTimeout(() => {
     this.rerenderExpense()
   },100)
  }

  deleteExpense(id){
    fetch('/expenses/' + id, {
      method: 'DELETE',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      }
    });
    this.setState({
      expenses: this.state.expenses.slice(0, (this.state.expenses.length - 1)),
   });
   setTimeout(() => {
     this.rerenderExpense()
   },100)
  }

  validationEdit(id){
    if(this.state.title === ''){
      alert('タイトルは空欄ではいけません')
    }else if(this.state.description === ''){
      alert('詳細は空欄ではいけません')
    }else if(this.state.amount === ''){
      alert('合計金額は空欄ではいけません')
    }else if(this.state.date === ''){
      alert('日付けは空欄ではいけません')
    }else {
      this.editExpense(id)
    }
  }

  editExpense(id){
    fetch('/expenses/' + id, {
      method: 'PUT',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount,
      date: this.state.date
    }),
    });
    this.setState({
     title: '',
     description:'',
     category: '',
     amount: '',
     date: '',
     edit: !this.state.edit
   });
    setTimeout(() => {
      this.rerenderExpense()
    },100)
  }

  toggleEdit(arg){
    this.setState({
      clickedId: arg,
      edit: !this.state.edit,
    })
    console.log(this.state.clickedId)
  }

  rerenderExpense(){
    this.setState({dateEach: {},})
    this.setState({chartData: {},})
    this.setState({chartData2: {}})
    fetch('/expenses')
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      this.setState({expenses: data.data})
      data.data.map(item => {
        this.categoryCheck(item.category, item.amount)
        this.dateCheck(item.date, item.amount)
      })
      this.getChartData()
    })
  }

  render(){
    return(
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">支出</li>
          </ol>
        </nav>
        <Form
          handleChange = {this.handleChange}
          validationSubmit = {this.validationSubmit}
          title = {this.state.title}
          description = {this.state.description}
          amount = {this.state.amount}
          category = {this.state.category}
        />
        <div className="row">
          <DoughnutChart chartData = {this.state.chartData}/>
          <LineChart chartTitle = {'支出額推移'} chartData = {this.state.chartData2}/>
        </div>
          <Table
            expenses = {this.state.expenses}
            deleteExpense = {this.deleteExpense}
            toggleEdit = {this.toggleEdit}
            editting = {this.state.edit}
            handleChange = {this.handleChange}
            editExpense =  {this.validationEdit}
            clickedId = {this.state.clickedId}
          />
      </div>
    )
  }
}

export default Expense;
