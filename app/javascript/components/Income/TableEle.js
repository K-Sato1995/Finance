import React from 'react';
import Moment from 'react-moment';
import EditForm from './EditForm';

class TableEle extends React.Component {
  render(){
    return(
      <tr>
        <th scope="row">
          <Moment format="YYYY/MM/DD">
            {this.props.date}
          </Moment>
        </th>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
        <td>{this.props.category}</td>
        <td>{this.props.amount.toLocaleString('ja-JP', {"style":"currency", "currency":"JPY"})}</td>
        <td>
          <a onClick = {() => {if(confirm('本当に削除してもよろしいですか？')) {this.props.deleteIncome(this.props.id)};}}>削除 ・ </a>
          <a onClick = {() => {this.props.toggleEdit(this.props.id)}} >編集</a>
            <EditForm editting = {this.props.editting}
                      id = {this.props.id}
                      title = {this.props.title}
                      description = {this.props.description}
                      category = {this.props.category}
                      amount = {this.props.amount}
                      toggleEdit = {this.props.toggleEdit}
                      editIncome = {this.props.editIncome}
                      handleChange = {this.props.handleChange}
                      clickedId = {this.props.clickedId}
            />
        </td>
      </tr>
    )
  }
}


export default TableEle;
