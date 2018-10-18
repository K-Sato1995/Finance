import React from 'react';
import TableEle from './TableEle';
import EditForm from './EditForm';

class Table extends React.Component {
  render(){
    const expenses = this.props.expenses.map(item =>
      <TableEle key = {item.id}
                id = {item.id}
                deleteExpense = {this.props.deleteExpense}
                toggleEdit = {this.props.toggleEdit}
                title = {item.title}
                amount = {item.amount}
                description = {item.description}
                date = {item.date}
                category = {item.category}
                editting = {this.props.editting}
                editExpense = {this.props.editExpense}
                handleChange = {this.props.handleChange}
                clickedId = {this.props.clickedId}
      />
      )
    return(
      <div className="card" id = 'money-table'>
        <div className="card-header bg-transparent">
          今月支出一覧
        </div>
        <div className="card-body">
          <table className="table  table-striped table-bordered table-hover">
            <thead className="thead">
              <tr>
                <th scope="col">日付</th>
                <th scope="col">タイトル</th>
                <th scope="col">詳細</th>
                <th scope="col">カテゴリー</th>
                <th scope="col">合計金額</th>
                <th scope="col">削除・編集</th>
              </tr>
            </thead>
            <tbody>
              {expenses}
            </tbody>
          </table>
        </div>
        </div>
    )
  }
}


export default Table;
