import React from 'react';
import Table from './Table';
import Form from './Form';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';

class Income extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description:'',
      category: '',
      amount: '',
      date:'',
      incomes: [],
      edit: false,
      clickedId: '',
      dateEach: {},
      sortedDateEach: {},
      categoryEach:{ '給料': 0, 'その他':0 },
      chartData: {},
      chartdata: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitIncome = this.submitIncome.bind(this);
    this.validationSubmit = this.validationSubmit.bind(this);
    this.editIncome = this.editIncome.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.validationEdit = this.validationEdit.bind(this);
    this.rerenderIncome = this.rerenderIncome.bind(this);
    this.getChartData = this.getChartData.bind(this);
    this.deleteIncome = this.deleteIncome.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0,0)
    fetch('/incomes')
    .then(response => response.json())
    .then(data => {
      this.setState({incomes: data.data})
      data.data.map(item => {
        this.categoryCheck(item.category, item.amount)
        this.dateCheck(item.date, item.amount)
      })
    this.dateSort()
    this.getChartData()
    console.log(this.state.dateEach)
   })
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

  categoryCheck(name, amount){
    if(name in this.state.categoryEach) {
      this.state.categoryEach[name] += amount
    } else {
      this.state.categoryEach['その他'] += amount
    }
  }

  getChartData() {
    this.setState({
      chartData:{
        labels:Object.keys(this.state.categoryEach),
        datasets:[
          {
            label: 'カテゴリー別収入額',
            data: Object.values(this.state.categoryEach),
            backgroundColor: ['#F5B090', '#FCD7A1', '#FFF9B1', '#D7E7AF', '#A5D4AD', '#A2D7D4', '#9FD9F6', '#A3BCE2', '#A59ACA', '#CFA7CD', '#FFF0F5', '#E5E5E5' ]
          }
        ]
      }
    })
    this.setState({
      chartdata:{
          labels: Object.keys(this.state.sortedDateEach),
        datasets:[
          {
            backgroundColor: "rgba(170, 216, 243, 0.14)",
            borderColor: "#AAD8F3",
            data: Object.values(this.state.sortedDateEach)
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
      this.submitIncome()
    }
  }

  submitIncome(){
    fetch('/incomes', {
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
    this.setState({
     title: '',
     description:'',
     category: '',
     amount: '',
     date: ''
   });
    setTimeout(() => {
      this.rerenderIncome()
    },100)
  }

  deleteIncome(id){
    fetch('/incomes/' + id, {
      method: 'DELETE',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      }
    });
    this.setState({
      incomes: this.state.incomes.slice(0, (this.state.incomes.length - 1))
   });
   setTimeout(() => {
     this.rerenderIncome()
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
      this.editIncome(id)
    }
  }

  editIncome(id){
    fetch('/incomes/' + id, {
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
      this.rerenderIncome()
    },100)
  }

  toggleEdit(arg){
    this.setState({
      clickedId: arg,
      edit: !this.state.edit,
    })
    console.log(this.state.clickedId)
  }

  rerenderIncome(){
    this.setState({dateEach: {},})
    this.setState({chartData: {},})
    this.setState({chartdata: {}})
    fetch('/incomes')
    .then(response => response.json())
    .then(data => {
      this.setState({incomes: data.data})
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
            <li className="breadcrumb-item active" aria-current="page">収入</li>
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
          <LineChart chartTitle = {'総収入額推移'} chartData = {this.state.chartdata}/>
        </div>
        <Table
          incomes = {this.state.incomes}
          deleteIncome = {this.deleteIncome}
          editIncome = {this.validationEdit}
          toggleEdit = {this.toggleEdit}
          editting = {this.state.edit}
          handleChange = {this.handleChange}
          clickedId = {this.state.clickedId}
        />
      </div>
    )
  }
}


export default Income;
