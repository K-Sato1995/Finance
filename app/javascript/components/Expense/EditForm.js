import React from 'react';

class EditForm extends React.Component {
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
    const layer = {
    backgroundColor: 'rgba(20,20,20, .8)',
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    zIndex: '1',
    }
    const hidden = {
      display: 'none'
    }
    const modal = {
      margin: '0 auto',
      marginTop: '130px',
      height: '430px',
      width: '500px',
      backgroundColor: '#fff'
    }
    const button = {
      marginLeft: '170px'
    }
    const x = {
      float: 'right',
      backgroundColor:'#fff',
      border: 'solid 1px #DFE2E6',
      borderRadius: '30px',
      paddingRight: '15px',
      paddingLeft: '15px',
    }
    const editting = this.props.editting ? layer : hidden
    return(
    <div style = {editting}>
      <div className="card" style = {modal}>
        <div className="card-header bg-transparent">
           編集フォーム<button style = {x} onClick = {this.props.toggleEdit} >閉じる</button>
        </div>
          <div className="card-body">
            <div className="editForm-inline">
                <div className="form-group " >
                  <input type="text" name="title" onChange={this.props.handleChange} placeholder = "タイトル"　className="form-control"/>
                </div>
                  <div className="form-group">
                  <input type="text" name="description" onChange={this.props.handleChange} placeholder = "詳細"　className="form-control"/>
                 </div>
                 <div className="form-group">
                    <select onChange={this.props.handleChange} name = 'category' className ="form-control" >
                      {selectOptions}
                    </select>
                 </div>
                 <div className="form-group">
                    <input type="number" name="amount"  onChange={this.props.handleChange} placeholder = '合計金額'　className="form-control"/>
                 </div>
                <div className="form-group">
                  <input className="form-control" type="date" name = 'date' onChange = {this.props.handleChange} placeholder = '日付'　className="form-control"/>
                </div>
              <button onClick = {() => {this.props.editExpense(this.props.clickedId)}}　className="btn btn-outline-primary custom" style = {button}>決定</button>
          </div>
          </div>
      </div>
    </div>
  )
  }
}

export default EditForm;
