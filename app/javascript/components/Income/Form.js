import React from 'react';

class Form extends React.Component {
  render(){
    const options = [
      {name: 'カテゴリー', value: 'その他費用'},
      {name: '給料', value: '給料'},
      {name: 'その他', value: 'その他'},
    ]
    const selectOptions = options.map( n =>
      <option key = {n.name} value = {n.value}>
        {n.name}
      </option>
    )
    return(
      <div className="card">
        <div className="card-header bg-transparent">
          収入入力フォーム
        </div>
          <div className="card-body">
            <div className="form-inline">
                <div className="form-group " >
                  <input type="text" name="title" value = {this.props.title} onChange={this.props.handleChange} placeholder = "タイトル"　className="form-control" />
                 </div>
                  <div className="form-group">
                  <input type="text" name="description" value = {this.props.description} onChange={this.props.handleChange} placeholder = "詳細"　className="form-control"/>
                 </div>
                 <div className="form-group">
                    <select onChange={this.props.handleChange} value = {this.props.category} name = 'category' className ="form-control" id = 'option'>
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
