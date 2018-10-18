import React from 'react';

class Form extends React.Component {
  render(){
    const options = [
      {name: 'カテゴリー', value: 'その他'},
      {name: '食費', value: '食費'},
      {name: '水道光熱費', value: '水道光熱費'},
      {name: '通信費', value: '通信費'},
      {name: '交通費', value: '交通費'},
      {name: '美容費', value: '美容費'},
      {name: '医療費', value: '医療費'},
      {name: '生活雑貨・日用品', value: '生活雑貨・日用品'},
      {name: '教育費', value: '教育費'},
      {name: '交遊費', value: '交遊費'},
      {name: '住宅費', value: '住宅費'},
      {name: '税金', value: '税金'},
      {name: 'その他費用', value: 'その他費用'}
    ]
    const selectOptions = options.map( n =>
      <option key = {n.name} value = {n.value}>
        {n.name}
      </option>
    )
    return(
      <div className="card">
        <div className="card-header bg-transparent">
         支出入力フォーム
        </div>
          <div className="card-body">
            <div className="form-inline">
                <div className="form-group">
                  <input type="text" name="title" value = {this.props.title} onChange={this.props.handleChange} placeholder = "タイトル"　className="form-control"/>
                 </div>
                  <div className="form-group">
                  <input type="text" name="description" value = {this.props.description} onChange={this.props.handleChange} placeholder = "詳細"　className="form-control"/>
                 </div>
                 <div className="form-group">
                    <select onChange={this.props.handleChange} value = {this.props.category} name = 'category' className ="form-control" >
                      {selectOptions}
                    </select>
                 </div>
                 <div className="form-group">
                    <input type="number" name="amount" value = {this.props.amount} onChange={this.props.handleChange} placeholder = '合計金額'　className="form-control"/>
                 </div>
                 <div className="form-group">
                   <input className="form-control" type="date" name = 'date' value= {this.props.date} onChange = {this.props.handleChange} placeholder = '日付'　className="form-control"/>
                </div>
                <button onClick = {this.props.validationSubmit}　className="btn btn-outline-primary custom">決定</button>
            </div>
          </div>
      </div>
  )
  }
}

export default Form;
